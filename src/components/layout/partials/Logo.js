import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  isDark,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );
  let value = require('./../../../assets/images/furrly.svg');

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={value}
            alt="Open"
            width={256}
            height={256} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;