import React from 'react';
import styled from '@emotion/styled';

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0000001d;
  padding: 1rem 1.6rem;
`;
function Header() {
  return (
    <Style>
      <h1>Slash Converter</h1>
    </Style>
  );
}

export default Header;
