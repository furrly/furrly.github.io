import React from 'react';
import { useTranslation } from 'react-i18next';
import GeneralContent from './GeneralContent';

const About = () => {
  const { t } = useTranslation();

  return (
    <GeneralContent>
      <h1>{t('about.title')}</h1>
      <p>{t('about.p1')}</p>
    </GeneralContent>
  );
}

export default About;