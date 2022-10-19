import React from 'react';
import { useTranslation } from 'react-i18next';
import GeneralContent from './GeneralContent';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <GeneralContent>
      <h1>{t('contact.title')}</h1>
      <p>{t('contact.p1')}</p>
    </GeneralContent>
  );
}

export default Contact;