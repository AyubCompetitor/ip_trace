import { Flex } from "antd";
import { StyledHeader, StyledText, StyledTitle } from "./styleds";

interface HeaderWithLogoProps {
  icon: React.ReactNode;
  text: string;
  titleSize?: 1 | 2 | 3 | 4 | 5;
  textColor?: "light" | "dark";
  gap?: number;
}

const HeaderWithLogo = ({
  icon,
  text,
  titleSize = 2,
  textColor = "light",
  gap = 12,
}: HeaderWithLogoProps) => {
  return (
    <StyledHeader>
      <Flex align="center" gap={gap}>
        <StyledText textColor={textColor}>{icon}</StyledText>
        <StyledTitle textColor={textColor} level={titleSize} children={text} />
      </Flex>
    </StyledHeader>
  );
};

export default HeaderWithLogo;
