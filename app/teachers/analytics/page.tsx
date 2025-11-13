'use client';

import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  Users, 
  BookOpen,
  Award,
  Target,
  Activity
} from 'lucide-react';

export default function AnalyticsPage() {
  const stats = [
    { label: 'إجمالي الطلاب', value: '156', change: '+12%', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { label: 'المقررات النشطة', value: '12', change: '+8%', icon: BookOpen, color: 'text-green-600', bgColor: 'bg-green-100' },
    { label: 'الواجبات المسلمة', value: '342', change: '+15%', icon: Award, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { label: 'متوسط الدرجات', value: '85%', change: '+5%', icon: Target, color: 'text-orange-600', bgColor: 'bg-orange-100' },
  ];

  const coursePerformance = [
    { course: 'الرياضيات المتقدمة', students: 45, avgScore: 87, completion: 92 },
    { course: 'اللغة العربية', students: 38, avgScore: 85, completion: 88 },
    { course: 'العلوم', students: 42, avgScore: 83, completion: 85 },
    { course: 'التاريخ', students: 31, avgScore: 89, completion: 95 },
  ];

  const recentActivity = [
    { action: 'تسليم واجب جديد', student: 'أحمد محمد', course: 'الرياضيات', time: 'منذ 10 دقائق' },
    { action: 'إكمال درس', student: 'فاطمة علي', course: 'اللغة العربية', time: 'منذ 25 دقيقة' },
    { action: 'تسليم واجب جديد', student: 'محمد أحمد', course: 'العلوم', time: 'منذ ساعة' },
    { action: 'إكمال امتحان', student: 'نور حسن', course: 'التاريخ', time: 'منذ ساعتين' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            التحليلات والإحصائيات
          </h1>
          <p className="text-gray-600">تتبع أداء الطلاب والمقررات</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Course Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                أداء المقررات
              </CardTitle>
              <CardDescription>ملخص أداء الطلاب في كل مقرر</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {coursePerformance.map((course, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{course.course}</span>
                      <span className="text-sm text-muted-foreground">{course.students} طالب</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">المتوسط: </span>
                        <span className="font-semibold text-blue-600">{course.avgScore}%</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">الإكمال: </span>
                        <span className="font-semibold text-green-600">{course.completion}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all"
                        style={{ width: `${course.completion}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                النشاط الأخير
              </CardTitle>
              <CardDescription>آخر أنشطة الطلاب</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Activity className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">
                        {activity.student} - {activity.course}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>الأداء عبر الزمن</CardTitle>
            <CardDescription>تتبع تطور أداء الطلاب خلال الفصل الدراسي</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                <p className="text-gray-600">الرسوم البيانية قيد التطوير</p>
                <p className="text-sm text-gray-500">سيتم إضافة تحليلات مفصلة قريباً</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
