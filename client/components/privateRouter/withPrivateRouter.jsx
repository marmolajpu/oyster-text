import React from 'react';
import Router from 'next/router';

const login = '/'; // Define your login route address.

/**
 * Check user authentication and authorization
 * @returns {{auth: null}}
 */
const checkUserAuthentication = () => {
  return { auth: false};
};

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async ({ res }) => {
    const userAuth = await checkUserAuthentication();

    if (!userAuth?.auth) {
      if (res) {
        res?.writeHead(302, {
          Location: login,
        });
        res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps(userAuth);
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};