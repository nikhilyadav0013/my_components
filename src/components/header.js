import React from 'react'
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export const Header = () => {
    return (
        <View style={styles.container}>
            <Icon name='text' size={35} color='green' style={styles.icn} />
            <View style={styles.inner_con}>
                <Icon name='magnifying-glass' size={32} color='grey' style={styles.icn} />
                <Icon name='shopping-bag' size={32} color='grey' style={styles.icn} />
                <Image source={{ uri: 'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg' }}
                    style={styles.img}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: HEIGHT * 0.09,
    },
    inner_con: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: WIDTH * 0.5
    },
    img: {
        height: 40,
        width: 40,
        borderRadius: 7,
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    icn: {
        alignSelf: 'center'
    }
})