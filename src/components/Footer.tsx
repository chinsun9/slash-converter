import React from 'react';
import styled from '@emotion/styled';

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0000001d;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
`;

function Footer() {
  return (
    <Style>
      <a href="https://github.com/chinsun9">@chinsun9</a>
      <a href="https://github.com/chinsun9/slash-converter">source code</a>{' '}
    </Style>
  );
}

export default Footer;
