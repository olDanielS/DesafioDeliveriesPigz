import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../../Pages/SignIn";
import Deliveries from "../../Pages/Deliveries";

export default function StackRoutes(){
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )

}