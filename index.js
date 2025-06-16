/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './src/components/redux/Store';
import Googlesigninscreen from './src/components/screens/Googlesigninscreen';
import Analytics from './src/components/screens/Analytics';
import Githubscreen from './src/components/screens/Githubscreen';

//AppRegistry.registerComponent(appName, () => App);

const appred=()=>{
    return (<Provider store={store}>
        <App/>
    </Provider>)
}
//AppRegistry.registerComponent(appName, () => appred);

//AppRegistry.registerComponent(appName, () => Googlesigninscreen);
//AppRegistry.registerComponent(appName, () => Analytics);
AppRegistry.registerComponent(appName, () => Githubscreen);