import React from 'react';
import * as Font from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { theme } from './theme/theme';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "@pages/home";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  React.useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Inter-Regular': require('./assets/fonts/NotoSans_Condensed-Regular.ttf'),
        'Inter-Bold': require('./assets/fonts/NotoSans_Condensed-Bold.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator />
        </View>
      </SafeAreaProvider>
    );
  }

  return (
        <SafeAreaProvider>
          <PaperProvider theme={theme}>
            <NavigationContainer documentTitle={{
              formatter: (options, route) => `HomeCloud`,
            }}>
              <HomeScreen />
            </NavigationContainer>
          </PaperProvider>
        </SafeAreaProvider>
  );
}
