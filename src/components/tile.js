import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { Card, IconButton } from 'react-native-paper'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export const Tile = ({ iconFirst, text, textBold, iconLast }) => {
    return (
        <Card style={{ height: HEIGHT * 0.1, margin: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: '100%' }}>
                <IconButton icon={iconFirst} iconColor='green' style={{ alignSelf: 'center' }} />
                <Text style={{ color: 'green', fontSize: 20, alignSelf: 'center' }}>
                    {text} <Text style={{ color: 'green', fontWeight: 'bold' }}>{textBold}</Text>
                </Text>
                <IconButton icon={iconLast} iconColor='green' style={{ alignSelf: 'center' }} />
            </View>
        </Card>
    )
}