import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma, isDatabaseConfigured } from '@/lib/prisma';
import { createSession, setSessionCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    if (!isDatabaseConfigured()) {
      return NextResponse.json(
        { error: 'Database is not configured. Please add a database to use authentication.' },
        { status: 503 }
      );
    }

    const { email, password, fullName, role } = await request.json();

    // Validate input
    if (!email || !password || !fullName || !role) {
      return NextResponse.json(
        { error: 'جميع الحقول مطلوبة' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني مستخدم بالفعل' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
        role,
      },
    });

    // Create role-specific record
    if (role === 'TEACHER') {
      await prisma.teacher.create({
        data: {
          userId: user.id,
        },
      });
    } else if (role === 'STUDENT') {
      await prisma.student.create({
        data: {
          userId: user.id,
        },
      });
    } else if (role === 'PARENT') {
      await prisma.parent.create({
        data: {
          userId: user.id,
        },
      });
    }

    // Create session
    const session = await createSession({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // Set session cookie
    await setSessionCookie(session);

    return NextResponse.json({
      success: true,
      role: user.role,
      userId: user.id,
    });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ أثناء إنشاء الحساب' },
      { status: 500 }
    );
  }
}
