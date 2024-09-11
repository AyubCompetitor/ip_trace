import { Input } from "antd";
import styled from "styled-components";

const { Search } = Input;

export const StyledInput = styled(Input)<{ margin?: string }>``;

export const StyledSearch = styled(Search)`
  max-width: 80%;

  &&&& .ant-input {
    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 50px;
  }

  &&&& .ant-btn {
    padding: 1.2rem 3rem;
    background-color: var(--button-bg);
    margin-left: 15px;
    border: 0;
    border-radius: 50px;
  }
`;
