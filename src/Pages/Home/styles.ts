import styled from "styled-components/native";
import {OrangePrimaryColor, WhitePrimaryColor, BlackSecondaryColor} from '../globalStyles'

export const CardHeader = styled.View`
    background-color: ${OrangePrimaryColor};
    width: 100%;
    height: 120px;
    border-radius: 16px;
    padding: 20px;
    justify-content: space-between;

`
export const HeaderCard = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const HeaderTitle= styled.Text`
    font-size: 18px;
    color: ${WhitePrimaryColor};
    font-weight: 400;
`
export const HeaderDate= styled.Text`
   font-size: 18px;
   color: ${WhitePrimaryColor};
`
export const ContentCard = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const ContentTitle= styled.Text`
    font-size: 24px;
    color: ${WhitePrimaryColor};
    font-weight: bold;
`
export const BtnContentCard= styled.TouchableOpacity`
   font-size: 18px;
   color: ${WhitePrimaryColor};
`
export const Cards = styled.View`
    background-color:${WhitePrimaryColor};
    width: 100%;
    height: 210px;
    border-radius: 15px;
    padding: 20px;
    margin-top: 20px;
    border: 1px;
    border-color: rgba(211,211,211,0.7);
    flex-direction: column;
    `
export const CardResumeItems = styled.View`
    flex-direction: row;
`
export const HeaderResume = styled.Text`
    color: ${BlackSecondaryColor};
    font-size: 18px;
    font-weight: bold;
`
export const ViewNewIdetification = styled.View`
    width: 100%;
    flex-direction: row;
`
export const InputNewIdetification = styled.TextInput`
    width: 75%;
    height: 44px;
    border: 2px;
    border-color: ${OrangePrimaryColor};
    border-radius: 15px;
    padding: 10px;
    margin-top: 7px;
    
`  
export const SubmitNewIdetification = styled.TouchableOpacity`
    background-color: ${OrangePrimaryColor};
    border-radius: 15px;
    margin-top: 7px;
    margin-left: 10px;
    width: 20%;
    height: 46px;
    align-items: center;
    justify-content: center;
`  
export const SubmitScanQR = styled.TouchableOpacity`
    background-color: ${OrangePrimaryColor};
    border-radius: 15px;
    padding: 10px;
    margin-top: 7px;
    width: 100%;
    height: 46px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`  
export const TextScanQR = styled.Text`
    font-size: 16px;
    text-align: center;
    color: ${WhitePrimaryColor};
    font-weight: 500;
    margin-left: 10px;
`  