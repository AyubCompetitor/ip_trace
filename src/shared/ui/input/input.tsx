import { StyledInput, StyledSearch } from './styleds';
import { SearchProps } from 'antd/es/input';

interface GenericInputProps extends SearchProps {
    type: 'basic' | 'search',
}

const GenericInput = (props: GenericInputProps) => {
    const { type } = props;

    const inputType = {
        basic: <StyledInput {...props} />,
        search: <StyledSearch {...props} />
    }

    return inputType[type || 'basic'];
};

export default GenericInput;