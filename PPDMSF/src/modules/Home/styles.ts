import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const CardContainer = styled.TouchableOpacity`
    border-radius: 5px;
    background-color: #fff;
    padding: 5px;
    flex:1;
    flex-direction: row;
`;

export const InfoContainer = styled.View`
//width:  100%;
//height: 100%;
flex: 1;
padding: 1px;
flex-direction: column;
`;
export const PriceContainer = styled.View`
//width:  100%;
//height: 100%;
flex-direction: row;
justify-content: space-between;
`;

export const ImageCard = styled.Image.attrs({
    resizeMode:"contain"
})`

    width: 40%;
    height: 100%;
`;

export const Title = styled.Text`
color: #fc6b0f;
font-size: 16px;
font-weight: 600;
`;

export const Price = styled.Text`
color: green;
font-size: 20px;
font-weight: 600;
margin: 5px;
`;

export const AddCar = styled.TouchableOpacity`
//width: 40%;
//height: 30%;
border-radius: 10px;
background-color: green;
margin: 5px;
align-items: center;
justify-content: center;
`;

export const Description = styled.Text`
width: 60%;
color: gray;
font-size: 10px;
`;

export const Favorite = styled.TouchableOpacity`
width: 10%;
height: 10%;

`;

export const ADD = styled.TouchableOpacity`
bottom: 1%;
right: 1%;
pad: 0px;
border-radius: 50px;
justify-content: center;
align-items: center;
position: absolute;
background-color: green;
width: 15%;
height: 9%;
`

export const TextButton = styled.Text`
font-size: 12px;
font-weight: 600;
color: white;
`;

export const emptyContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 12;
  `;

export const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
      },
      divider:{
        width: "100%",
        height: 1,
        backgroundColor: "#e6e5e5"
        
      }
});