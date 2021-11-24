import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
`;

export const Form = styled.View`
    flex: 1;
    justify-content: center;
    padding: 0 54px;
    align-items: center;
`;

export const Header = styled.View`
    align-items: center;
`;

export const Emoji = styled.Text`
    font-size: 44px;
`;

export const Title = styled.Text`
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #52665A;
    margin-top: 20px;
`;

export const Input = styled.TextInput`
    border-bottom-width: 1px;
    border-color: #CFCFCF;
    color: #52665A;
    width: 100%;
    font-size: 18px;
    margin-top: 50px;
    padding: 10px;
    text-align: center;
`;

export const Footer = styled.View`
    width: 100%;
    margin-top: 40px;
    padding: 0px 20px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #32B768;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
    height: 56px;
    width: 156px;
    margin: 0 auto;
`;

export const ButtonText = styled.Text`
    color: #fff;

`;