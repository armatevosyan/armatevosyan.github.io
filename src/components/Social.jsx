import React, { useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

const data = {
  social: [
    {
      network: 'linkedin',
      href: 'https://linkedin.com/in/armen-matevosyan-b269071b9',
    },
    {
      network: 'github',
      href: 'https://github.com/armatevosyan',
    },
    {
      network: 'email',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=matevosyan.2011@gmail.com&su=SUBJECT',
    },
  ],
};

function Social() {
  const theme = useContext(ThemeContext);

  return (
    <div className="social">
      {data ? data.social.map((social) => (
        <SocialIcon
          key={social.network}
          style={styles.iconStyle}
          url={social.href}
          network={social.network}
          bgColor={theme.socialIconBgColor}
          target="_blank"
          rel="noopener"
        />
      )) : null}
    </div>
  );
}

export default Social;
