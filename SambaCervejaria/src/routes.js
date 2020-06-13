import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CartContext from './contexts/cartContext';

import SearchScreen from './screens/SearchScreen';
import ProductScreen from './screens/ProductScreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CartContext>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartContext>
    </SafeAreaView>
  );
};

export default Routes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
