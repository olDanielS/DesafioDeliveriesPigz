import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../Pages/Home";
import Deliveries from "../../Pages/Deliveries";

import { OrangePrimaryColor, BlackSecondaryColor } from "../../Pages/globalStyles";


export const OverView = () =>{
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',

        }}>
            <Stack.Screen name="Home" component={Home} options={{
                headerTitle: "Visão geral",
                
           }}/>
            <Stack.Screen name="Deliveries" component={Deliveries}
            options={{
                headerTitle: "Nova Entrega",
                headerTintColor: `${OrangePrimaryColor}`,
                headerTitleStyle: {
                    color: `${BlackSecondaryColor}`
                }
           }}
            />
        </Stack.Navigator>
    )
}