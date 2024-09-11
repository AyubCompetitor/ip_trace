import { Descriptions } from "antd";
import styled from "styled-components";

export const StyledDescriptions = styled(Descriptions)`
  & .ant-descriptions-item-label {
    color: var(--label-color);
  }

  & .ant-descriptions-item-content {
    color: var(--content-color);
  }
`;
