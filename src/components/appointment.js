import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export const Appointments = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <IconButton icon='calendar-check' style={{ alignSelf: 'center' }} />
            <Text style={{ color: 'green', alignSelf: 'center', fontSize: 15 }}>No New Appointments</Text>
            <Text style={{ color: 'green', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Book Now</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'green',
        margin: 15,
        height: HEIGHT * 0.1,
        justifyContent: 'space-around',
        flexDirection: 'row'
    }
})
