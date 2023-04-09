import React, { useRef } from "react"
import { View, StyleSheet, Animated } from "react-native"

const ringProps = [
    { width: 120, height: 120, borderRadius: 60, scale: 1.8, backgroundColor: '#009FFF' },
    { width: 100, height: 100, borderRadius: 50, scale: 1.6, backgroundColor: '#64B1FF' },
    { width: 80, height: 80, borderRadius: 40, scale: 1.4, backgroundColor: '#0056E7' },
    { width: 60, height: 60, borderRadius: 30, scale: 1.2, backgroundColor: '#0015A8' }
]

export const AnimatedRing = () => {

    const size = useRef(new Animated.Value(0)).current

    const startAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(size, {
                    toValue: 1.4,
                    duration: 1000,
                    useNativeDriver: true
                }),
                Animated.timing(size, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                })
            ])
        ).start()
    }

    React.useEffect(() => {
        startAnimation()
    })

    return (
        <View style={styles.container}>
            {ringProps.map((ring, index) => (
                <Animated.View
                    key={index}
                    style={[
                        styles.ring,
                        {
                            width: ring.width,
                            height: ring.height,
                            borderRadius: ring.borderRadius,
                            backgroundColor: ring.backgroundColor,
                            transform: [
                                {
                                    scale: size.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, ring.scale]
                                    })
                                }
                            ]
                        }
                    ]}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    ring: {
        position: "absolute",
        borderWidth: 20,
        borderColor: "opal",
        opacity: 0.3,
    }
})