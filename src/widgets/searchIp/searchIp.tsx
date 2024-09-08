import GenericInput from '../../shared/ui/input/input';
import useSearchIp from './useSearchIp';

const SearchIp = () => {
    const { getIpInfoHandler } = useSearchIp();

    return (
        <GenericInput
            type='search'
            enterButton='Search'
            onSearch={getIpInfoHandler}
        />
    );
};

export default SearchIp;