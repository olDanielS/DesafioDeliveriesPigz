import { Container, Header, InfoDeliverie, TitleInfoDeliverie, ValueInfoDeliverie,
    CardView,CardInformations, CardFirstTitle,CardSecondTitle
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
                <ValueInfoDeliverie style={{fontSize: 35}}>R$ 13,75</ValueInfoDeliverie>
            </InfoDeliverie>

            <CardView>
                <FontAwesome name="motorcycle" size={24} color={"#FFF"}/>
                <CardInformations>
                    <CardFirstTitle>Entrega</CardFirstTitle>
                    <CardSecondTitle>Percurso Total: 8km</CardSecondTitle>
                </CardInformations>
            </CardView>
        </Container>
    )
}