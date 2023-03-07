import { StyleSheet, View, Text } from "react-native"

import {BlackSecondaryColor} from '../../Pages/globalStyles'

interface Values{
    title: String,
    value: number,
}

export default function ItemCard(props: Values){
    return(
        <View style={styles.Container}>
            <Text style={styles.titleItem}>{props.title}</Text>
            <Text style={styles.valueItem}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: 90,
        height: 90,
        backgroundColor: '#fff',
        paddingLeft: 10,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: "#dcdcdc",
        marginTop: 20,
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleItem:{
        textAlign: 'center',
        fontSize:14,
        color: '#808080',
        flexWrap: 'nowrap'
    },
    valueItem:{
        paddingTop: 5,
        textAlign: 'center',
        fontSize: 34,
        fontWeight: '500',
        color: `${BlackSecondaryColor}`
    }
})