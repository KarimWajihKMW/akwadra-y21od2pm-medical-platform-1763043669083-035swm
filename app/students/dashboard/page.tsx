'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { BookOpen, FileText, Calendar, Brain, Volume2, Trophy } from 'lucide-react';

export default function StudentDashboard() {
  const t = useTranslations();

  const courses = [
    { name: 'الرياضيات', progress: 75, color: 'bg-blue-600' },
    { name: 'اللغة العربية', progress: 90, color: 'bg-green-600' },
    { name: 'العلوم', progress: 60, color: 'bg-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          منصة الطالب
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">مقرراتي</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <BookOpen className="h-12 w-12 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">الواجبات</p>
                  <p className="text-3xl font-bold">5</p>
                </div>
                <FileText className="h-12 w-12 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">المتوسط</p>
                  <p className="text-3xl font-bold">85%</p>
                </div>
                <Trophy className="h-12 w-12 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>مقرراتي</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {courses.map((course, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{course.name}</span>
                    <span className="text-sm text-muted-foreground">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`${course.color} h-2 rounded-full`} style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>مساعد الذكاء الاصطناعي</CardTitle>
              <CardDescription>اسأل أي سؤال عن دروسك</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Button className="flex-1 bg-blue-600">
                    <Brain className="h-4 w-4 mr-2" />
                    اسأل المساعد
                  </Button>
                  <Button variant="outline">
                    <Volume2 className="h-4 w-4 mr-2" />
                    اقرأ بصوت عالٍ
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  استخدم المساعد الذكي للحصول على شرح للدروس والإجابة على أسئلتك
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
