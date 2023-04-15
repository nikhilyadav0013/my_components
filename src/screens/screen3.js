import React, { useState, useRef, useEffect } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { STYLES } from '../styles'

const Screen3 = ({ navigation }) => {

    const [count, setCount] = useState(15000);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                if (count < 40000) {
                    setCount(prevCount => {
                        const newCount = prevCount + 1000;
                        return newCount <= 40000 ? newCount : prevCount;
                    })
                }
            }, 500)

            return () => clearInterval(interval)
        }, 1000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/award_bg.png')} style={STYLES.bg}>

                <Text style={[STYLES.txt, { fontSize: 30, textAlign: 'center' }]}>4 Friends Gave U {`\n`}Some Love</Text>
                <Image source={require('../assets/main-heart.png')} style={[STYLES.heart, { top: 20 }]} />
                <Text style={[STYLES.txt, { position: 'absolute', top: '30%' }]}>{count}</Text>
                <View style={styles.container}>
                    <Text style={{ color: 'pink', fontSize: 20, alignSelf: 'center' }}>Congrats!</Text>
                </View>
                <Image source={require('../assets/girlClap.png')} style={STYLES.gclap} />

                <TouchableOpacity style={STYLES.btn} onPress={() => navigation.navigate('Screen1')}>
                    <Image source={require('../assets/arrow.png')} style={STYLES.arrow} />
                </TouchableOpacity>
                <Image source={require('../assets/awardPlatform.png')} style={STYLES.pform} />
            </ImageBackground>
        </View>
    )
}

export default Screen3

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 50,
        width: 120,
        borderRadius: 10,
        justifyContent: 'center',
        right: 15,
        position: 'absolute',
        top: '42%'
    }
})