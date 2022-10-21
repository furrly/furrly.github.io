import React from 'react';
import { ReactComponent as AppleStoreEn } from './../assets/images/app_store_en_RGB_blk_092917.svg';
import { ReactComponent as AppleStoreFr } from './../assets/images/app_store_fr_RGB_blk_092917.svg';
import { ReactComponent as GoogleStoreEn } from './../assets/images/google-play-badge-en-081922.svg';
import { ReactComponent as GoogleStoreFr } from './../assets/images/google-play-badge-fr-091222.svg';
import ButtonGroup from './elements/ButtonGroup';
import { useTranslation } from 'react-i18next';

const AppStoreLinks = ({ isComingSoon, appleStoreUrl, googleStoreUrl }) => {

    const disabledStyle = {
        filter: "grayscale(90%) opacity(50%)"
    };

    const badgeStyle = isComingSoon ? disabledStyle : {};
    const buttonStyle = {
        padding: 10
    };

    const { t, i18n } = useTranslation();
    const badgeHeight = 80;
    const isFrench = i18n.language.startsWith("fr");
    const appleBadge = isFrench ? <AppleStoreFr style={badgeStyle} height={badgeHeight} /> : <AppleStoreEn style={badgeStyle} height={badgeHeight} />;
    const googleBadge = isFrench ? <GoogleStoreFr style={badgeStyle} height={badgeHeight} /> : <GoogleStoreEn style={badgeStyle} height={badgeHeight} />;

    if (isComingSoon) {
        return (
            <>
                <h5>{t("home.hero.comingSoon")}</h5>
                <ButtonGroup>
                    <div style={buttonStyle}>{appleBadge}</div>
                    <div style={buttonStyle}>{googleBadge}</div>
                </ButtonGroup>
            </>);
    } else {
        return (
            <ButtonGroup>
                <div style={buttonStyle}><a title="Apple" href={appleStoreUrl}>{appleBadge}</a></div>
                <div style={buttonStyle}><a title="Google" href={googleStoreUrl}>{googleBadge}</a></div>
            </ButtonGroup>);
    }
}

export default AppStoreLinks;