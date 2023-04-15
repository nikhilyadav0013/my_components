import { StyleSheet } from "react-native"

export const STYLES = StyleSheet.create({
    bg: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    pform: {
        bottom: 0,
        position: 'absolute',
        width: '100%'
    },
    gclap: {
        alignSelf: 'center',
        height: '40%',
        width: '50%',
        bottom: '11%',
        position: 'absolute'
    },
    clogo: {
        alignSelf: 'center',
        width: '20%',
        height: '20%',
        resizeMode: 'contain',
        top: 15
    },
    call_txt: {
        color: 'pink',
        fontSize: 25,
        alignSelf: 'center',
        fontFamily: 'serif',
        transform: [{ rotate: '-10deg' }]
    },
    txt: {
        color: 'yellow',
        alignSelf: 'center',
        fontSize: 25,
        top: 50
    },
    heart: {
        height: '35%',
        width: '35%',
        alignSelf: 'center',
        resizeMode: 'contain',
        top: '18%'
    },
    arrow: {
        height: '70%',
        width: '70%',
        resizeMode: 'contain',
        position: 'absolute',
        alignSelf: 'center'
    },
    user_circle: {
        height: 80,
        width: 80,
        borderRadius: 40,
        resizeMode: 'contain',
        borderColor: 'yellow',
        borderWidth: 2
    },
    btn: {
        height: '10%',
        width: '15%',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '20%',
        right: 20
    } 
})