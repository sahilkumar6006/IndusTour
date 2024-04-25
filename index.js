/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './src/Redux/store';


export default function Main() {
  return(
 

      <App/>

   
  )
}
AppRegistry.registerComponent(appName, () => Main);
