import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import userImg from '../../assets/rodrigo.png';

import {
    Container, Header, ContainerHeader, Greeting, UserName, Title, Subtitle, Button, Pill, TextPill, PillContainer, Imagem} from './styles';

export function Home() {
    return (
        <Container>
            <Header>
                <ContainerHeader>
                    <View>
                        <Greeting>Olá,</Greeting>
                        <UserName>
                            Frederico
                        </UserName>
                    </View>
                    <Imagem source={userImg} resizeMode="contain" />
                </ContainerHeader>

                <Title>
                    Em qual ambiente
                </Title>
                <Subtitle>
                    você quer colocar sua planta?
                </Subtitle>
            </Header>

            <PillContainer>
                <Pill>
                    <TextPill>
                        Sala
                    </TextPill>
                </Pill>

                <Pill>
                    <TextPill>
                        Quarto
                    </TextPill>
                </Pill>

                <Pill>
                    <TextPill>
                        Cozinha
                    </TextPill>
                </Pill>

                <Pill>
                    <TextPill>
                        Banheiro
                    </TextPill>
                </Pill>
            </PillContainer> 

        </Container>
    )
}

const styles = StyleSheet.create({

    enviromentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32,
        paddingRight: 32
    },
    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    }
});