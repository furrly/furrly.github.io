import classNames from 'classnames';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionProps } from '../../utils/SectionProps';
import AppStoreLinks from '../AppStoreLinks';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { ReactComponent as Furrly } from './../../assets/images/furrly.svg';

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

  const isFrench = i18n.language.startsWith("fr");
  var youtubeLink = isFrench ? "https://www.youtube.com/embed/I-BwNV1e700?autoplay=1" : "https://www.youtube.com/embed/yADXeKWcHgo?autoplay=1";
  var thumbnailLink = isFrench ? "thumbnail_fr.png" : "thumbnail_en.png";

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <Furrly height={250} />
            </h1>
            <h3 className='mt-0 mb-12 center-content-mobile'>{t("home.hero.mission")}</h3>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="400">
            <a
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/" + thumbnailLink)}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video={youtubeLink}
            videoTag="iframe" />
          <div className="hero-content">
            <div className="container-xs">
              <div className="reveal-from-bottom" style={{ marginBottom: 50 }} data-reveal-delay="600">
                <a href="https://app.furrly.com/web/breederregistration">
                  <Button className={"button-register"}>{t('home.hero.breederRegistration')}</Button>
                </a>
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="800">
                <AppStoreLinks />
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