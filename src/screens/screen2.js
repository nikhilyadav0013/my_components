import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet, Animated } from 'react-native';
import { STYLES } from '../styles';

const Screen2 = ({ navigation }) => {

    const animValue = useRef(new Animated.Value(0)).current;
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('Screen3')
        }, 20000)

        return () => clearTimeout(timeout)
    }, [])

    const startAnimation = () => {
        if (!isClicked) {
            setIsClicked(true);
            Animated.timing(animValue, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true
            }).start(() => {
                setIsClicked(false)
                animValue.setValue(0)
            })
        }
    }

    const animTranslateX = animValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [300, 0, -300]
    })

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/award_bg.png')} style={STYLES.bg}>
                <Animated.View
                    style={[
                        styles.user_view,
                        {
                            transform: [{ translateX: animTranslateX }],
                        },
                    ]}
                >
                    <Image source={require('../assets/avtar2.png')} style={STYLES.user_circle} />
                    <View style={{ left: '30%' }}>
                        <Text style={{ color: 'yellow', fontSize: 35 }}>D-Lister</Text>
                        <Text style={{ color: 'white', fontSize: 15, alignSelf: 'center' }}>Sally</Text>
                    </View>
                </Animated.View>
                <Text style={[STYLES.txt, { top: '25%' }]}>Gave U Some Love</Text>
                <Image source={require('../assets/main-heart.png')} style={STYLES.heart} />
                <Text style={[STYLES.txt, { position: 'absolute', top: '38%' }]}>15000</Text>
                <Image source={require('../assets/girlClap.png')} style={STYLES.gclap} />
                <TouchableOpacity style={STYLES.btn} onPress={startAnimation}>
                    <Image source={require('../assets/arrow.png')} style={STYLES.arrow} />
                </TouchableOpacity>
                <Image source={require('../assets/awardPlatform.png')} style={STYLES.pform} />
            </ImageBackground>
        </View>
    )
}

export default Screen2

const styles = StyleSheet.create({
    user_view: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        position: 'absolute',
        alignItems: 'center',
        top: '8%'
    }
})
