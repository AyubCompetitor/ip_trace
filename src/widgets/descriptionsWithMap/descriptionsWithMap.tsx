import { YMaps, Map } from "@pbe/react-yandex-maps";
import { EqualBlocksFlex } from "../../shared/ui/equalBlocksFlex/styleds";
import Descriptions from "../../shared/ui/descriptions/descriptions";
import GenericResult from "../../shared/ui/result/result";
import useDescriptionsWithMap from "./useDescriptionsWithMap";

const DescriptionsWithMap = () => {
  const { ipInfo, fallBackStatus } = useDescriptionsWithMap();

  return (
    <>
      {!fallBackStatus && ipInfo ? (
        <EqualBlocksFlex justify="center">
          <Descriptions column={2} items={ipInfo} />
          <YMaps>
            <Map height={100} defaultState={{ center: [43.309, 45.6966], zoom: 9 }} />
          </YMaps>
        </EqualBlocksFlex>
      ) : (
        <GenericResult
          status="error"
          title={fallBackStatus}
          subTitle="Проверьте валидность введенного IP-адреса"
        />
      )}
    </>
  );
};

export default DescriptionsWithMap;
