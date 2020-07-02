/*
 * Lunachat - sattelite chat based on NuCypher
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from './SplashScreen';

const Stack = createStackNavigator();

export type WelcomeStackParamList = {
  EnterCodeScreen: {phone: string};
};

export const WelcomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
