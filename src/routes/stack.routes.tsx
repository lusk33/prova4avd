import React from 'react';
import  { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { Signin } from '../pages/Signin';
import { Confirmation } from '../pages/Confirmation';
import { Home } from '../pages/Home';


const { Navigator, Screen } = createStackNavigator();


export function StackRoutes() {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#fff'
                },
            }}
        >
            <Screen 
                name="Welcome"
                component={Welcome}
            />

            <Screen 
                name="Signin"
                component={Signin}
            />

            <Screen 
                name="Confirmation"
                component={Confirmation}
            />

            <Screen
                name="Home"
                component={Home}
            />

        </Navigator>
    )
}