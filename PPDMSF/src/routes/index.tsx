import { NavigationContainer } from '@react-navigation/native'

import { StackNavigator } from './Stack.routes'

export function Routes(){
    return (
        <NavigationContainer>
        <StackNavigator/>
        </NavigationContainer>
    );
}