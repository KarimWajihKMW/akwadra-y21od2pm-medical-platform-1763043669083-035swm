import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let courses;
    if (session.role === 'TEACHER') {
      // Get teacher's courses
      const teacher = await prisma.teacher.findUnique({
        where: { userId: session.userId },
      });

      if (!teacher) {
        return NextResponse.json({ error: 'Teacher profile not found' }, { status: 404 });
      }

      courses = await prisma.course.findMany({
        where: { teacherId: teacher.id },
        include: {
          teacher: {
            include: {
              user: {
                select: { fullName: true, email: true }
              }
            }
          },
          _count: {
            select: {
              lessons: true,
              enrollments: true,
              assignments: true,
              exams: true
            }
          }
        },
        orderBy: { createdAt: 'desc' }
      });
    } else if (session.role === 'STUDENT') {
      // Get student's enrolled courses
      const student = await prisma.student.findUnique({
        where: { userId: session.userId },
      });

      if (!student) {
        return NextResponse.json({ error: 'Student profile not found' }, { status: 404 });
      }

      const enrollments = await prisma.enrollment.findMany({
        where: { studentId: student.id },
        include: {
          course: {
            include: {
              teacher: {
                include: {
                  user: {
                    select: { fullName: true }
                  }
                }
              },
              _count: {
                select: {
                  lessons: true,
                  enrollments: true
                }
              }
            }
          }
        }
      });

      courses = enrollments.map(e => e.course);
    } else {
      return NextResponse.json({ error: 'Invalid role' }, { status: 403 });
    }

    return NextResponse.json({ courses });
  } catch (error) {
    console.error('Get courses error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
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
    const { title, description, subject, grade } = body;

    if (!title || !subject || !grade) {
      return NextResponse.json(
        { error: 'Title, subject, and grade are required' },
        { status: 400 }
      );
    }

    const course = await prisma.course.create({
      data: {
        title,
        description,
        subject,
        grade,
        teacherId: teacher.id,
      },
      include: {
        teacher: {
          include: {
            user: {
              select: { fullName: true }
            }
          }
        }
      }
    });

    return NextResponse.json({ course }, { status: 201 });
  } catch (error) {
    console.error('Create course error:', error);
    return NextResponse.json(
      { error: 'Failed to create course' },
      { status: 500 }
    );
  }
}
