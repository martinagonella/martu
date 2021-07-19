import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import BreadNavigator from './navigation/BreadNavigator';

import store from './store';

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <BreadNavigator />
    </Provider>
  );
}