import { StyledHeader, StyledText, StyledTitle } from './styleds';

interface HeaderWithLogoProps {
    icon: React.ReactNode,
    text: string,
    titleSize?: 1 | 2 | 3 | 4 | 5,
    textColor?: 'light' | 'dark',
}


const HeaderWithLogo = ({ icon, text, titleSize = 4, textColor = 'light' }: HeaderWithLogoProps) => {

    return (
        <StyledHeader>
            <StyledText textColor={textColor}>{icon}</StyledText>
            <StyledTitle
                textColor={textColor}
                level={titleSize}
                children={text}
            />
        </StyledHeader>
    );
};

export default HeaderWithLogo;