import type { DescriptionsProps } from "antd";
import { StyledDescriptions } from "./styleds";

const Descriptions = ({
  title,
  items,
  layout = "horizontal",
  column = 1,
  size = "small",
}: DescriptionsProps) => {
  return (
    <StyledDescriptions
      size={size}
      title={title}
      layout={layout}
      items={items}
      column={column}
    />
  );
};

export default Descriptions;
