import {
    Container, Header, InfoDeliverie, TitleInfoDeliverie, ValueInfoDeliverie,
    CardView, CardInformations, CardFirstTitle, CardSecondTitle, ContentView, OrangePointer,
    WhitePointer, DeliveriesTitle, DeliveriesInfo, Content,BtnFooter,TextBtnFooter,
    Footer
} from './styles'

import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Deliveries() {
    return (
        <Container>
            <Header>
                <InfoDeliverie>
                    <TitleInfoDeliverie>Tempo estimado</TitleInfoDeliverie>
                    <ValueInfoDeliverie>30 min</ValueInfoDeliverie>
                </InfoDeliverie>
                <InfoDeliverie>
                    <TitleInfoDeliverie>Numero de ID</TitleInfoDeliverie>
                    <ValueInfoDeliverie>#6789</ValueInfoDeliverie>
                </InfoDeliverie>
            </Header>

            <InfoDeliverie>
                <TitleInfoDeliverie>Valor da Entrega</TitleInfoDeliverie>
                <ValueInfoDeliverie style={{ fontSize: 35 }}>R$ 13,75</ValueInfoDeliverie>
            </InfoDeliverie>

            <CardView>
                <FontAwesome name="motorcycle" size={24} color={"#FFF"} />
                <CardInformations>
                    <CardFirstTitle>Entrega</CardFirstTitle>
                    <CardSecondTitle>Percurso Total: 8km</CardSecondTitle>
                </CardInformations>
            </CardView>

            <ContentView>
                <Content>
                    <DeliveriesTitle>Coleta</DeliveriesTitle>
                </Content>
                <Content>
                    <DeliveriesInfo>Restaurante Recanto da Peixada</DeliveriesInfo>
                    <DeliveriesInfo>Distancia: 2km</DeliveriesInfo>
                </Content>
                <Content>
                    <DeliveriesTitle>Entrega</DeliveriesTitle>
                </Content>
                <Content>
                    <DeliveriesInfo>Av: Cabo dos Soldados - Caranã</DeliveriesInfo>
                    <DeliveriesInfo>Distancia: 6km</DeliveriesInfo>
                </Content>

            </ContentView>
            <Footer>
                <BtnFooter bg={"accept"}>
                    <FontAwesome name="check" size={24} color={"#FFF"} />
                    <TextBtnFooter tx={"accept"}>Aceitar</TextBtnFooter>
                </BtnFooter>

                <BtnFooter bg={"refuse"} style={{borderWidth: 1}}>
                <FontAwesome name="close" size={24} color={"#E8453E"} />
                    <TextBtnFooter tx={"refuse"}>Rejeitar</TextBtnFooter>
                </BtnFooter>
            </Footer>
        </Container>
    )
}