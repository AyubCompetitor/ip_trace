import React from "react";
import { StyledEqualBlocksFlex } from "./styleds";
import { FlexProps } from "antd";

export interface EqualBlocksFlexProps extends FlexProps {
  children: React.ReactNode;
}

const EqualBlocksFlex = (props: EqualBlocksFlexProps) => (
  <StyledEqualBlocksFlex {...props}>{props.children}</StyledEqualBlocksFlex>
);

export default EqualBlocksFlex;
