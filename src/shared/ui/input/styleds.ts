import { Input } from "antd";
import styled from "styled-components";

const { Search } = Input;

export const StyledInput = styled(Input) <{ margin?: string }>``;

export const StyledSearch = styled(Search)`
  width: 70%;
  min-width: 250px;

  &&&& .ant-input {
    color: var(--label-color);
    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 50px;
  }

  &&&& .ant-btn {
    padding: 1.2rem 2rem;
    background-color: var(--button-bg);
    margin-left: 15px;
    border: 0;
    border-radius: 50px;
  }
`;
