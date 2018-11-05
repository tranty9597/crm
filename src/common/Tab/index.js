/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the Tab class.
 * @author ADAMO
 * @since  10/15/2018
 */
import React from 'react'
import { Text } from 'react-native'

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { Device, Color, AppStyle, Sizes } from '../../values'
import { screenHeight } from '../../values/device';

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
                        style={[{ backgroundColor: Color.white, height: 60, padding: 10 }]}
                        renderLabel={(props) => {

                            let { route } = props;
                            let isActiveRoute = routes[index].key === route.key
                            return (
                                <Text
                                    style={[AppStyle.mdText, AppStyle.lightWeight, { padding: Sizes.SM_GAP, color: isActiveRoute ? Color.black : Color.greyish }]}>
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
                initialLayout={{ width: Device.screenWidth, height: screenHeight * 0.2 }}
                useNativeDriver
            />
        )
    }
    /**
     * @description handle tab index change
     * @param {*number} index
     */
    _onIndexChange = (index) => {
        this.setState({ index })
    }
}

export default Tab