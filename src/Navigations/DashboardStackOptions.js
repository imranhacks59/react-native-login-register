import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//screens
import {Home} from '../'


const Stack = createNativeStackNavigator();

export default function DashboardStack({ navigation }) {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="Dashboard Stack"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',
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