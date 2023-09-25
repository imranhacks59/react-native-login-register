import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';


const Stack = createStackNavigator();


export default function Routes() {
const {isAuthenticated} = useSelector((state)=>state.user)
// const isAuthenticated=false;

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAuthenticated? MainStack(Stack)
                    : AuthStack(Stack)
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}