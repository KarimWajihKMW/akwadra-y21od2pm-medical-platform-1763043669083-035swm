'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { Briefcase, Upload, Users, Award } from 'lucide-react';

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            للمعلمين
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            أدوات قوية لإدارة الفصول والمناهج وتتبع أداء الطلاب
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Upload, title: 'رفع المحتوى', desc: 'قم برفع الدروس والمواد التعليمية بسهولة' },
            { icon: Users, title: 'إدارة الطلاب', desc: 'تتبع أداء وتقدم الطلاب' },
            { icon: Award, title: 'التقييم الذكي', desc: 'تصحيح تلقائي وذكي للواجبات والامتحانات' },
          ].map((feature, i) => (
            <Card key={i} className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/auth/signup">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12">
              <Briefcase className="h-5 w-5 mr-2" />
              انضم كمعلم
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
