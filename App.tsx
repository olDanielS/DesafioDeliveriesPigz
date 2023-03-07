import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';


import Routers from './src/Routes/routers';
import 'react-native-gesture-handler';
import AuthProvider from './src/Contexts/Auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#FFFFFF' barStyle="dark-content" />
        <Routers />
      </AuthProvider>
    </NavigationContainer>

  );
}
