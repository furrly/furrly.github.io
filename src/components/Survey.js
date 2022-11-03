import React from 'react';
import { useTranslation } from 'react-i18next';
import GeneralContent from '../views/GeneralContent';
import Button from './elements/Button';

const Survey = () => {
    const { t } = useTranslation();

    return (
        <GeneralContent>
            <h1>{t('survey.title')}</h1>
            <div style={{ marginBottom: 50 }} data-reveal-delay="600">
            </div>
            <a href={t('survey.breederUrl')}>
                <Button style={{ marginRight: 50, marginBottom: 50, width: 200 }} className={"button-register"}>{t('survey.breeder')}</Button>
            </a>
            <a href={t('survey.ownerUrl')}>
                <Button style={{ marginRight: 50, width: 200 }}  className={"button-register"}>{t('survey.owner')}</Button>
            </a>
        </GeneralContent>
    );
}

export default Survey;