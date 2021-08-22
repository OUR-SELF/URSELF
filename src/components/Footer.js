import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <img
        alt="footer"
        src={'/images/footer.png'}
        style={{ margin: '0 auto' }}
      />
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
 
 
  max-width:80vw;
  margin:auto;
`;
export default Footer;
