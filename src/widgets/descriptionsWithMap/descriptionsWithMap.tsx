import Descriptions from "../../shared/ui/descriptions/descriptions";
import GenericResult from "../../shared/ui/result/result";
import useDescriptionsWithMap from "./useDescriptionsWithMap";
import EqualBlocksFlex from "../../shared/ui/equalBlocksFlex/equalBlocksWrapper";
import MapComponent from "../../shared/ui/mapComponent/MapComponent";
import { useTranslation } from "react-i18next";


const DescriptionsWithMap = () => {
  const { ipInfo, fallBackStatus, lonLat} = useDescriptionsWithMap();
  const { t } = useTranslation();


  const renderDescriptionsAndMap = () => (
    <EqualBlocksFlex justify="space-between">
      <Descriptions column={2} items={ipInfo} size="middle" />
      <MapComponent points={lonLat} />
    </EqualBlocksFlex>
  );

  const renderErrorResult = () => (
    <GenericResult
      status="error"
      title={fallBackStatus}
      subTitle={t('main.result.errorTitle')}
    />
  );

  return (
    <>
      {!fallBackStatus && ipInfo && renderDescriptionsAndMap()}
      {fallBackStatus && !ipInfo && renderErrorResult()}
    </>
  );
};

export default DescriptionsWithMap;
