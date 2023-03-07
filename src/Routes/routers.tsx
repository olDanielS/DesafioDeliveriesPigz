import {useContext} from 'react';
import { AuthContext } from '../Contexts/Auth';
import {NavigationContainer} from '@react-navigation/native';

import StackRoutes from "./StackRoutes";
import TabRoutes from './TabRoutes';

export default function Routers(){
    const {isAuthenticated}:any= useContext(AuthContext);

    return(
        <>
            {
                isAuthenticated ? <TabRoutes/> : <StackRoutes/>
            }
        </>
    )
}