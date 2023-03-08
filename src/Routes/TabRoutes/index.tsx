import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OverView } from "../StackRoutesAuthenticated";
import Home from "../../Pages/Home";
import Profile from "../../Pages/Profile";
import Reports from "../../Pages/Reports";

import {OrangePrimaryColor} from '../../Pages/globalStyles'

import Feather from '@expo/vector-icons/Feather';

export default function TabRoutes(){
    const Tab = createBottomTabNavigator();
   
    return(
        <Tab.Navigator initialRouteName="OverView" screenOptions={{
            tabBarActiveTintColor: `${OrangePrimaryColor}`,
            tabBarInactiveTintColor: '#696969',
            tabBarLabelStyle: {fontSize: 14},
            headerTitleAlign: 'center'
        }} >
        <Tab.Screen name="Reports" component={Reports}
            options={{
                title: 'Relatorios',
                tabBarIcon: ({color, size}) =>(
                    <Feather name="file-text" color={color} size={size}/>
                )
            }}
        />
        <Tab.Screen name="OverView" component={OverView}
             options={{
                headerShown: false,
                tabBarLabel: "Visão geral",
                title: 'Visão geral',
                tabBarIcon: ({color, size}) =>(
                    <Feather name="home" color={color} size={size}/>
                ),
               
            }}  
        />
        <Tab.Screen name="Profile" component={Profile}
        options={{
            title: 'Perfil',
            tabBarLabel: "Perfil",
            tabBarIcon: ({color, size}) =>(
                <Feather name="user" color={color} size={size}/>
            ),
        }}/>
        
    </Tab.Navigator>
)
}
function StackPages(){
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="Deliveries" component={Deliveries}/>
        </Stack.Navigator>
    )

}