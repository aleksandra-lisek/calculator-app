import React from 'react';
import propTypes from 'prop-types';
import { Textfit } from 'react-textfit';
import styled from 'styled-components';

const ScreenStyled = styled.div`
  height: calc(2*(100%/7));
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;

   .half-screen{
    box-sizing: border-box;
    height: 50%;
    padding-right: 20px;
    line-height: 1.2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
   }

   .top-screen{
    background-color: #fdd7ea;
    color: #f979b9b3;
    font-size: 24px;
   }
   .bottom-screen{
    height: 50%;
    background-color: #fef1f8;
    color: #f979b9b3;
    font-size: 48px;
   }
`;

const screen = (props) => {
  const { expression, total } = props;

  return (
    <ScreenStyled>
      <Textfit
        max={24}
        throttle={60}
        mode="single"
        className="half-screen top-screen"
      >
        <span>{expression}</span>
      </Textfit>
      <Textfit
        max={48}
        mode="single"
        className="half-screen bottom-screen"
      >
        <span>{total}</span>
      </Textfit>
    </ScreenStyled>
  );
};

screen.propTypes = {
  expression: propTypes.string.isRequired,
  total: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]).isRequired,
};

export default screen;
