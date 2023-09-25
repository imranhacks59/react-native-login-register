import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//screens
import {Profile} from '../'

const Stack = createNativeStackNavigator();

export default function MenuStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Menu',
          tabBarLabelStyle: {
            fontSize: 11,
            margin: 0,
            padding: 0,
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
            name="menu"
            color={color}
            size={size}
/>
          ),
        }}
      />
    </Stack.Navigator>
    

  );
}