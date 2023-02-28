import React, {useState} from "react";
import { TouchableWithoutFeedback, Keyboard, Text, TouchableOpacity, View, Image} from "react-native";
import {
	Container, Header, Content,
	Icon, TitleHeader, TitleContent,
	LabelInputs, Input, KeyView, InputPassw,
	SubmitButton,SubmitText, SwitchAccountView,
	TypeAccountButton,LabelFooter, CreateGoogleAccoutButton,
	GoogleText,LabelForgotPass
} from "./styles";
import Feather from '@expo/vector-icons/Feather';

import { useNavigation } from "@react-navigation/native";

import {OrangePrimaryColor, OrangeSecondaryColor} from '../globalStyles';

export default function SignIn() {
	const [visible, setVisible] = useState(false); 
	const navigation = useNavigation();

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<Container>
				<Header>
					<View style={{width: 100, height:50}}>
						<Icon source={require('../../Assets/pigzIcon.png')} />
					</View>
					<TitleHeader>Para entregadores</TitleHeader>
				</Header>
				
				<Content>
					<TitleContent>Login</TitleContent>
					<LabelInputs>Email ou Telefone</LabelInputs>
					<Input placeholder="example@pigz.com.br" 
					autoCapitalize="none"
					autoComplete="email"
					/>

					<LabelInputs>Senha</LabelInputs>
					<KeyView>
						<InputPassw placeholder="*********"
						secureTextEntry={visible ? false : true}
						autoCapitalize="none"
						autoComplete="off"
					/>
					<TouchableOpacity onPress={() => visible? setVisible(false) : setVisible(true) }>
						<Feather name={visible ? 'eye' : "eye-off"} size={32} color={OrangeSecondaryColor}/>
					</TouchableOpacity>
					</KeyView>

					<TouchableOpacity>
						<LabelForgotPass>Esqueci minha senha</LabelForgotPass>
					</TouchableOpacity>

					<SubmitButton>
						<SubmitText>Entrar</SubmitText>
					</SubmitButton>

					<SwitchAccountView>
						<LabelInputs> Não tem uma conta? </LabelInputs>
						<TypeAccountButton onPress={() => {}}>
							<Text style={{color: `${OrangePrimaryColor}`, fontSize:13}}>Criar agora!</Text>
							</TypeAccountButton>
					</SwitchAccountView>
				<View style={{flexDirection: "row", alignItems: 'center'}}>
					<LabelFooter>Entrar com </LabelFooter>
				</View>
		
				<CreateGoogleAccoutButton>
		
					<View style={{alignSelf: 'center', justifyContent: 'center', width: '90%'}}>
						<GoogleText style={{textAlign: 'center', fontSize: 18, color: '#3f3f3f'}}>Continuar com o Google</GoogleText>
					</View>
				</CreateGoogleAccoutButton>

				</Content>
			</Container>
		</TouchableWithoutFeedback>
	)
}

