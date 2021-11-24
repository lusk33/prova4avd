import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #FFFFFF;
`;

export const Header = styled.View`
    padding: 0 30px;
`;

export const ContainerHeader = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const Greeting = styled.Text`
    font-size: 32px;
    color: #52665A;
`;

export const UserName = styled.Text`
    font-size: 32px;
    color: #52665A;
    line-height: 40px;
`;

export const Imagem = styled.Image`
    width: 130px;
    height: 130px;
    border-radius: 60px;
    padding: 20px 0;
`;

export const Title = styled.Text`
    font-size: 17px;
    color: #52665A;
    line-height: 20px;
    margin-top: 15px;
`;

export const Subtitle = styled.Text`
    font-size: 17px;
    line-height: 20px;
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

export const PillContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const Pill = styled.View`
    background-color: rgba(50, 183, 104,0.8);
    height: 56px;
    width: 80px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
`;

export const TextPill = styled.Text`
    color: #fff;

`;
