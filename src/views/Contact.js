import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const style = {
    margin: 50
  };
  const { t } = useTranslation();

  return (
    <div style={style}>
      <h1>{t('contact.title')}</h1>
      <p>{t('contact.p1')}</p>
    </div>
  );
}

export default Contact;