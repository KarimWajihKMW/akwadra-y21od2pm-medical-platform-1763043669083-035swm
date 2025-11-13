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

    let exams;
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

      exams = await prisma.exam.findMany({
        where,
        include: {
          course: {
            select: { title: true }
          },
          _count: {
            select: { results: true }
          }
        },
        orderBy: { scheduledAt: 'desc' }
      });
    } else if (session.role === 'STUDENT') {
      const student = await prisma.student.findUnique({
        where: { userId: session.userId },
      });

      if (!student) {
        return NextResponse.json({ error: 'Student profile not found' }, { status: 404 });
      }

      // Get exams from enrolled courses
      const enrollments = await prisma.enrollment.findMany({
        where: { studentId: student.id },
        select: { courseId: true }
      });

      const courseIds = enrollments.map(e => e.courseId);
      const where: any = { courseId: { in: courseIds } };
      
      if (courseId) {
        where.courseId = courseId;
      }

      exams = await prisma.exam.findMany({
        where,
        include: {
          course: {
            select: { title: true }
          },
          results: {
            where: { studentId: student.id },
            select: {
              id: true,
              score: true,
              submittedAt: true
            }
          }
        },
        orderBy: { scheduledAt: 'asc' }
      });
    } else {
      return NextResponse.json({ error: 'Invalid role' }, { status: 403 });
    }

    return NextResponse.json({ exams });
  } catch (error) {
    console.error('Get exams error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch exams' },
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
    const { title, description, courseId, scheduledAt, duration, maxScore } = body;

    if (!title || !courseId || !scheduledAt || !duration) {
      return NextResponse.json(
        { error: 'Title, courseId, scheduledAt, and duration are required' },
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

    const exam = await prisma.exam.create({
      data: {
        title,
        description,
        courseId,
        teacherId: teacher.id,
        scheduledAt: new Date(scheduledAt),
        duration,
        maxScore: maxScore || 100,
        status: 'SCHEDULED'
      },
      include: {
        course: {
          select: { title: true }
        }
      }
    });

    return NextResponse.json({ exam }, { status: 201 });
  } catch (error) {
    console.error('Create exam error:', error);
    return NextResponse.json(
      { error: 'Failed to create exam' },
      { status: 500 }
    );
  }
}
