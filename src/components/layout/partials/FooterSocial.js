import React from 'react';
import classNames from 'classnames';

const FooterSocial = ({
  className,
  size,
  ...props
}) => {

  var iconSize = size ?? 16;
  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://facebook.com/app.furrly">
            <svg
              width={iconSize}
              height={iconSize}
              viewBox="-4.5 -4.5 32 32"
              xmlns="http://www.w3.org/2000/svg">
              <title>Facebook</title>
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;