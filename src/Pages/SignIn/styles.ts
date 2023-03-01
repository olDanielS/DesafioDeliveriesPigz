import styled from "styled-components/native";
import {OrangePrimaryColor, OrangeSecondaryColor,BlackSecondaryColor, BlackThirdColor} from '../globalStyles'

export const Container = styled.SafeAreaView`
    flex: 1;
;
`
export const Header = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: flex-end;
`
export const TitleHeader = styled.Text`
    color: ${BlackSecondaryColor};
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
`

export const Icon = styled.Image`
    width: 100%;
    height: 100%;
    `

export const Content = styled.View`
    flex: 3;
    background-color: #fff;
    padding: 15px;
    justify-content: space-between;
    `
export const TitleContent = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    color: ${BlackThirdColor};
    `
export const LabelInputs = styled.Text`
    font-size: 13px;
    color: #4B4B4B;
   
    `
export const LabelForgotPass = styled.Text`
    font-size: 13px;
    color: #676767;
    margin-bottom: 5px;
    text-decoration:underline
    `
export const Input = styled.TextInput`
    font-size: 14px;
    padding: 10px;
    border-width: 1px;
    border-color: ${OrangePrimaryColor};
    border-radius: 16px;
    margin-bottom: 10px;
    `
export const KeyView = styled.View`
    font-size: 20px;
    padding: 10px;
    border-width: 1px;
    border-color: ${OrangePrimaryColor};
    border-radius: 16px;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
`
export const InputPassw = styled.TextInput`
   width: 90%;
   `
export const SubmitButton = styled.TouchableOpacity`
    margin-top: 20px;
    margin-bottom: 25px;
    align-items: center;
    justify-content: center;
    background-color: ${OrangePrimaryColor};
    padding: 10px;
    border-radius: 15px;
   `
export const SubmitText = styled.Text`
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
   `
export const SwitchAccountView = styled.View`
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
    flex-direction: row;
    justify-content: center;
  
   `
export const TypeAccountButton = styled.TouchableOpacity`
    font-size: 13px;
    color: #FFF;
    font-weight: bold;
    
   `
export const LabelFooter = styled.Text`
    margin-top: 10px;
    color: ${BlackSecondaryColor}
`

export const CreateGoogleAccoutButton = styled.TouchableOpacity`
    margin-top: 10px;
    flex-direction: row;
    border: 1px;
    border-radius: 15px;
    padding: 10px;
    align-items: center;
    border-color: #9F9F9F;
`
export const GoogleText = styled.Text`
   text-align: center;
    color: #676767
   `
