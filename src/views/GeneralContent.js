import React from 'react';

const GeneralContent = ({children}) => {

  return (
    <div className="center-content">
      <div className="container">
        <div style={{paddingTop:100}} className="section-inner ta-l">
          <div className="reveal-from-bottom" data-reveal-delay="200">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralContent;