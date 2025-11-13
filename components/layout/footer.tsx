'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-4">
              <BookOpen className="h-8 w-8" />
              <span>ذاكرلي</span>
            </div>
            <p className="text-blue-100">
              منصة تعليمية ذكية متطورة لتجربة تعليمية فريدة
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="text-blue-100 hover:text-white transition-colors">
                  المعلمون
                </Link>
              </li>
              <li>
                <Link href="/students" className="text-blue-100 hover:text-white transition-colors">
                  الطلاب
                </Link>
              </li>
              <li>
                <Link href="/parents" className="text-blue-100 hover:text-white transition-colors">
                  أولياء الأمور
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">الدعم</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-blue-100 hover:text-white transition-colors">
                  المساعدة
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-100 hover:text-white transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-blue-100 hover:text-white transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">اتصل بنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-blue-100">
                <Mail className="h-4 w-4" />
                <span>info@zakerly.com</span>
              </li>
              <li className="flex items-center gap-2 text-blue-100">
                <Phone className="h-4 w-4" />
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2 text-blue-100">
                <MapPin className="h-4 w-4" />
                <span>القاهرة، مصر</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-8 pt-8 text-center text-blue-100">
          <p>© 2024 ذاكرلي - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
