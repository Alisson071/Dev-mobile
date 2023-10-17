
import axios from 'axios';
import { useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import {useNavigation} from '@react-navigation/native'




export const useLogin = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleOnPress = async () => {
        
        
        console.log(
            `O Email do usuário é: ${email}; A Senha do usuário é: ${password};`,
          );

        const resultLogin = await axios
          .post('http://192.168.137.49:8080/auth', {
            email, 
            password,
        }).then(res => {
            
            console.log(res.data);
            navigation.navigate('Home', {data: res.data});
          })
          .catch((err) => {
            console.log(err);
          });
        
  
    };
    
    const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setEmail(event.nativeEvent.text);
    };

    const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setPassword(event.nativeEvent.text);
    };

    return {
        email,
        password,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
    };
};