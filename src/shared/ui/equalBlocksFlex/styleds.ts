import { Flex } from "antd";
import styled from "styled-components";

export const EqualBlocksFlex = styled(Flex)`
  & > * {
    max-width: 50%;
    min-width: 50%;
    min-height: 100%
  }
`;
