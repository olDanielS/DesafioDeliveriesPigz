import {StatusBar} from 'react-native'
import Routers from './src/Routes/routers';
import 'react-native-gesture-handler';
import AuthProvider from './src/Contexts/Auth';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#FFFFFF' barStyle="dark-content"/>
      <AuthProvider>
        <Routers/>
      </AuthProvider>

    </>
  );
}
