import {Text, View} from 'react-native';
import {ContainerPlugin, TitleLogin} from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import {useLogin} from '../hooks/useLogin';
import Button from '../../../shared/components/button/Button';
import {useNavigation} from '@react-navigation/native'
import { Backpack } from '@phosphor-icons/react';

const Login = () => {
    const {
        email,
        password,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
      } = useLogin();

      const navigation = useNavigation();
      function changeScreen2(){
        //navigation.navigate('Home');
      }
    return(
        <View>
            <ContainerPlugin>
                <TitleLogin>Login</TitleLogin>
                <Input 
                value={email} 
                margin="10px" 
                onChange={handleOnChangeEmail} 
                style={{backgroundColor:"#F7F7F7"}} 
                />
                <Input 
                value={password} 
                margin="10px" 
                onChange={handleOnChangePassword} 
                style={{backgroundColor:"#F7F7F7"}}
                />
                <Button title="ENTRAR" margin="10px" onPress={() => handleOnPress()} />
            </ContainerPlugin>
        </View>
    );
};

export default Login;