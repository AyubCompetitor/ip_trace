import { Flex } from "antd";
import GenericInput from "../../shared/ui/input/input";
import useSearchIp from "./useSearchIp";

const SearchIp = () => {
  const { getIpInfoHandler } = useSearchIp();

  return (
    <Flex justify="center">
      <GenericInput
        type="search"
        enterButton="Search IP"
        onSearch={getIpInfoHandler}
      />
    </Flex>
  );
};

export default SearchIp;
