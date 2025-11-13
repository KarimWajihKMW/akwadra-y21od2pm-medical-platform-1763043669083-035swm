'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { 
  BookOpen, 
  Brain, 
  Volume2, 
  CheckCircle, 
  Users, 
  FileText,
  Sparkles,
  Trophy,
  Target
} from 'lucide-react';

export default function HomePage() {
  const t = useTranslations();

  const features = [
    {
      icon: Brain,
      title: t('features.aiAssistant.title'),
      description: t('features.aiAssistant.description'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Volume2,
      title: t('features.textToSpeech.title'),
      description: t('features.textToSpeech.description'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: CheckCircle,
      title: t('features.autoCorrection.title'),
      description: t('features.autoCorrection.description'),
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Users,
      title: t('features.parentDashboard.title'),
      description: t('features.parentDashboard.description'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BookOpen,
      title: t('features.curriculum.title'),
      description: t('features.curriculum.description'),
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: FileText,
      title: t('features.assignments.title'),
      description: t('features.assignments.description'),
      color: 'from-red-500 to-rose-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6 animate-float">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold">منصة تعليمية بالذكاء الاصطناعي</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              {t('hero.subtitle')}
            </p>
            
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Target className="h-5 w-5 mr-2" />
                  {t('hero.getStarted')}
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <BookOpen className="h-5 w-5 mr-2" />
                  {t('hero.learnMore')}
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-3xl opacity-20 animate-pulse" />
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-4xl">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                  <div className="text-gray-600">طالب نشط</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-gray-600">معلم</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">1K+</div>
                  <div className="text-gray-600">درس</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف كيف يمكن للذكاء الاصطناعي أن يحول تجربتك التعليمية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <Trophy className="h-16 w-16 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ابدأ رحلتك التعليمية اليوم!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            انضم إلى آلاف الطلاب والمعلمين الذين يستخدمون ذاكرلي لتحسين تجربتهم التعليمية
          </p>
          <Link href="/auth/signup">
            <Button size="lg" variant="secondary" className="text-lg px-12 py-6 hover:scale-105 transition-transform">
              <Sparkles className="h-5 w-5 mr-2" />
              إنشاء حساب مجاني
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
