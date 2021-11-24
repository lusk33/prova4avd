import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';


import { Content, Emoji, Title, Subtitle, Footer, Button, ButtonText} from './styles'

export function Confirmation() {
    const navigation = useNavigation();

    function handleContinue() {
        navigation.navigate('Home');
    }

    return (
        <Content>
            <Emoji>
                😄
            </Emoji>

            <Title>
                Prontinho
            </Title>

            <Subtitle>
                Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
            </Subtitle>

            <Footer>
                <Button onPress={handleContinue} >
                    <ButtonText>
                        Começar
                    </ButtonText>
                </Button>
            </Footer>
        </Content>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        color: '#32B768',
        lineHeight: 38,
        marginTop: 15,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: 'rgb(50, 183, 104)',
    },
    emoji: {
        fontSize: 78,
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }
})