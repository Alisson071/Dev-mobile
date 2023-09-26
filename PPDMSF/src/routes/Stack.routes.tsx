import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../modules/login';
import Home from '../modules/Home';
import Cart from '../modules/Cart';
import Card from '../modules/Card'
import { Header } from 'react-native/Libraries/NewAppScreen';

const {Screen, Navigator, Group} = createNativeStackNavigator();

export function StackNavigator(){
    return(
        <Navigator>
            <Group
                screenOptions = {{
                    headerTintColor: 'navy',
                }}>
                    <Screen name = "Login" component = {Login} options={{headerShown:false}}/>
                    <Screen name = "Home" component = {Home}/>
                    <Screen name = "Cart" component = {Cart}/>
                    <Screen name = "Card" component = {Card}/>
            </Group>
        </Navigator>
    )
}