import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import GeneralContent from './GeneralContent';

const Contact = () => {
  const { t } = useTranslation();
  const linkStyle = {
    color: "#717D86"
  };

  return (
    <GeneralContent>
      <h1>{t('contact.title')}</h1>
      <p><Trans i18nKey="contact.p1"><Link style={linkStyle} to="#" onClick={() => window.location = 'mailto:info@furrly.com'}></Link></Trans></p>
    </GeneralContent>
  );
}

export default Contact;