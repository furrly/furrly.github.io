import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import GeneralContent from './GeneralContent';

const Terms = () => {
  const linkStyle = {
    color: "#717D86"
  };
  const { t } = useTranslation();

  return (
    <GeneralContent>
      <h1>{t('terms.title')}</h1>
      <p>{t('terms.intro')}</p>
      <h2>{t('terms.general.title')}</h2>
      <p>{t('terms.general.p1')}</p>
      <h2>{t('terms.privacy.title')}</h2>
      <p>{t('terms.privacy.p1')}</p>
      <p><Trans i18nKey="terms.privacy.p2">...<Link style={linkStyle} to="/privacy">...</Link></Trans></p>
      <h2>{t('terms.license.title')}</h2>
      <p>{t('terms.license.p1')}</p>
      <p>{t('terms.license.p2')}</p>
      <p>{t('terms.license.p3')}</p>
      <h2>{t('terms.conditions.title')}</h2>
      <p>{t('terms.conditions.p1.text')}</p>
      <ul>
        <li>{t('terms.conditions.p1.b1')}</li>
        <li>{t('terms.conditions.p1.b2')}</li>
        <li>{t('terms.conditions.p1.b3')}</li>
        <li>{t('terms.conditions.p1.b4')}</li>
        <li>{t('terms.conditions.p1.b5')}</li>
        <li>{t('terms.conditions.p1.b6')}</li>
        <li>{t('terms.conditions.p1.b7')}</li>
      </ul>
      <h2>{t('terms.limitations.title')}</h2>
      <p>{t('terms.limitations.p1')}</p>
      <p>{t('terms.limitations.p2.text')}</p>
      <ul>
        <li>{t('terms.limitations.p2.b1')}</li>
        <li>{t('terms.limitations.p2.b2')}</li>
        <li>{t('terms.limitations.p2.b3')}</li>
      </ul>
      <h2>{t('terms.platforms.title')}</h2>
      <p>{t('terms.platforms.p1')}</p>
      <p>{t('terms.platforms.p2')}</p>
      <h2>{t('terms.rules.title')}</h2>
      <p>{t('terms.rules.p1')}</p>
      <p>{t('terms.rules.p2')}</p>
      <h2>{t('terms.liability.title')}</h2>
      <p>{t('terms.liability.p1')}</p>
      <h2>{t('terms.warranty.title')}</h2>
      <p>{t('terms.warranty.p1')}</p>
      <h2>{t('terms.indemnification.title')}</h2>
      <p>{t('terms.indemnification.p1')}</p>
      <p>{t('terms.indemnification.p2')}</p>
      <h2>{t('terms.links.title')}</h2>
      <p>{t('terms.links.p1')}</p>
      <h2>{t('terms.law.title')}</h2>
      <p>{t('terms.law.p1')}</p>
      <p>{t('terms.law.p2')}</p>
      <p>{t('terms.law.p3')}</p>
      <h2>{t('terms.termination.title')}</h2>
      <p>{t('terms.termination.p1')}</p>
      <h2>{t('terms.amendments.title')}</h2>
      <p>{t('terms.amendments.p1')}</p>
      <h2>{t('terms.agreement.title')}</h2>
      <p>{t('terms.agreement.p1')}</p>
      <h2>{t('terms.severance.title')}</h2>
      <p>{t('terms.severance.p1')}</p>
      <h2>{t('terms.contact.title')}</h2>
      <p><Trans i18nKey="terms.contact.p1">...<Link style={linkStyle} to="/contact"></Link></Trans></p>
    </GeneralContent>
  );
}

export default Terms;