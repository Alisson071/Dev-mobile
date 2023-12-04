import {Text, View, ImageBackground, TouchableOpacity, NativeSyntheticEvent, TextInputFocusEventData} from "react-native";
import { styles } from "./styles";
import Input from "../../shared/components/input/Input";
import { useState } from "react";
import axios from "axios";
import { getItemStorage } from "../../functions/storageProxy";
import { AUTHORIZATION_KEY } from "../../shared/components/constants";
import { UserType } from "../../shared/UserType";

const CreateProduct = () => {
    const [nome, setNome] = useState<string>();
    const [preco, setPreco] = useState<string>();
    const [imagem, setImagem] = useState<string>();
    const handleOnChangeNome = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setNome(event.nativeEvent.text);
    };
    const handleOnChangepreco = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setPreco(event.nativeEvent.text);
    };
    const handleOnChangeimagem = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setImagem(event.nativeEvent.text);
    };

    const create = async () => {
        const token = await getItemStorage(AUTHORIZATION_KEY);
            const resultBack = await axios.get<UserType>('http://192.168.137.194:8080/user', {
                headers: {
                    Authorization: token,
                    'content-Type': 'application/json',
                },
            });
            console.log("result", resultBack.data);
            if (resultBack) {
                axios.post('http://192.168.137.194:8080/product', { headers: {
                    Authorization: token,
                    'content-Type': 'application/json',
                },
                    name: nome,
                    price: Number(preco),
                    image: imagem,
                    categoryId: 1
                  }).then(function (response) {
                    console.log(response);
                  }).catch(function (error) {
                    console.log(error);
                  });
            }
    
    };
    
    return (
        <View>
            <Text>Nome</Text>
            <Input 
                margin="10px" 
                onChange={handleOnChangeNome} 
                style={{backgroundColor:"#F7F7F7"}} 
            />
            <Text>Preço</Text>
            <Input 
                margin="10px" 
                onChange={handleOnChangepreco} 
                style={{backgroundColor:"#F7F7F7"}} 
            />
            <Text>imagem</Text>
            <Input 
                margin="10px" 
                onChange={handleOnChangeimagem} 
                style={{backgroundColor:"#F7F7F7"}} 
            />
            <TouchableOpacity onPress={create}  style={{backgroundColor:"blue"} }>
                <Text>Criar</Text>
            </TouchableOpacity>
        </View>
    );
}
export default CreateProduct;