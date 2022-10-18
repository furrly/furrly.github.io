import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FooterSocial from './partials/FooterSocial';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  const { t } = useTranslation();

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          <div className="footer-top space-between text-xxs">
            <div style={{}}>
              <Link to="">{t('footer.home')}</Link>
              <br/>
              <Link to="about">{t('footer.about')}</Link>
              <br/>
              <Link to="contact">{t('footer.contact')}</Link>
              <br/>
              <Link to="privacy">{t('footer.privacy')}</Link>
              <br/>
              <Link to="terms">{t('footer.terms')}</Link>
            </div>
            <FooterSocial size={32} />
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;