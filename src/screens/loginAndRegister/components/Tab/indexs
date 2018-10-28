import React from 'react'
import { Text } from 'react-native'

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { } from '../../../../common'

import Login from '../Login'
import Register from '../Register'

import { Device, Color, AppStyle, Sizes } from '../../../../values'

import { strings } from '../../../../i18n'
function LoginRoute(navigation) {
    return () => <Login navigation={navigation} />
}

function RegisterRoute(navigation) {
    return () => <Register navigation={navigation} />
}


class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'Login', title: strings('login') },
                { key: 'Register', title: strings('register') },
            ],
        };
    }

    render() {
        let { index, routes } = this.state
        return (
            <TabView
                style={{ backgroundColor: Color.white }}
                renderTabBar={props =>
                    <TabBar
                        {...props}
                        style={{ backgroundColor: Color.white }}
                        renderLabel={(props) => {

                            let { route } = props;
                            let isActiveRoute = routes[index].key === route.key
                            return (
                                <Text
                                    style={[AppStyle.mdText, { padding: Sizes.SM_GAP, color: isActiveRoute ? Color.black : Color.greyish }]}>
                                    {route.title}
                                </Text>
                            )
                        }}
                        indicatorStyle={{ backgroundColor: Color.redOrange }}
                    />
                }
                onIndexChange={index => this.setState({ index })}
                navigationState={this.state}
                renderScene={SceneMap({
                    Login: LoginRoute(this.props.navigation),
                    Register: RegisterRoute(this.props.navigation)
                })}
                initialLayout={{ width: Device.screenWidth, height: 200 }}
                useNativeDriver
            />
        )
    }
}

export default Tab