'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Award, 
  PlusCircle, 
  AlertCircle,
  Loader2,
  Calendar,
  Clock,
  Users
} from 'lucide-react';

interface Exam {
  id: string;
  title: string;
  description: string;
  scheduledAt: string;
  duration: number;
  maxScore: number;
  status: string;
  course: {
    title: string;
  };
  _count: {
    results: number;
  };
}

interface Course {
  id: string;
  title: string;
}

export default function ExamsPage() {
  const router = useRouter();
  const [exams, setExams] = useState<Exam[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    courseId: '',
    scheduledAt: '',
    duration: '60',
    maxScore: '100',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [examsRes, coursesRes] = await Promise.all([
        fetch('/api/exams'),
        fetch('/api/courses')
      ]);

      if (examsRes.ok) {
        const data = await examsRes.json();
        setExams(data.exams || []);
      }

      if (coursesRes.ok) {
        const data = await coursesRes.json();
        setCourses(data.courses || []);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('فشل في تحميل البيانات');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const response = await fetch('/api/exams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          duration: parseInt(formData.duration),
          maxScore: parseInt(formData.maxScore),
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create exam');
      }

      setFormData({ title: '', description: '', courseId: '', scheduledAt: '', duration: '60', maxScore: '100' });
      setShowForm(false);
      fetchData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'فشل في إنشاء الامتحان');
    } finally {
      setSubmitting(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { text: string; color: string }> = {
      SCHEDULED: { text: 'مجدول', color: 'bg-blue-100 text-blue-700' },
      IN_PROGRESS: { text: 'جاري', color: 'bg-yellow-100 text-yellow-700' },
      COMPLETED: { text: 'مكتمل', color: 'bg-green-100 text-green-700' },
    };
    
    const statusInfo = statusMap[status] || { text: status, color: 'bg-gray-100 text-gray-700' };
    return (
      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusInfo.color}`}>
        {statusInfo.text}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              إدارة الامتحانات
            </h1>
            <p className="text-gray-600">أنشئ وأدر امتحانات الطلاب</p>
          </div>
          <Button
            onClick={() => setShowForm(!showForm)}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            امتحان جديد
          </Button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-2 text-red-700">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {showForm && (
          <Card className="mb-8 shadow-xl">
            <CardHeader>
              <CardTitle>إنشاء امتحان جديد</CardTitle>
              <CardDescription>أدخل تفاصيل الامتحان</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">عنوان الامتحان *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="مثال: امتحان الفصل الأول"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="courseId">المقرر *</Label>
                    <select
                      id="courseId"
                      value={formData.courseId}
                      onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">اختر المقرر</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="scheduledAt">موعد الامتحان *</Label>
                    <Input
                      id="scheduledAt"
                      type="datetime-local"
                      value={formData.scheduledAt}
                      onChange={(e) => setFormData({ ...formData, scheduledAt: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="duration">المدة (بالدقائق) *</Label>
                    <Input
                      id="duration"
                      type="number"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      min="1"
                      placeholder="60"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="maxScore">الدرجة القصوى *</Label>
                    <Input
                      id="maxScore"
                      type="number"
                      value={formData.maxScore}
                      onChange={(e) => setFormData({ ...formData, maxScore: e.target.value })}
                      min="1"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">الوصف</Label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="تفاصيل الامتحان والمواضيع المشمولة"
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        جاري الإنشاء...
                      </>
                    ) : (
                      'إنشاء الامتحان'
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    disabled={submitting}
                  >
                    إلغاء
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        ) : exams.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Award className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">لا توجد امتحانات</h3>
              <p className="text-gray-600 mb-4">ابدأ بإنشاء امتحان جديد</p>
              <Button
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <PlusCircle className="h-5 w-5 mr-2" />
                إنشاء أول امتحان
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam) => (
              <Card
                key={exam.id}
                className="hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    {getStatusBadge(exam.status)}
                  </div>
                  <CardTitle className="text-xl">{exam.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {exam.description || 'لا يوجد وصف'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">المقرر:</span>
                      <span className="font-semibold">{exam.course.title}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span>الموعد: {new Date(exam.scheduledAt).toLocaleDateString('ar-SA')}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <span>المدة: {exam.duration} دقيقة</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-purple-600" />
                      <span>الدرجة القصوى: {exam.maxScore}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm pt-2 border-t">
                      <Users className="h-4 w-4 text-green-600" />
                      <span>{exam._count.results} طالب أجرى الامتحان</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
