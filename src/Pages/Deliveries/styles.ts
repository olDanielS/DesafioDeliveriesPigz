import styled from 'styled-components/native';

import { OrangePrimaryColor, BlackPrimaryColor, BlackSecondaryColor, WhitePrimaryColor } from '../globalStyles';

export const Container = styled.View`
    flex: 1;
    padding: 15px;
    background-color: ${WhitePrimaryColor};
`
export const Header = styled.View`
    flex-direction: row;
    margin-top: 25px;
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
    margin-bottom: 15px;
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
export const ContentView = styled.View`
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    margin-left: 15px;
    
`
export const OrangePointer = styled.View`   
    height: 15px;
    width: 15px;
    background-color: ${OrangePrimaryColor};
    border-radius: 8px;
    margin-right: 15px;
`
export const WhitePointer = styled.View`
    height: 9px;
    width: 9px;
    border-color: ${OrangePrimaryColor};
    background-color: ${WhitePrimaryColor};
    border-radius: 8px;
    border-width: 1px;
    margin-right: 15px;
`
export const Content = styled.View`
   flex-direction: column;
   margin-bottom: 10px;
   
`
export const DeliveriesTitle = styled.Text`
   font-size: 18px;
   font-weight: 600;
   color: ${OrangePrimaryColor};
`
export const DeliveriesInfo = styled.Text`
   font-size: 14px;
   color: #707070;
`
export const Footer = styled.View`
   flex-direction: column;
`
export const BtnFooter = styled.TouchableOpacity`
    background-color: ${props => props.bg == "accept" ? OrangePrimaryColor : WhitePrimaryColor};
    border-color: ${props => props.bg == "refuse" && '#E8453E'};
    border-radius: 16px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`
export const TextBtnFooter = styled.Text`
   font-size: 18px;
    color: ${props => props.tx == "accept" ? WhitePrimaryColor : '#E8453E'};
    padding-left: 10px;
`
