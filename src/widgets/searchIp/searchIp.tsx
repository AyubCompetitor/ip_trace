import GenericInput from "../../shared/ui/input/input";
import useSearchIp from "./useSearchIp";
import { Flex } from "antd";
import { useTranslation } from "react-i18next";

const SearchIp = () => {
  const { searchInputHandler, getIpInfoHandler, query } = useSearchIp();
  const { t } = useTranslation();

  return (
    <Flex justify="center">
      <GenericInput
        type="search"
        enterButton={t('main.input.btnTitle')}
        onChange={searchInputHandler}
        onSearch={getIpInfoHandler}
        value={query}
      />
    </Flex>
  );
};

export default SearchIp;
