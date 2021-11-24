import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Container, Content, Form, Header, Emoji, Title, Input, Footer, Button, ButtonText} from './styles';
import { Text, TouchableOpacity } from 'react-native';

export function Signin() {
    const [name, setName] = useState<string>();

    const navigation = useNavigation();

    function handleInputChange(value: string) {
        setName(value);
    }

    function handleSubmit() {
        navigation.navigate('Confirmation')
    }

    return (
        <Content>
            <Form>
                <Header>
                    <Emoji>
                        😀
                    </Emoji>
                    <Title>
                        Como podemos {'\n'}
                        chamar você?
                    </Title>
                </Header>

                <Input
                    placeholder="Digite um nome"
                    onChangeText={handleInputChange}
                />

                <Footer >
                    <Button onPress={handleSubmit} >
                        <ButtonText>
                            Confirmar
                        </ButtonText>
                    </Button>
                </Footer>
            </Form>
        </Content>
    )
}