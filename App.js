/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import { createStackNavigator, } from 'react-navigation';
import SearchPage from './SearchPage';

const App = createStackNavigator({
  Home: { screen: SearchPage },
});
export default App;

