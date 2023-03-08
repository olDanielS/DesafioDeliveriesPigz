import styled from 'styled-components/native';

import { OrangePrimaryColor, BlackPrimaryColor, BlackSecondaryColor, WhitePrimaryColor} from '../globalStyles';

export const Container = styled.View`
    flex: 1;
    padding: 15px;
    background-color: ${WhitePrimaryColor};
`
export const Header = styled.View`
    flex-direction: row;
    margin-top: 45px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-around;
    border-bottom-width: 2px;
    border-color: rgba(112, 112, 112, 0.1);

`
export const InfoDeliverie = styled.View`
    align-items: center;
    padding: 10px;
`
export const TitleInfoDeliverie = styled.Text`
    color: #707070;
    font-size: 14px;
`
export const ValueInfoDeliverie = styled.Text`
 color: ${OrangePrimaryColor};
    font-size: 20px;
    font-weight: bold;
`
export const CardView = styled.View`
    background-color: ${OrangePrimaryColor};
    border-radius: 16px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
`
export const CardInformations = styled.View`
    padding-left: 10px;
`
export const CardFirstTitle = styled.Text`
    font-size: 18px;
    color: ${WhitePrimaryColor};
`
export const CardSecondTitle = styled.Text`
    font-size: 12px;
    color: ${WhitePrimaryColor};
`