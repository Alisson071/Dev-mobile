import {Text, View, ImageBackground, TouchableOpacity} from "react-native";
//import  Icon  from "react-native-vector-icons/MaterialIcons";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./styles";
import {useNavigation} from '@react-navigation/native'
const Card = () => {
    const navigation = useNavigation();
    function changeScreen(){
      navigation.navigate('Cart');
    }
    return (
        <View style={styles.conteiner}>
            <ImageBackground style={styles.header} source={require("../../Assets/patinho.jpg")} imageStyle={styles.img}>
            </ImageBackground>

            <View style = {styles.body}>
                <Text style = {styles.nameProduct} >Patinho de Borracha</Text>

                <View style = {styles.rowBody}>
                    <Text style = {styles.rate}>(4.5)</Text>
                
                
                    <View style = {styles.rowIncraseBtn}>
                        <TouchableOpacity style={[styles.btnIncrase, {backgroundColor: "rgba(0, 0, 0, 0.1)"}]}>
                            {/* <Feather name = "minus" size = {24} /> */}
                            <Text style = {styles.icon}>-</Text>
                        </TouchableOpacity>

                        <Text style = {styles.valueIncrase} >1</Text>

                        <TouchableOpacity style = {[styles.btnIncrase, {backgroundColor: "rgba(0, 0, 0, 0.8)"}]}>
                        {/* <Feather name = "plus" size = {24} color = {"#FFF"}/> */}
                        <Text style = {[styles.icon, {color: "white"}]}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                

                <Text style= {styles.titleSubSection}>Descrição</Text>
                <Text style = {styles.description}>
                Um Pato de Borracha Jumbo para Grande Diversão! O rei dos patos de borracha... é este pato de borracha gigante. O pato de borracha gigante funciona muito bem como peça central e também é um divertido pato líder para uma corrida de patos no rio.
                </Text>
            </View>

            <View style = {styles.footer}>
                <View>
                    <Text style={styles.titlePrice}>Preço</Text>
                    <Text style={styles.price}>R$ 24,90</Text>
                </View>

                <TouchableOpacity style = {styles.btnCart}>
                    <Text style = {styles.btnCartText} onPress={changeScreen}>Adicionar ao carrinho</Text>
                </TouchableOpacity>
            </View>

        </View>
    );

}

export default Card;