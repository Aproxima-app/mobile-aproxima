import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/home';
import Main from './pages/main';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

const MainNavigator = createStackNavigator({
    SignIn,
    Main,
    Home,
    SignUp,
});

const Routes = createAppContainer(MainNavigator);

export default Routes;