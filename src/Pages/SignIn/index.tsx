import React, {useState, useContext} from "react";
import { TouchableWithoutFeedback, Keyboard, Text, TouchableOpacity, View, Image, Alert} from "react-native";
import {
	Container, Header, Content,
	Icon, TitleHeader, TitleContent,
	LabelInputs, Input, KeyView, InputPassw,
	SubmitButton,SubmitText, SwitchAccountView,
	TypeAccountButton,LabelFooter, CreateGoogleAccoutButton,
	GoogleText,LabelForgotPass
} from "./styles";
import Feather from '@expo/vector-icons/Feather';

import { AuthContext } from "../../Contexts/Auth";

import { useNavigation } from "@react-navigation/native";
import SvgGoogle from "../../Assets/logo_googleg_48dp.svg" ;

import {OrangePrimaryColor, OrangeSecondaryColor} from '../globalStyles';

export default function SignIn() {
	const [visible, setVisible] = useState(false); 
	const navigation = useNavigation();

	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const {handleLogin} = useContext(AuthContext);



	function login(){
		if(email && pass){
			handleLogin(email, pass)
		}else{
			return Alert.alert("Atenção", "Os campos não podem permanecer vazios");
		}	
	}

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
					value={email}
					onChangeText={(text) => setEmail(text)}
					/>

					<LabelInputs>Senha</LabelInputs>
					<KeyView>
						<InputPassw placeholder="*********"
						secureTextEntry={visible ? false : true}
						autoCapitalize="none"
						autoComplete="off"
						value={pass}
						onChangeText={(text) => setPass(text)}
					/>
					<TouchableOpacity onPress={() => visible? setVisible(false) : setVisible(true) }>
						<Feather name={visible ? 'eye' : "eye-off"} size={32} color={OrangeSecondaryColor}/>
					</TouchableOpacity>
					</KeyView>

					<TouchableOpacity>
						<LabelForgotPass>Esqueci minha senha</LabelForgotPass>
					</TouchableOpacity>

					<SubmitButton onPress={()=> login()}>
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
					<SvgGoogle width="20" height="20"/>
					<View style={{alignSelf: 'center', justifyContent: 'center', width: '90%'}}>
						<GoogleText style={{textAlign: 'center', fontSize: 18, color: '#3f3f3f'}}>Continuar com o Google</GoogleText>
					</View>
				</CreateGoogleAccoutButton>

				</Content>
			</Container>
		</TouchableWithoutFeedback>
	)
}

