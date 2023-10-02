import { useState } from 'react'
import { styles } from './styles'
import { FlatList, Image, ImageProps, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const luz = require("../../Assets/patinho.jpg");

interface Product{
    id?: string,
    name: string,
    description: string,
    image: ImageProps["source"],
    price: string
}

export function getProduct(product: Product){
    return `${product.id} ${product.name} ${product.description} ${product.image} ${product.price}`;
}

const Cart = () => {
    const [cartItem, setCartItem] = useState<Product[]>([
        {id: '1', description: 'kd-tu', image: luz, name: 'Patinho de borracha', price: '9,90'},
        {id: '2', description: 'kd-tu', image: luz, name: 'Luz', price: '9,90'}
    ])
    const navigation = useNavigation();
    function changeScreen() {
        navigation.goBack();
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.body}>
                        {cartItem.length > 0 ?
                        (<FlatList
                            data={cartItem}
                            ItemSeparatorComponent={<View style={styles.divider}></View> as any} 
                            renderItem={({item: cartItem})=>(
                                <View style={styles.productCardContainer}>
                                    <Image
                                        style={styles.imageProduct}
                                        source={cartItem.image}
                                    />
                                    <View style={styles.productDetails}>
                                        <View style={styles.productTitleContainer}>
                                            <Text style={styles.productTitle}>{cartItem.name}</Text>
                                            <Text style={styles.productPrice}>R$ {cartItem.price}</Text>
                                        </View>
                                        <View style={styles.actions}>
                                            <View style={styles.counter}>
                                                <TouchableOpacity style={styles.decrementButton}>
                                                    <Text style={{ color: "#000", fontSize: 13, fontWeight: 'bold' }}>−</Text>
                                                </TouchableOpacity>
                                                <Text>1</Text>
                                                <TouchableOpacity style={styles.addButton}>
                                                    <Text style={{ color: "#fff" , fontSize: 13}}>+</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <TouchableOpacity style={styles.trashButton}>
                                                
                                                 <Text style={{ color: "#000", fontSize: 20, padding: 0 }}>x</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            ) }
                        />):
                        (<View style={styles.emptyContainer}>
                            <Text>Seu carrinho esta vazio!</Text>
                        </View>)
                    }
                    </View>
                </View>
            </SafeAreaView>
            <View style={styles.footer}>
                <View style={styles.footerContent}>
                    <View style={styles.footerHeader}>
                        <Text style={styles.footerTitle}>Valor total</Text>
                        <Text style={styles.totalCart}>R$ 9,90</Text>
                    </View>
                    <TouchableOpacity style={styles.btnConfirmation}>
                        <Text style={styles.bntConfirmationText}>FINALIZAR PEDIDO</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Cart;