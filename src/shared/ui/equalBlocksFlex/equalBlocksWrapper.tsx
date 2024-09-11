import { Flex, FlexProps } from "antd";
import React from "react";

interface EqualBlocksFlexProps extends FlexProps {
  children: React.ReactNode;
}

const EqualBlocksFlex = (props: EqualBlocksFlexProps) => (
  <Flex {...props}>{props.children}</Flex>
);

export default EqualBlocksFlex;
