/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';

const Style = styled.label`
  color: ${(props) => props.theme.color.textSecondary};

  input {
    display: grid;
    place-items: center;
    padding: 1rem 1.6rem;
    outline: none;
    background-color: none;
    border: 1px solid ${(props) => props.theme.color.textSecondary};
    border-radius: 0.4rem;
    width: 100%;
    font-size: 1.4rem;
    margin-top: 10px;
    background-color: transparent;
    color: ${(props) => props.theme.color.textPrimary};
  }
`;

type Props = {
  title: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  copyValue?: boolean;
};

function InputText({ title, onChange, value, copyValue = false }: Props) {
  const onClickHandler = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    if (!copyValue) {
      return;
    }
    e.currentTarget.select();
    document.execCommand('copy');
  };

  return (
    <Style>
      {title}
      <input
        type="text"
        value={value}
        onChange={onChange}
        onClick={onClickHandler}
      />
    </Style>
  );
}

export default InputText;
