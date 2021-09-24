import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import InputText from './InputText';
import { convertSlash } from '../utils/convertSlash';

const Style = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 100%;
  max-width: 1000px;
  padding: 0 2rem;
  margin: auto;
  grid-template-rows: 1fr auto;

  .input,
  .result {
    width: 100%;
  }

  .result {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 1rem;
    height: 0;
    overflow: hidden;
    margin: 2rem 0;
    transition: height 0.4s ease;

    > * {
      flex: 1 1 300px;
    }
  }
`;

function Main() {
  const containerRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const [userInput, setUserInput] = useState('');
  const onUserInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    const userInputLength = userInput.trim().length;
    const containerBox = containerRef.current;
    const resultBox = resultRef.current;

    if (containerBox && resultBox) {
      resultBox.style.height = `${
        userInputLength ? containerBox.offsetHeight / 2 : 0
      }px`;
    }
  }, [userInput]);

  return (
    <Style ref={containerRef}>
      <div className="input">
        <InputText
          title="input your path"
          value={userInput}
          onChange={onUserInputChangeHandler}
        />
      </div>

      <div className="result" ref={resultRef}>
        <InputText
          title="type /"
          value={convertSlash('/', userInput)}
          onChange={() => null}
          copyValue
        />
        <InputText
          title="type \"
          value={convertSlash('\\', userInput)}
          onChange={() => null}
          copyValue
        />
        <InputText
          title="type \\"
          value={convertSlash('\\\\', userInput)}
          onChange={() => null}
          copyValue
        />
      </div>
    </Style>
  );
}

export default Main;
