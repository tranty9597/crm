import { Platform, Dimensions } from 'react-native'

const isIos = Platform.OS === 'ios';

const { screenWidth: screenWidth, height: screenHeight } = Dimensions.get('window')

export { isIos, screenHeight, screenWidth }