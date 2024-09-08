import { Input } from "antd";
import styled from "styled-components";

const { Search } = Input;

export const StyledInput = styled(Input) <{ margin?: string }>`  
    margin-bottom: ${({ margin }) => margin || '0'};
`;

export const StyledSearch = styled(Search)` 
`;