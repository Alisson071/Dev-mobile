import { Text, View, ImageBackground, TouchableOpacity, NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
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
        console.log("token", token)
        const resultBack = await axios.get<UserType>('http://192.168.137.194:8080/user', {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
        });
        console.log("result", resultBack.data);
        if (resultBack) {
            console.log(nome, preco, imagem)
            axios.post('http://192.168.137.194:8080/product', {
                name: nome,
                price: parseFloat(preco),
                image: imagem,
                categoryId: 1,
            },
                {
                    headers: {
                        Authorization: token,
                        'Content-Type': 'application/json',
                    },
                },
            ).then(function (response) {
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
                style={{ backgroundColor: "#F7F7F7" }}
            />
            <Text>Preço</Text>
            <Input
                margin="10px"
                onChange={handleOnChangepreco}
                style={{ backgroundColor: "#F7F7F7" }}
            />
            <Text>imagem</Text>
            <Input
                margin="10px"
                onChange={handleOnChangeimagem}
                style={{ backgroundColor: "#F7F7F7" }}
            />
            <TouchableOpacity onPress={create} style={{ backgroundColor: "blue" }}>
                <Text>Criar</Text>
            </TouchableOpacity>
        </View>
    );
}
export default CreateProduct;