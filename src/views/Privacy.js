import React from 'react';
import { useTranslation } from 'react-i18next';
import GeneralContent from './GeneralContent';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <GeneralContent>
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
      <ul>
        <li>{t('privacy.onlineData.b1')}</li>
        <li>{t('privacy.onlineData.b2')}</li>
        <li>{t('privacy.onlineData.b3')}</li>
      </ul>
      <p>{t('privacy.onlineData.p2')}</p>
      <ol>
        <li>{t('privacy.onlineData.d1')}</li>
        <li>{t('privacy.onlineData.d2')}</li>
        <li>{t('privacy.onlineData.d3')}</li>
      </ol>
      <h2>{t('privacy.localFiles.title')}</h2>
      <p>{t('privacy.localFiles.p1')}</p>
      <h2>{t('privacy.security.title')}</h2>
      <p>{t('privacy.security.p1')}</p>
    </GeneralContent>
  );
}

export default Privacy;