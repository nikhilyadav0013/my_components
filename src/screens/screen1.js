import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, PermissionsAndroid } from 'react-native'
import { Button, ActivityIndicator } from 'react-native-paper'
import GeoPosition from 'react-native-geolocation-service'
import { BleManager } from 'react-native-ble-plx'

const bleManager = new BleManager()

const Screen1 = ({ navigation }) => {

    const [location, setLocation] = useState('')
    const [devices, setDevices] = useState([])
    const [activity, setActivity] = useState(false)

    useEffect(() => {
        requestGeolocation()

    }, [])

    const requestBluetooth = () => {

        // Start Bluetooth scanning
        bleManager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                // Handle error
                return
            }

            // Extract MAC ID and RSSI from scan result
            const { id, rssi } = device

            // Update devices state with new scan result
            setDevices(prevDevices => {
                // Check if device already exists in devices state
                const existingDevice = prevDevices.find(prevDevice => prevDevice.id === id)

                if (existingDevice) {
                    // Update RSSI of existing device
                    return prevDevices.map(prevDevice =>
                        prevDevice.id === id ? { ...prevDevice, rssi } : prevDevice
                    );
                } else {
                    // Add new device to devices state
                    return [...prevDevices, { id, rssi }]
                }
            })
        })
    }

    const stopBluetoothScan = () => {
        bleManager.stopDeviceScan()
    }

    const requestGeolocation = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Geolocation Permission',
                    message:
                        'App needs access to your Geolocation ',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // console.log('Success')
            } else {
                // console.log('Permission denied')
            }
        } catch (err) {
            console.warn(err)
        }
    }

    const getLocation = () => {

        GeoPosition.getCurrentPosition(
            position => {
                console.log(position)
                setLocation(position)
            },
            error => {
                console.log(error.code, error.message)
                setLocation(false)
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )
    }
    console.log(devices)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 1 }}>
                {activity ? <ActivityIndicator animating={activity} color='blue' style={{ top: 50 }} size='large' /> :
                    <FlatList
                        data={devices}
                        renderItem={({ item }) => (
                            <View>
                                <Text style={{ color: '#000', alignSelf: 'center' }}>MAC ID: {item.id}</Text>
                                <Text style={{ color: '#000', alignSelf: 'center' }}>RSSI: {item.rssi}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => `${item.id}-${index}`}
                    />
                }


            </View>
            <View style={{ flex: 1, justifyContent: 'space-around' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button mode='outlined' onPress={() => { requestBluetooth, setActivity(true) }} >Start</Button>
                    <Button mode='outlined' onPress={() => { stopBluetoothScan, setActivity(false) }} >Stop</Button>
                </View>
                <Text style={{ color: '#000', alignSelf: 'center', fontSize: 15 }}>
                    Latitude:{`\n`} {location ? location.coords.latitude : null}
                </Text>
                <Text style={{ color: '#000', alignSelf: 'center', fontSize: 15 }}>
                    Longitude:{`\n`} {location ? location.coords.longitude : null}
                </Text>
                <Button mode='outlined' onPress={getLocation} style={{ width: '50%', alignSelf: 'center' }}>
                    Get Location
                </Button>
            </View>
        </SafeAreaView >
    )
}

export default Screen1
