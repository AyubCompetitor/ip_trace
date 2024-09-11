import { useTranslation } from 'react-i18next';
import { GlobeSvg } from '../../shared/assets/icons';
import { MainContent, MainWrapper } from './styleds';

import DescriptionsWithMap from '../../widgets/descriptionsWithMap/descriptionsWithMap';
import HeaderWithLogo from '../../shared/ui/headerWithLogo/headerWithLogo';
import SearchIp from '../../widgets/searchIp/searchIp';

const Main = () => {
    const { t } = useTranslation();

    return (
        <MainWrapper>
            <HeaderWithLogo icon={<GlobeSvg />} gap={20} text={t('main.header.ip')} />
            <MainContent>
                <SearchIp />
                <DescriptionsWithMap />
            </MainContent>
        </MainWrapper>
    )
};

export default Main;