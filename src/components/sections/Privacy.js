import React from 'react';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const style = {
    margin: 50
  };
  const { t } = useTranslation();

  return (
      <div style={style}>
        <h1>{t('privacy.title')}</h1>
        <p>Furrly manages the use of personal information pursuant to standards set forth in the Personal Information Protection and Electronic Documents Act (S.C. 2000, c. 5) and the Act respecting the protection of personal information in the private sector (L.R.Q., c. P-39.1).</p>
        <p>You acknowledge, consent and agree that Furrly can access, keep and disclose information on the use of the present mobile application (hereafter the “Application”) if required by law or if Furrly has bona fide reason to believe that protection or disclosure is necessary to:</p>
        <ul>
          <li>comply with the legal process;</li>
          <li>ensure compliance with the present terms of use;</li>
          <li>respond to your customer service requests;</li>
        </ul>
        <h2>Photo Gallery</h2>
        <p>The Application requires access rights to the camera and the device files to update the Photo Gallery. Unless explicitly shared, photos are only accessible by the owner. Photos are stored on Furrly's servers and can be deleted individually or deleting all the information associated with the user account via a feature offered on the application web site.</p>
        <h2>Online Data</h2>
        <p>The user profile stored online contains personal user information that is collected during the Application registration and profile updates. A feature is provided on the application web site to delete all the information associated with your user account.</p>
        <h2>Local Files</h2>
        <p>Some data is saved and stored locally on the user's phone (some application preferences, images cache and others). It is not saved online. All local data is deleted when the user uninstalls the Application.</p>
        <h2>Security</h2>
        <p>The personal information we collect is kept in a secure environment. People having access to this data are required to respect the confidentiality of your information.</p>
      </div>
  );
}

export default Privacy;