import React from 'react'
import { Text } from 'react-native'

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { Device, Color, AppStyle, Sizes } from '../../values'

type TabProps = {
    routes: Array,
    router: Object
}


class Tab extends React.PureComponent<TabProps> {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: this.props.routes
        };
    }

    render() {
        let { index, routes } = this.state
        let { router } = this.props;
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
                onIndexChange={this._onIndexChange}
                navigationState={this.state}
                renderScene={SceneMap(router)}
                initialLayout={{ width: Device.screenWidth, height: 200 }}
                useNativeDriver
            />
        )
    }
    _onIndexChange = (index) => {
        this.setState({ index })
    }
}

export default Tab