import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
    width: 100%;
    height:20%;
    border-radius: 5px;
    background-color: #fff;
    padding: 5px;
    flex-direction: row;
`;

export const InfoContainer = styled.View`
width:  100%;
height: 100%;
padding: 5px;
flex-direction: column;
`;
export const PriceContainer = styled.View`
width:  100%;
height: 100%;
padding: 15px;
flex-direction: row;
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
width: 40%;
height: 30%;
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

export const TextButton = styled.Text`
font-size: 12;
font-weight: 600;
color: white;
`;