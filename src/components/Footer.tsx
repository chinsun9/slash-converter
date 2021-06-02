import React from 'react';
import styled from '@emotion/styled';

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.bgSecondary};
  justify-content: space-between;
  padding: 0.5rem 0.8rem;

  a {
    color: ${(props) => props.theme.color.textLink};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

function Footer() {
  return (
    <Style>
      <a href="https://github.com/chinsun9" target="_blank" rel="noreferrer">
        @chinsun9
      </a>
      <a
        href="https://github.com/chinsun9/slash-converter"
        target="_blank"
        rel="noreferrer"
      >
        source code
      </a>
    </Style>
  );
}

export default Footer;
