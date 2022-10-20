import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { ReactComponent as AppleStoreEn } from './../../assets/images/app_store_en_RGB_blk_092917.svg';
import { ReactComponent as AppleStoreFr } from './../../assets/images/app_store_fr_RGB_blk_092917.svg';
import { ReactComponent as GoogleStoreEn } from './../../assets/images/google-play-badge-en-081922.svg';
import { ReactComponent as GoogleStoreFr } from './../../assets/images/google-play-badge-fr-091222.svg';
import { ReactComponent as Furrly } from './../../assets/images/furrly.svg';
import { useTranslation } from 'react-i18next';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const { t, i18n } = useTranslation();
  const badgeHeight = 80;
  const isFrench = i18n.language.startsWith("fr");
  const appleBadge = isFrench ? <AppleStoreFr height={badgeHeight} /> : <AppleStoreEn height={badgeHeight} />;
  const googleBadge = isFrench ? <GoogleStoreFr height={badgeHeight} /> : <GoogleStoreEn height={badgeHeight} />;

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <Furrly height={250} />
            </h1>

          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="400">
            <a
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/thumbnail.png')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/embed/U-J8MMQhuBA?&autoplay=1"
            videoTag="iframe" />
          <div className="hero-content">
            <div className="container-xs">
              <div className="reveal-from-bottom" style={{ marginBottom: 50 }} data-reveal-delay="600">
                <a href="https://app.furrly.com/web/breederregistration">
                  <Button className={"button-register"}>{t('home.hero.breederRegistration')}</Button>
                </a>
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="800">
                <ButtonGroup>
                  <a title="Apple" href="https://play.google.com/store/apps/details?id=app.furrly">{appleBadge}</a>
                  <div style={{ padding: 10 }}></div>
                  <a title="Google" href="https://play.google.com/store/apps/details?id=app.furrly">{googleBadge}</a>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;