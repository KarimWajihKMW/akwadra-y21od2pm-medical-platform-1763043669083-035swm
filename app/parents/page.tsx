'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { Users, TrendingUp, MessageSquare, Calendar } from 'lucide-react';

export default function ParentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            لأولياء الأمور
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            تابع أداء وتقدم أبنائك الأكاديمي بسهولة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { icon: TrendingUp, title: 'تقارير مفصلة', desc: 'احصل على تقارير شاملة عن أداء أبنائك' },
            { icon: Calendar, title: 'تتبع الحضور', desc: 'راقب حضور أبنائك وانتظامهم' },
            { icon: MessageSquare, title: 'التواصل المباشر', desc: 'تواصل مع المعلمين بسهولة' },
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
              <Users className="h-5 w-5 mr-2" />
              انضم كولي أمر
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
