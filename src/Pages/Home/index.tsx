import { useState } from "react";
import { SafeAreaView, Text, FlatList, KeyboardAvoidingView, Platform, ScrollView} from "react-native";
import { Container, OrangeSecondaryColor} from "../globalStyles";
import { CardHeader, HeaderCard, HeaderTitle, HeaderDate,
    ContentCard, BtnContentCard, ContentTitle,Cards,
    CardResumeItems,HeaderResume,ViewNewIdetification,
    InputNewIdetification,SubmitNewIdetification,
    SubmitScanQR,TextScanQR
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import format from "date-fns/format";

import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import ItemCard from "../../Components/ItemCard";
export default function Home(){
    const [gain, setGain] = useState("150,00");
    const [activeEye, setActiveEye] = useState(true)
    const [date, setDate] = useState(format(new Date(), 'dd/MM'))
    const [resumeDeliveries, setResumeDeliveris] = useState([
        {id: 1, title: 'Aceitas', value: 15},
        {id: 2, title: 'Rejeitadas', value: 10},
        {id: 3, title: 'Total', value: 10},
    ])

    const navigation = useNavigation();

    return(
        <Container>
            <SafeAreaView>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                >
                <CardHeader>
                    <HeaderCard>
                        <HeaderTitle>Ganhos do dia</HeaderTitle>
                        <HeaderDate>{date}</HeaderDate>
                    </HeaderCard>
                    <ContentCard>
                        <ContentTitle>R$ {activeEye ? gain : '****'}</ContentTitle>
                        <BtnContentCard onPress={() => activeEye ? setActiveEye(false):setActiveEye(true)}>
                            <Feather name={activeEye ? "eye": "eye-off"} color={OrangeSecondaryColor} size={32}/>
                        </BtnContentCard>
                    </ContentCard>
                </CardHeader>
                <Cards>
                    <HeaderResume>Resumo das entregas</HeaderResume>
                    
                        <FlatList
                            keyExtractor={(item) => String(item.id)}
                            data={resumeDeliveries}
                            renderItem={({item}) => <ItemCard title={item.title} value={item.value}/> }
                            horizontal
                       />  
                    
                </Cards>

                <Cards>
                <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <HeaderResume>Iniciar Nova Tarefa</HeaderResume>
                    <Text style={{marginTop: 10, fontSize: 15, color: '#808080'}}>Número de Identificação</Text>
                    <ViewNewIdetification>
                        <InputNewIdetification 
                            
                        />
                        <SubmitNewIdetification onPress={() => navigation.navigate('Deliveries')}>
                            <Text style={{fontSize: 20, color: "#FFF"}}>Ok</Text>
                        </SubmitNewIdetification>
                    </ViewNewIdetification>
                    <SubmitScanQR>
                    <FontAwesome name="qrcode" size={32} color={"#FFF"}/>
                        <TextScanQR>Escanear QRCODE</TextScanQR>
                    </SubmitScanQR>
                    </KeyboardAvoidingView>
                </Cards>
                </ScrollView>
            </SafeAreaView>
        </Container>
    )
}