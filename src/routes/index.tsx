import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes';
import { Text } from 'react-native';

export const Routes = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}