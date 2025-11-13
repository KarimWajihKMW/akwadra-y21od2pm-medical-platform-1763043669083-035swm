'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { Search, BookOpen, Filter } from 'lucide-react';

export default function LibraryPage() {
  const t = useTranslations('library');
  const [searchTerm, setSearchTerm] = useState('');

  const lessons = [
    { title: 'مقدمة في الجبر', subject: 'الرياضيات', grade: 'الصف الثالث', views: 1240 },
    { title: 'قواعد اللغة العربية', subject: 'اللغة العربية', grade: 'الصف الرابع', views: 980 },
    { title: 'علوم الأحياء', subject: 'العلوم', grade: 'الصف الخامس', views: 750 },
    { title: 'التاريخ الإسلامي', subject: 'التاريخ', grade: 'الصف السادس', views: 620 },
    { title: 'الفيزياء الحديثة', subject: 'الفيزياء', grade: 'الصف السابع', views: 890 },
    { title: 'الكيمياء العضوية', subject: 'الكيمياء', grade: 'الصف الثامن', views: 540 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-gray-600">ابحث عن الدروس والمواد التعليمية</p>
        </div>

        <div className="mb-8 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            تصفية
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{lesson.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">المادة:</span>
                    <span className="font-medium">{lesson.subject}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">الصف:</span>
                    <span className="font-medium">{lesson.grade}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">المشاهدات:</span>
                    <span className="font-medium">{lesson.views}</span>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    عرض الدرس
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
