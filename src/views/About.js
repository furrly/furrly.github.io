import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const style = {
    margin: 50
  };
  const { t } = useTranslation();

  return (
    <div style={style}>
      <h1>{t('about.title')}</h1>
      <p>{t('about.p1')}</p>
    </div>
  );
}

export default About;