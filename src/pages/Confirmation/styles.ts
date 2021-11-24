import styled from "styled-components/native";

export const  Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px;
`;

export const  Emoji = styled.Text`
    font-size: 78px;
`;

export const  Title = styled.Text`
    font-size: 22px;
    text-align: center;
    color: #52665A;
    line-height: 38px;
    margin-top: 15px;
`;

export const  Subtitle = styled.Text`
    text-align: center;
    font-size: 17px;
    padding: 10px 0;
    color: #52665A;
`;

export const  Footer = styled.View`
    width: 100%;
    padding: 0 50px;
    margin-top: 20px;
`;

export const  Button = styled.TouchableOpacity`
    background-color: #32B768;
    height: 56px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
`;

export const  ButtonText = styled.Text`
    font-size: 16px;  
    color: #fff;
`;