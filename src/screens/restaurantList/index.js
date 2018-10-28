import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Carousel from 'react-native-snap-carousel';

import { Header } from '../../common'

import { Container } from '../../layouts';
import { Color, AppStyle, Sizes, Device } from '../../values';
import { CarouselItem } from './components';
import { getLocation } from '../../utils';
import RenderMarkder from './components/Marker';

class RestaurantList extends React.Component {
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
        let { curRegion, markers } = this.state;
        return (
            <Container style={styles.container}>
                <Header/>
                <MapView
                    region={curRegion}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                >
                    {this.markers}
                </MapView>
                <View style={styles.carouselOverlay}>
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
            </Container>
        )
    }
    _onSnapToItem = (index) => {

        this.setState({curRegion: {...this.state.curRegion, ...this.state.markers[index]}})
        this.markerRefs[index].marker.showCallout()
    }
    _markerOnpress = (index) => {
        this._carousel.snapToItem(index)
    }
}

const styles = StyleSheet.create({
    container: {
        ...AppStyle.matchParent,
    },
    map: {
        ...StyleSheet.absoluteFill,
        marginTop: Sizes.HEADER_HEIGHT,
        height: Device.screenHeight - Sizes.HEADER_HEIGHT
    },
    carouselOverlay: {
        ...AppStyle.containerFluid,
        position: 'absolute',
        bottom: 0,
        height: Device.screenHeight * 0.2,
        zIndex: 1
    }
})
export default RestaurantList;