import styled from "styled-components/native";

export const Wrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Title = styled.Text`
    font-size: 28px;
    text-align: center;
    color: #52665A;
    margin-top: 38px;
    line-height: 34px;
`;

export const Imagem = styled.Image`
    width: 80%;
`;

export const Subtitle = styled.Text`
    text-align: center;
    font-size: 18px;
    padding-left: 20px;
    padding-right: 20px;
    color: #52665A;
`;

export const Button = styled.TouchableOpacity`
    background-color: #32B768;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
    height: 56px;
    width: 56px;
`;

export const ButtonText = styled.Text`
    color: #fff;
`;