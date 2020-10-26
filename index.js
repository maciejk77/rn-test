/** @format */

import App from './src/App';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
registerRootComponent(App);

// XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
//     GLOBAL.originalXMLHttpRequest :
//     GLOBAL.XMLHttpRequest;
console.disableYellowBox = true;
