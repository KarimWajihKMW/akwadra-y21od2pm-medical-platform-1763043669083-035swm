'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { LocaleSwitcher } from './locale-switcher';
import { BookOpen, LogIn, UserPlus } from 'lucide-react';

export function Navigation() {
  const t = useTranslations('nav');

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <BookOpen className="h-8 w-8" />
            <span>ذاكرلي</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              {t('home')}
            </Link>
            <Link href="/teachers" className="text-foreground hover:text-primary transition-colors">
              {t('teachers')}
            </Link>
            <Link href="/students" className="text-foreground hover:text-primary transition-colors">
              {t('students')}
            </Link>
            <Link href="/parents" className="text-foreground hover:text-primary transition-colors">
              {t('parents')}
            </Link>
            <Link href="/library" className="text-foreground hover:text-primary transition-colors">
              {t('library')}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <LocaleSwitcher />
            <Link href="/auth/login">
              <Button variant="outline" size="sm">
                <LogIn className="h-4 w-4 mr-2" />
                {t('login')}
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm">
                <UserPlus className="h-4 w-4 mr-2" />
                {t('signup')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
