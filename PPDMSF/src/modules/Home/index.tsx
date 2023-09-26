import Text from "../../shared/components/text/Text";
import { CardContainer, InfoContainer, ImageCard, Title, Price, AddCar, Description, PriceContainer, TextButton} from "./styles";
import {useNavigation} from '@react-navigation/native'
import {View} from 'react-native'
const Home = () => {
    const navigation = useNavigation();
    function changeScreen(){
      navigation.navigate('Card');
    }
    function changeScreenCart(){
        navigation.navigate('Cart');
      }
    return (
        <View style={{width:'100%', height:'100%'}}>
        <CardContainer onPress={() => changeScreen()}>
            <ImageCard source={require("../../Assets/patinho.jpg")}></ImageCard>
            <InfoContainer>
                <Title>Patinho de borracha</Title>
                <Description>Um Pato de Borracha Jumbo para Grande Diversão! O rei dos patos de borracha... é este pato de borracha gigante.</Description>
                <PriceContainer>
                    <Price>20R$</Price>
                    <AddCar onPress={changeScreenCart}><TextButton>Adicionar ao carrinho</TextButton></AddCar>
                </PriceContainer>
                
            </InfoContainer>
        </CardContainer>
        <CardContainer onPress={() => changeScreen()}>
            <ImageCard source={require("../../Assets/nemo.png")}></ImageCard>
            <InfoContainer>
                <Title>Peixinho de borracha</Title>
                <Description>Torne a hora do banho muito mais divertida com o peixinho Nemo de borracha!</Description>
                <PriceContainer>
                    <Price>20R$</Price>
                    <AddCar onPress={changeScreenCart}><TextButton>Adicionar ao carrinho</TextButton></AddCar>
                </PriceContainer>
                
            </InfoContainer>
        </CardContainer>
        </View>
    )
}

export default Home;