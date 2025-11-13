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

    if (!courseId) {
      return NextResponse.json({ error: 'Course ID required' }, { status: 400 });
    }

    const lessons = await prisma.lesson.findMany({
      where: { courseId },
      include: {
        teacher: {
          include: {
            user: {
              select: { fullName: true }
            }
          }
        },
        course: {
          select: { title: true }
        }
      },
      orderBy: { order: 'asc' }
    });

    return NextResponse.json({ lessons });
  } catch (error) {
    console.error('Get lessons error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch lessons' },
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
    const { title, content, fileUrl, courseId, order } = body;

    if (!title || !courseId) {
      return NextResponse.json(
        { error: 'Title and courseId are required' },
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

    const lesson = await prisma.lesson.create({
      data: {
        title,
        content,
        fileUrl,
        courseId,
        teacherId: teacher.id,
        order: order || 0,
      },
      include: {
        teacher: {
          include: {
            user: {
              select: { fullName: true }
            }
          }
        },
        course: {
          select: { title: true }
        }
      }
    });

    return NextResponse.json({ lesson }, { status: 201 });
  } catch (error) {
    console.error('Create lesson error:', error);
    return NextResponse.json(
      { error: 'Failed to create lesson' },
      { status: 500 }
    );
  }
}
