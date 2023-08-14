
import { StyleSheet, Text, View } from "react-native"
import styled from 'styled-components/native';

const Button = styled.Button``;

const Texxt = styled.Text`color: blue;`;

const styles = StyleSheet.create({
    container: {
        color: "blue"
    },
    titulo: {
        fontSize: 18
    }
})

const App = () => {
    return (

        <View>
            <Text style={styles.titulo}>Testando</Text>
            <Button
                title="texto"
                color="red" />
            <Texxt>Texto azul</Texxt>
        </View>
    )
}

export default App;