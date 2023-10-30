
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { RootState } from '../../../store';
import {useSelector, useDispatch} from 'react-redux';
import { setUserAction } from '../../../store/reducers/userReducers';
import { setItemStorage } from '../../../functions/storageProxy';
import { AUTHORIZATION_KEY } from '../../../shared/components/constants';

export const useLogin = () => {
    const navigation = useNavigation();
    
    const { user } = useSelector((state: RootState) => state.userReducer);
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();


    

    console.log(
      'user ', user
    )

    const handleOnPress = async () => {
        
        console.log(
            `O Email do usuário é: ${email}; A Senha do usuário é: ${password};`,
          );

        const resultLogin = await axios
          .post('http://192.168.137.49:8080/auth', {
            email, 
            password,
        }).then(res => {
          setItemStorage(AUTHORIZATION_KEY, res.data.accessToken);
            dispatch(setUserAction(res.data))


            console.log(res.data);
            navigation.navigate('Home');
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