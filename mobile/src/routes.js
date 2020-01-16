import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar',
                headerStyle: {
                    backgroundColor: '#7d40e7',
                    shadowColor: 'transparent',
                }

            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil',
                headerStyle: {
                    backgroundColor: '#24292E',
                    shadowColor: 'transparent',
                },
            },
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
        },
    })
);

export default Routes;