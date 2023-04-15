import React, { useEffect } from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { STYLES } from '../styles'

const Screen1 = ({ navigation }) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('Screen2')
        }, 3000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/award_bg.png')} style={STYLES.bg}>
                <Image source={require('../assets/castingLogo.png')} style={STYLES.clogo} />
                <Text style={STYLES.call_txt}>Casting Call</Text>
                <Text style={STYLES.txt}>The Results R In!</Text>
                <Image source={require('../assets/girlClap.png')} style={STYLES.gclap} />
                <Image source={require('../assets/awardPlatform.png')} style={STYLES.pform} />
            </ImageBackground>
        </View>
    )
}

export default Screen1
