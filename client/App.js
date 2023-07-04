//functional imports
import React from 'react';
// import { Provider } from "react-redux";
// import store from "./src/state-managment/store";
// import * as SplashScreen from 'expo-splash-screen';

import { View, TouchableOpacity, Button, Text, StyleSheet, Image, TextInput } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, RacingSansOne_400Regular } from '@expo-google-fonts/racing-sans-one';

//component imports
import Home from './components/Home';

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    RacingSansOne_400Regular,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    {/* Need to add async for hitting backend, while autlogin is running, display loading screen */}
     //need to add async for user load as well 
    return (
        // <Provider store={store}>
      <Home />
       // </Provider>
    );
  };
};


//going to add this once routing is good, its the splash screen loading logic
//Ill add user and other stuff form the backend to this so it looks seemless on load

// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Pre-load fonts, make any API calls you need to do here
//         await Font.loadAsync(Entypo.font);
//         // Artificially delay for two seconds to simulate a slow loading
//         // experience. Please remove this if you copy and paste the code!
//         await new Promise(resolve => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         // Tell the application to render
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       // This tells the splash screen to hide immediately! If we call this after
//       // `setAppIsReady`, then we may see a blank screen while the app is
//       // loading its initial state and rendering its first pixels. So instead,
//       // we hide the splash screen once we know the root view has already
//       // performed layout.
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View
//       style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
//       onLayout={onLayoutRootView}>
//       <Text>SplashScreen Demo! 👋</Text>
//       <Entypo name="rocket" size={30} />
//     </View>
//   );
// }