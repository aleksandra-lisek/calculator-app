import React from 'react';
import Button from '../Button/Button';



  const keypad = (props) =>{

    const keypadKeys = [
        ['c', '+/-', '%', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.','DEL','='],
      ];
      const keypadKeys = [
        ['c', '+/-', '%', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.','DEL','='],
      ];



      const buttons
      return{  keypadKeys.map(block => {
            return block.map(key => (
                <Button />
            ));
        })
      }
  }