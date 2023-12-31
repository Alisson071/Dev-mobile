import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../modules/login';
import Home from '../modules/Home';
import Cart from '../modules/Cart';
import Card from '../modules/Card';
import CreateProduct from '../modules/CreateProduct';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Register from '../modules/Register';

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
                    <Screen name = "CreateProduct" component = {CreateProduct}/>
                    <Screen name = "Register" component = {Register}/>
            </Group>
        </Navigator>
    )
}