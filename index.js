/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './Containers/App';

import GenericScreen from './Containers/GenericScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => GenericScreen);
