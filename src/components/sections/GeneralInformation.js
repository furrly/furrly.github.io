import React from 'react';
import { useTranslation } from 'react-i18next';


const GeneralInformation = () => {
    const {t} = useTranslation();

    return (<div className="container">
        <div className="section-inner pt-0">
            <div className="center-content">
                <div className="container-xs">
                    <h3 className="mt-0 mb-16">{t("home.tiles.title")}</h3>
                    <div className='ta-c'>
                        {t("home.informations")}
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default GeneralInformation;