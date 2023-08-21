import { useEffect, useState } from 'react'
import {Button, Text, View} from 'react-native';


const Example = (props: ExampleProps) =>{
    
    const [newText1, setNewText1] = useState();
    let newText
    const handleOnPress = () =>{
        if(newText1 == 'everything'){
            setNewText1(props.text);
        }else{
            setNewText1('everything');
        }
        
    }

    useEffect(() => {
        console.log("passou aq");
    }, [newText1])

    return (
        <View>
            <Text>{props.text}</Text>
            <Text>{newText1 || props.children}</Text>
            <Button onPress={handleOnPress} title = "Botão"/>
        </View>
    )
};

interface ExampleProps{S
    text?: string;
    children: string;
}

export default Example;