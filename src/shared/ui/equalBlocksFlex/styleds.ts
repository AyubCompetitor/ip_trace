import { Flex } from "antd";
import styled, { css } from "styled-components";
import React from "react";

export const StyledEqualBlocksFlex = styled(Flex)(
  (props) => {
    return css`
        padding-top: 2rem;
        flex-wrap: wrap;

        & > * {
          flex: 1 0 ${100 / React.Children.count(props.children)}%;
      }   
    `;
  }
); 