import {Text, View, ImageBackground, TouchableOpacity} from "react-native";
//import  Icon  from "react-native-vector-icons/MaterialIcons";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./styles";
import {useNavigation} from '@react-navigation/native'
import { useEffect, useState } from "react";
import { Product } from "../Home";

const Card = (props: any) => {
    const navigation = useNavigation();
    const [Item, setItem] = useState(props.route.params.obj[props.route.params.key])
 
    function changeScreen(){
      navigation.navigate('Cart');
    }
    return (
        <View style={styles.conteiner}>
            {/* <Text>{Item.name}</Text> */}
            <ImageBackground style={styles.header} source={Item.image} imageStyle={styles.img}>
            </ImageBackground>

            <View style = {styles.body}>
                <Text style = {styles.nameProduct} >{Item.name}</Text>

                <View style = {styles.rowBody}>
                    <Text style = {styles.rate}>(4.5)</Text>
                
                
                    <View style = {styles.rowIncraseBtn}>
                        <TouchableOpacity style={[styles.btnIncrase, {backgroundColor: "rgba(0, 0, 0, 0.1)"}]}>
                            <Text style = {styles.icon}>-</Text>
                        </TouchableOpacity>

                        <Text style = {styles.valueIncrase} >1</Text>

                        <TouchableOpacity style = {[styles.btnIncrase, {backgroundColor: "rgba(0, 0, 0, 0.8)"}]}>
                        <Text style = {[styles.icon, {color: "white"}]}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                

                <Text style= {styles.titleSubSection}>Descrição</Text>
                <Text style = {styles.description}>
                {Item.description}
                </Text>
            </View>

            <View style = {styles.footer}>
                <View>
                    <Text style={styles.titlePrice}>Preço</Text>
                    <Text style={styles.price}>{Item.price}</Text>
                </View>

                <TouchableOpacity style = {styles.btnCart}>
                    <Text style = {styles.btnCartText} onPress={changeScreen}>Adicionar ao carrinho</Text>
                </TouchableOpacity>
            </View>

        </View>
    );

}

export default Card;