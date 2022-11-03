import React from 'react';
import { useTranslation } from 'react-i18next';
import GeneralContent from '../views/GeneralContent';
import Button from './elements/Button';

const Survey = () => {
    const { t } = useTranslation();

    return (
        <GeneralContent>
            <h1 style={{ marginBottom: 50 }}>{t('survey.title')}</h1>
            <div className='center-content-mobile'>
                <a href={t('survey.breederUrl')}>
                    <Button style={{ marginLeft:50, marginRight: 50, marginBottom: 50, width: 200 }} className={"button-register"}>{t('survey.breeder')}</Button>
                </a>
                <a href={t('survey.ownerUrl')}>
                    <Button style={{ marginLeft:50, marginRight: 50, width: 200 }} className={"button-register"}>{t('survey.owner')}</Button>
                </a>
            </div>
        </GeneralContent>
    );
}

export default Survey;