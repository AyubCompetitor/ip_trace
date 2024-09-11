import { Flex } from "antd";
import styled, { css } from "styled-components";
import React from "react";

export const StyledEqualBlocksFlex = styled(Flex)(
  (props) => {
    return css`
        height: 90%; 
        padding-top: 2rem; 
        
        & > * {  
        max-width: ${100 / React.Children.count(props.children)}%;  
        min-width: ${100 / React.Children.count(props.children)}%;  
        min-height: 100%;  
      }   
    `;
  }
); 