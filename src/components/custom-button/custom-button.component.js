import React from 'react';

import './custom-button.styles.scss';

const CustomButton = (props) => {
  const {
    children,
    isGoogleSignIn,
    inverted,
    ...otherProps
  } = props;

  return (
    <button
      className={`custom-button 
        ${isGoogleSignIn ? 'google-sign-in' : ''} 
        ${inverted ? 'inverted' : ''}`}
        {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
