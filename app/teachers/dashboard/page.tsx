'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { 
  BookOpen, 
  Users, 
  FileText, 
  Upload, 
  PlusCircle,
  TrendingUp,
  Calendar,
  Award,
  BarChart3
} from 'lucide-react';

export default function TeacherDashboard() {
  const t = useTranslations();
  const router = useRouter();

  const stats = [
    { label: 'المقررات النشطة', value: '12', icon: BookOpen, color: 'text-blue-600' },
    { label: 'الطلاب', value: '156', icon: Users, color: 'text-green-600' },
    { label: 'الواجبات', value: '28', icon: FileText, color: 'text-orange-600' },
    { label: 'الامتحانات', value: '8', icon: Calendar, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            لوحة تحكم المعلم
          </h1>
          <p className="text-gray-600">إدارة المقررات والطلاب والواجبات</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-12 w-12 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card 
            className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100"
            onClick={() => router.push('/teachers/courses')}
          >
            <CardHeader>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                <Upload className="h-6 w-6 text-white" />
              </div>
              <CardTitle>إدارة المقررات</CardTitle>
              <CardDescription>
                إنشاء وإدارة المقررات الدراسية
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push('/teachers/courses');
                }}
              >
                الانتقال للمقررات
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-green-50 to-green-100"
            onClick={() => router.push('/teachers/assignments')}
          >
            <CardHeader>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-2">
                <PlusCircle className="h-6 w-6 text-white" />
              </div>
              <CardTitle>إدارة الواجبات</CardTitle>
              <CardDescription>
                إنشاء وتقييم واجبات الطلاب
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push('/teachers/assignments');
                }}
              >
                إدارة الواجبات
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-purple-50 to-purple-100"
            onClick={() => router.push('/teachers/exams')}
          >
            <CardHeader>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-white" />
              </div>
              <CardTitle>إدارة الامتحانات</CardTitle>
              <CardDescription>
                إنشاء وجدولة الامتحانات
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push('/teachers/exams');
                }}
              >
                إدارة الامتحانات
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-orange-50 to-orange-100"
            onClick={() => router.push('/teachers/analytics')}
          >
            <CardHeader>
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-2">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <CardTitle>التحليلات والإحصائيات</CardTitle>
              <CardDescription>
                تتبع أداء الطلاب والمقررات
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-orange-600 hover:bg-orange-700"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push('/teachers/analytics');
                }}
              >
                عرض التحليلات
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                النشاط الأخير
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: 'تم رفع درس جديد', subject: 'الرياضيات', time: 'منذ ساعة' },
                  { action: 'تم تقييم واجب', subject: 'اللغة العربية', time: 'منذ ساعتين' },
                  { action: 'طالب جديد انضم', subject: 'الصف الثالث', time: 'منذ 3 ساعات' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0">
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.subject}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                المواعيد القادمة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: 'امتحان الرياضيات', date: 'الأحد، 15 نوفمبر', class: 'الصف الثالث' },
                  { title: 'موعد تسليم واجب', date: 'الإثنين، 16 نوفمبر', class: 'الصف الرابع' },
                  { title: 'اجتماع أولياء الأمور', date: 'الأربعاء، 18 نوفمبر', class: 'جميع الصفوف' },
                ].map((event, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0">
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{event.class}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{event.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
