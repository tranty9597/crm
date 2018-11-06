import React from 'react'
import { Image, StyleSheet, View, Keyboard } from 'react-native'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Carousel from 'react-native-snap-carousel';

import { Header, Input } from '../../common'

import { Container } from '../../layouts';
import { Color, AppStyle, Sizes, Device } from '../../values';
import { CarouselItem } from './components';
import { getLocation } from '../../utils';
import RenderMarkder from './components/Marker';

import { strings } from '../../i18n';

const ICON_LOCATION = require('../../assets/image/location/red.png')
const ICON_DROP = require('../../assets/image/dropdown/dropdown.png')

class RestaurantList extends React.PureComponent {
    static navigationOptions = {
        tabBarIcon: (focused) => {
            return <Image source={focused.focused ? require('../../assets/image/message/active.png') : require('../../assets/image/message/inactive.png')} />
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            entries: [1, 2, 4, 5],
            curRegion: null,
            showCarousel: true,
            markers: [
                {
                    latitude: 21.1142608,
                    longitude: 105.5185439
                },
                {
                    latitude: 21.2142608,
                    longitude: 105.5185439
                },
                {
                    latitude: 21.0142608,
                    longitude: 105.6185439
                },
                {
                    latitude: 21.0142608,
                    longitude: 105.4185439
                }
            ]
        }
    }
    componentDidMount() {
        let { markers } = this.state
        getLocation().then((por) => {
            this.setState({
                curRegion: {
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    latitude: 21.0142608,
                    longitude: 105.5185439
                }
            })
        })
        this.markerRefs = []
        this.markers = markers.map((coor, key) => <RenderMarkder ref={r => this.markerRefs.push(r)} key={key} coor={coor} onPress={this._markerOnpress} idx={key} />)
    }
    _renderItem({ item, index }) {
        return (
            <CarouselItem />
        );
    }
    render() {
        let { curRegion, showCarousel } = this.state;
        return (
            <Container style={styles.container}>

                <Header />
                <View style={styles.map}>
                    <MapView
                        region={curRegion}
                        provider={PROVIDER_GOOGLE}
                        style={AppStyle.matchParent}
                    >
                        {this.markers}
                    </MapView>
                </View>
                <View style={styles.search}>
                    <Input
                        onFocus={this._toggleCarouesel}
                        onBlur={this._toggleCarouesel}
                        placeholderTextColor={Color.black}
                        placeholder={strings('restaurantList_search_hint')}
                        leftIcon={ICON_LOCATION}
                        rightIcon={ICON_DROP}
                        onSelect={this._onSelect}
                        bgColor={Color.white}
                        autoComlete
                        data={[{ name: 'tydai ca' }, { name: 'tydai ca' }, { name: 'tydai ca' }, { name: 'tydai ca' }]}
                    />
                </View>

                <View style={[styles.carouselOverlay, { width: showCarousel ? '100%' : 0 }]}>

                    <Carousel

                        onSnapToItem={this._onSnapToItem}
                        enableMomentum
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries}
                        renderItem={this._renderItem}
                        sliderWidth={Device.screenWidth - Sizes.MD_GAP * 2}
                        itemWidth={Device.screenWidth - Sizes.MD_GAP * 6}
                    />

                </View>
            </Container >
        )
    }
    /**
     * @description snap to item in carousel
     */
    _onSnapToItem = (index) => {

        this.setState({ curRegion: { ...this.state.curRegion, ...this.state.markers[index] } })
        this.markerRefs[index].marker.showCallout()
    }
    /**
     * @description handle onpress event of marker
     */
    _markerOnpress = (index) => {
        this._carousel.snapToItem(index)
    }

    _onSelect = (item, index) => {
        this._markerOnpress(index)
    }
    _toggleCarouesel = () => {
        this.setState({ showCarousel: !this.state.showCarousel })
    }

}

const styles = StyleSheet.create({
    container: {
        ...AppStyle.matchParent,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        marginTop: Sizes.HEADER_HEIGHT,
    },
    carouselOverlay: {
        ...AppStyle.containerFluid,
        position: 'absolute',
        bottom: Sizes.MD_GAP,
        zIndex: 1,
    },
    search: {
        ...AppStyle.container,
        position: 'absolute',
        marginTop: Sizes.HEADER_HEIGHT - Sizes.BUTTON_HEIGHT / 2,
        zIndex: 2
    }
})
export default RestaurantList;