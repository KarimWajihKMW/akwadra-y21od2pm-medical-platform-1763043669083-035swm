'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LocaleSwitcher() {
  const t = useTranslations();

  const switchLocale = async (locale: string) => {
    // Set cookie for locale preference
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    // Reload page to apply new locale
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLocale('ar')}
        className="px-2"
      >
        العربية
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLocale('en')}
        className="px-2"
      >
        English
      </Button>
    </div>
  );
}
