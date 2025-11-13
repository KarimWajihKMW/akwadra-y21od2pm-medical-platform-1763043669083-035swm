import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get('courseId');

    let assignments;
    if (session.role === 'TEACHER') {
      const teacher = await prisma.teacher.findUnique({
        where: { userId: session.userId },
      });

      if (!teacher) {
        return NextResponse.json({ error: 'Teacher profile not found' }, { status: 404 });
      }

      const where: any = { teacherId: teacher.id };
      if (courseId) {
        where.courseId = courseId;
      }

      assignments = await prisma.assignment.findMany({
        where,
        include: {
          course: {
            select: { title: true }
          },
          _count: {
            select: { submissions: true }
          }
        },
        orderBy: { createdAt: 'desc' }
      });
    } else if (session.role === 'STUDENT') {
      const student = await prisma.student.findUnique({
        where: { userId: session.userId },
      });

      if (!student) {
        return NextResponse.json({ error: 'Student profile not found' }, { status: 404 });
      }

      // Get assignments from enrolled courses
      const enrollments = await prisma.enrollment.findMany({
        where: { studentId: student.id },
        select: { courseId: true }
      });

      const courseIds = enrollments.map(e => e.courseId);
      const where: any = { courseId: { in: courseIds } };
      
      if (courseId) {
        where.courseId = courseId;
      }

      assignments = await prisma.assignment.findMany({
        where,
        include: {
          course: {
            select: { title: true }
          },
          submissions: {
            where: { studentId: student.id },
            select: {
              id: true,
              status: true,
              score: true,
              submittedAt: true
            }
          }
        },
        orderBy: { dueDate: 'asc' }
      });
    } else {
      return NextResponse.json({ error: 'Invalid role' }, { status: 403 });
    }

    return NextResponse.json({ assignments });
  } catch (error) {
    console.error('Get assignments error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch assignments' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    
    if (!session || session.role !== 'TEACHER') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const teacher = await prisma.teacher.findUnique({
      where: { userId: session.userId },
    });

    if (!teacher) {
      return NextResponse.json({ error: 'Teacher profile not found' }, { status: 404 });
    }

    const body = await request.json();
    const { title, description, courseId, dueDate, maxScore } = body;

    if (!title || !courseId || !dueDate) {
      return NextResponse.json(
        { error: 'Title, courseId, and dueDate are required' },
        { status: 400 }
      );
    }

    // Verify teacher owns the course
    const course = await prisma.course.findFirst({
      where: {
        id: courseId,
        teacherId: teacher.id
      }
    });

    if (!course) {
      return NextResponse.json(
        { error: 'Course not found or unauthorized' },
        { status: 404 }
      );
    }

    const assignment = await prisma.assignment.create({
      data: {
        title,
        description,
        courseId,
        teacherId: teacher.id,
        dueDate: new Date(dueDate),
        maxScore: maxScore || 100,
      },
      include: {
        course: {
          select: { title: true }
        }
      }
    });

    return NextResponse.json({ assignment }, { status: 201 });
  } catch (error) {
    console.error('Create assignment error:', error);
    return NextResponse.json(
      { error: 'Failed to create assignment' },
      { status: 500 }
    );
  }
}
