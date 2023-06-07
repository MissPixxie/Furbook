import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import { connectToDevTools } from "react-devtools-core";


import App from './App';

if (__DEV__) {
    connectToDevTools({
      host: 'localhost',
      port: 8079,
    });
  }
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
