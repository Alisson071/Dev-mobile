import {Text, View, ImageBackground, TouchableOpacity, NativeSyntheticEvent, TextInputFocusEventData} from "react-native";
import { styles } from "./styles";
import Input from "../../shared/components/input/Input";
import { useState } from "react";

const CreateProduct = () => {
    const [email, setNome] = useState<string>();
    const handleOnChangeNome = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setNome(event.nativeEvent.text);
    };
    return (
        <View>
            <Text>Nome</Text>
            <Input 
                margin="10px" 
                onChange={handleOnChangeNome} 
                style={{backgroundColor:"#F7F7F7"}} 
            />
            <TouchableOpacity style={{backgroundColor:"blue"}}>
                <Text>Criar</Text>
            </TouchableOpacity>
        </View>
    );
}
export default CreateProduct;