import React from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    View,
    Image
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import watering from '../../assets/watering.png';


import {
    Wrapper,
    Title,
    Subtitle,
    Imagem,
    Button,
    ButtonText
} from './styles';

export function Welcome() {
    const navigation = useNavigation();

    function start() {
        navigation.navigate('Signin');
    }


    return (
        <Wrapper >
            <Title >
                Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
            </Title>

            <Imagem
                source={watering}
                resizeMode="contain"
            />

            <Subtitle>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Subtitle>

            <Button
                activeOpacity={0.7}
                onPress={start}
            >
                <ButtonText>
                   { '>' }
                </ButtonText>
            </Button>
        </Wrapper>
    )
}
