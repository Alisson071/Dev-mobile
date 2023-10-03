import Text from "../../shared/components/text/Text";
import {CardContainer, InfoContainer, ImageCard, Title, Price, AddCar, Description, PriceContainer, TextButton, emptyContainer} from "./styles";
import {useNavigation} from '@react-navigation/native'
import {View, ImageProps, FlatList} from 'react-native'
import { useState } from 'react'
import { styles } from './styles'

export interface Product{
    id: string,
    name: string,
    description: string,
    image: ImageProps["source"],
    price: string
}
const Home = () => {
    
    const [Item, setItem] = useState<Product[]>([
        {id: '0', name: 'Patinho de borracha', description: "Um Pato de Borracha Jumbo para Grande Diversão! O rei dos patos de borracha... é este pato de borracha gigante.", image: require("../../Assets/patinho.jpg"), price: '7,10R$'},
        {id: '1', name: 'Nemo de borracha', description: "Torne a hora do banho muito mais divertida com o peixinho Nemo de borracha!", image: require("../../Assets/nemo.png"), price: '9,90R$'}
    ])

    const [ItemCart, setItemCart] = useState<Product[]>([])

    const navigation = useNavigation();
    function changeScreen(id: String){
      navigation.navigate('Card', {key: id, obj: Item});
    }
    function changeScreenCart(id: String){
        navigation.navigate('Cart', {Item});
      }
    return (

        <View style={{height:'100%', flex:1}}>
                <FlatList 
                    data= {Item} 
                    ItemSeparatorComponent={<View style={styles.divider}></View> as any} 
                    renderItem={({item: Item})=>(
                        <CardContainer onPress={ () => changeScreen(Item.id)}>
                            <ImageCard source={Item.image}></ImageCard>
                            <InfoContainer>
                                <Title>{Item.name}</Title>
                                <Description>{Item.description}</Description>
                                <PriceContainer>
                                    <Price>{Item.price}</Price>
                                    <AddCar onPress={() => changeScreenCart(Item.id)}><TextButton>Adicionar ao carrinho</TextButton></AddCar>
                                </PriceContainer>
                            </InfoContainer>
                        </CardContainer>
                    )}
                />
        </View>
    )
}

export default Home;