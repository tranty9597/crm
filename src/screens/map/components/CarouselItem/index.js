import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AppStyle, Color, Sizes } from '../../../../values';
function CarouselItem({ props }) {
    return (
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        ...AppStyle.containerFluid,
        borderRadius: Sizes.BORDER_RADIUS,
        backgroundColor: Color.white,
        height: 120

    }
})


export default CarouselItem