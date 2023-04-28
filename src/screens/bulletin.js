import React, { useState } from "react"
import { SafeAreaView, View, Text, Dimensions, TouchableOpacity, ScrollView, Image } from "react-native"
import { Button, IconButton } from "react-native-paper"
import Icon from 'react-native-vector-icons/Entypo'
import { useNavigation } from "@react-navigation/native"

const HEIGHT = Dimensions.get('window').height

const Bulletin = () => {

    const [visible, setVisible] = useState(true)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
                <Header />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button mode="contained" buttonColor="green" style={{ width: '45%' }} onPress={() => setVisible(false)}>
                        Notifications
                    </Button>
                    <Button mode="contained" buttonColor="#dbd7d2" textColor="black" style={{ width: '45%' }} onPress={() => setVisible(true)}>
                        Chats
                    </Button>
                </View>
                {visible ? <>
                    <Image source={require('../assets/nonotify.png')} style={{ resizeMode: 'contain', flex: 1, alignSelf: 'center' }} />
                </> : <ScrollView style={{ flex: 1 }}>
                    <Image source={require('../assets/notify1.png')} style={{ width: '100%', resizeMode: 'contain' }} />
                    <Image source={require('../assets/notify2.png')} style={{ width: '100%', resizeMode: 'contain' }} />
                </ScrollView>}
            </View>
        </SafeAreaView>
    )
}

export default Bulletin

const Header = () => {

    const navigation = useNavigation()

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: HEIGHT * 0.09 }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                <IconButton icon="arrow-left-bold-circle-outline" iconColor="green" style={{ alignSelf: 'center' }} size={30} />
                <Text style={{ color: 'green', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Bulletin</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '30%' }}>
                <Icon name='magnifying-glass' size={30} color='grey' style={{ alignSelf: 'center' }} />
                <Icon name='shopping-bag' size={30} color='grey' style={{ alignSelf: 'center' }} />
            </View>
        </View>
    )
}