import { Flex } from 'antd';
import Descriptions from '../../shared/ui/descriptions/descriptions';
import GenericResult from '../../shared/ui/result/result';
import useDescriptionsWithMap from './useDescriptionsWithMap';

const DescriptionsWithMap = () => {
    const { ipInfo, fallBackStatus } = useDescriptionsWithMap();

    return (
        <>
            {!fallBackStatus && ipInfo
                ? <Flex justify='space-between'>
                    <Descriptions column={2} items={ipInfo} />
                </Flex>
                : <GenericResult
                    status='error'
                    title={fallBackStatus}
                    subTitle='Проверьте валидность введенного IP-адреса'
                />
            }
        </>
    );
};

export default DescriptionsWithMap;