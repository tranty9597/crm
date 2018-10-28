import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AppStyle, Color, Sizes } from '../../../../values';
import CardView from '../../../../common/CardView';

function CarouselItem({ props }) {
    return (
        <CardView>
            <View style={styles.container}>
    
            </View>
        </CardView>

    )
}

const styles = StyleSheet.create({
    container: {
        ...AppStyle.containerFluid,
        borderRadius: Sizes.BORDER_RADIUS,
        backgroundColor: Color.white,
        height: 120

    }
})


export default CarouselItem