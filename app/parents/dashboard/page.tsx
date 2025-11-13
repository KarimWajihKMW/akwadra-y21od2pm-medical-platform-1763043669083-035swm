'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { TrendingUp, Award, Calendar, MessageSquare } from 'lucide-react';

export default function ParentDashboard() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          لوحة تحكم ولي الأمر
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'المتوسط العام', value: '85%', icon: TrendingUp, color: 'text-blue-600' },
            { label: 'الحضور', value: '95%', icon: Calendar, color: 'text-green-600' },
            { label: 'الواجبات المكتملة', value: '24/28', icon: Award, color: 'text-orange-600' },
            { label: 'الرسائل', value: '3', icon: MessageSquare, color: 'text-purple-600' },
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>الأداء الأكاديمي</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { subject: 'الرياضيات', grade: 'A', score: 92 },
                  { subject: 'اللغة العربية', grade: 'A', score: 88 },
                  { subject: 'العلوم', grade: 'B+', score: 82 },
                  { subject: 'التاريخ', grade: 'A-', score: 85 },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0">
                    <div>
                      <p className="font-medium">{item.subject}</p>
                      <p className="text-sm text-muted-foreground">الدرجة: {item.score}/100</p>
                    </div>
                    <span className="text-xl font-bold text-blue-600">{item.grade}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>التقارير الأخيرة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: 'تقرير الفصل الدراسي الأول', date: '2024-11-10' },
                  { title: 'تقييم المعلم', date: '2024-11-05' },
                  { title: 'تقرير الحضور الشهري', date: '2024-11-01' },
                ].map((report, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0">
                    <div>
                      <p className="font-medium">{report.title}</p>
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </div>
                    <button className="text-primary hover:underline text-sm">عرض</button>
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
