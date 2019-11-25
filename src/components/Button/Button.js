import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';


const ButtonStyled = styled.button`
  width:25%;
  height:20%;
  display: inline-block;
  border: none;
  margin: 0;
  text-decoration: none;
  line-height: 1.2;
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  background-color: #ffffff;
  color:  #7f7f7f;
  // eslint-disable-next-line no-unused-expressions
  // eslint-disable-next-line arrow-parens
  ${(props) => {
    // eslint-disable-next-line no-unused-expressions
    return props.isSpecial && css`
  background-color: #d7d7d7;
  color: #6b6b6b;
  `;
  }}

  &:hover{
    color: #f979b9b3;
    font-size: 32px;
    ${(props) => {
    // eslint-disable-next-line no-unused-expressions
    props.isSpecial && css`
    color: #272727;
    font-size: 32px;
  `;
  }
}
    
  }
`;
class Button extends React.PureComponent {
  render() {
    const { buttonKey, onButtonClick, isSpecial } = this.props;
    const handleClick = (e) => { onButtonClick(e.target.textContent); };
    return (
      <ButtonStyled
        isSpecial={isSpecial}
        buttonKey={buttonKey}
        onClick={handleClick}
        type="button"
      >
        {buttonKey}
      </ButtonStyled>
    );
  }
}

Button.propTypes = {
  buttonKey: propTypes.string.isRequired,
  onButtonClick: propTypes.func.isRequired,
  isSpecial: propTypes.bool.isRequired,
};

export default Button;
