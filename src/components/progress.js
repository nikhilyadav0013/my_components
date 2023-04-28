import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ProgressBar } from 'react-native-paper'

const emojis = ['😵', '😐', '😄', '😃', '😂', '🤣']

export const ProgressWithEmojis = () => {
    const [progress, setProgress] = useState(0)

    const onEmojiPress = (index) => {
        const newProgress = (index + 1) / emojis.length
        setProgress(newProgress)
    }

    return (
        <View style={{ justifyContent: 'space-around', height: '50%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {emojis.map((e, i) => (
                    <TouchableOpacity key={i} onPress={() => onEmojiPress(i)} style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 24 }}>{e}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <ProgressBar progress={progress} color='green' style={{ height: 10 }} />
        </View>
    )
}

