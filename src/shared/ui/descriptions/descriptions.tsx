import { Descriptions as AntDescriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

const Descriptions = ({
    title,
    items,
    layout = 'horizontal',
    column = 1,
    size = 'small'
}: DescriptionsProps) => {
    return <AntDescriptions
        size={size}
        title={title}
        layout={layout}
        items={items}
        column={column}
    />
};

export default Descriptions;