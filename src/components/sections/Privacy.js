import React from 'react';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const style = {
    margin: 50
  };
  const { t } = useTranslation();

  return (
    <div style={style}>
      <h1>{t('privacy.title')}</h1>
      <p>{t('privacy.intro')}</p>
      <p>{t('privacy.consent.text')}</p>
      <ul>
        <li>{t('privacy.consent.b1')}</li>
        <li>{t('privacy.consent.b2')}</li>
        <li>{t('privacy.consent.b3')}</li>
      </ul>
      <h2>{t('privacy.photoGallery.title')}</h2>
      <p>{t('privacy.photoGallery.p1')}</p>
      <h2>{t('privacy.onlineData.title')}</h2>
      <p>{t('privacy.onlineData.p1')}</p>
      <h2>{t('privacy.localFiles.title')}</h2>
      <p>{t('privacy.localFiles.p1')}</p>
      <h2>{t('privacy.security.title')}</h2>
      <p>{t('privacy.security.p1')}</p>
    </div>
  );
}

export default Privacy;