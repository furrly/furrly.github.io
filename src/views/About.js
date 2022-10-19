import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import GeneralContent from './GeneralContent';

const About = () => {
  const linkStyle = {
    color: "#717D86"
  };
  const { t } = useTranslation();

  return (
    <GeneralContent>
      <h1>{t('about.title')}</h1>
      <p><Trans i18nKey="about.p1"><Link style={linkStyle} to={{pathname: "https://sylc.dev"}} target="_blank"></Link></Trans></p>
    </GeneralContent>
  );  
}

export default About;