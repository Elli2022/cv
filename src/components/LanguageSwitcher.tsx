// src/components/LanguageSwitcher.tsx
import { useTranslation } from 'next-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'sv' ? 'en' : 'sv');
  };

  return (
    <button onClick={toggleLanguage}>
      {i18n.language === 'sv' ? 'English' : 'Svenska'}
    </button>
  );
};

export default LanguageSwitcher;
