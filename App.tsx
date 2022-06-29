import { StatusBar } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import 'react-native-gesture-handler'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import {
  Mulish_400Regular,
  Mulish_700Bold,
} from '@expo-google-fonts/mulish'
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Login } from './src/screen/Login';
import { Users } from './src/screen/Users';
import { RegisterUsers } from './src/screen/RegisterUsers';
import { Repositories } from './src/screen/Repositories';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Roboto_400Regular,
          Mulish_400Regular,
          Mulish_700Bold
        })
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
        />
        <RegisterUsers />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
