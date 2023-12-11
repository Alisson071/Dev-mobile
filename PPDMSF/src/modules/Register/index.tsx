import { Text, View, ImageBackground, TouchableOpacity, NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { styles } from "./style";
import Input from "../../shared/components/input/Input";
import { useState } from "react";
import axios from "axios";
import { getItemStorage } from "../../functions/storageProxy";
import { AUTHORIZATION_KEY } from "../../shared/components/constants";
import { UserType } from "../../shared/UserType";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
    const navigation = useNavigation();
    const [nome, setNome] = useState<string>();
    const [cpf, setCpf] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const handleOnChangeNome = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setNome(event.nativeEvent.text);
    };
    const handleOnChangeCpf = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setCpf(event.nativeEvent.text);
    };
    const handleOnChangePhone = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setPhone(event.nativeEvent.text);
    };
    const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setEmail(event.nativeEvent.text);
    };
    const handleOnChangeSenha = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setSenha(event.nativeEvent.text);
    };

    const cadastrarOnPress = async () => {
        console.log(nome, email, phone, cpf, senha)
        const resultLogin = await axios
            .post('http://192.168.137.194:8080/user', {
              name: nome,
              email: email, 
              phone: phone,
              cpf: cpf,
              password: senha,
              typeUser: 1
  
          }).then(res => {
              console.log(res.data);
              navigation.navigate('Home');
            })
            .catch((err) => {
              console.log(err);
            });
      }


    return (
        <View>
            <Text>Nome</Text>
            <Input
                margin="10px"
                onChange={handleOnChangeNome}
                style={{ backgroundColor: "#F7F7F7" }}
            />
            <Text>CPF</Text>
            <Input
                margin="10px"
                onChange={handleOnChangeCpf}
                style={{ backgroundColor: "#F7F7F7" }}
            />
            <Text>Phone</Text>
            <Input
                margin="10px"
                onChange={handleOnChangePhone}
                style={{ backgroundColor: "#F7F7F7" }}
            />
            <Text>Email</Text>
            <Input
                margin="10px"
                onChange={handleOnChangeEmail}
                style={{ backgroundColor: "#F7F7F7" }}
            />
            <Text>Senha</Text>
            <Input
                margin="10px"
                onChange={handleOnChangeSenha}
                style={{ backgroundColor: "#F7F7F7" }}
            />
            <TouchableOpacity onPress={cadastrarOnPress} style={{ backgroundColor: "blue" }}>
                <Text>Criar</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Register;