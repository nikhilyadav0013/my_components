import React, { useState } from 'react'
import { View, Text, SafeAreaView, FlatList, ScrollView, Dimensions, Image } from 'react-native'
import { Card, IconButton } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Entypo'
import { Header } from '../components/header'
import { ProgressWithEmojis } from '../components/progress'
import { Tile } from '../components/tile'
import { Appointments } from '../components/appointment'
import { DATA, DATA1, DATA2, DATA3, DATA4 } from '../demo'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const Screen1 = () => {

    const [visible, setVisible] = useState(true)

    const renderItem = ({ item }) => {
        return (
            <View style={{ padding: 15 }}>
                <Image source={{ uri: item.img }}
                    style={{ height: HEIGHT * 0.15, width: WIDTH * 0.22, resizeMode: 'contain' }}
                />
                <Text style={{ color: '#000', alignSelf: 'center' }}>{item.name}</Text>
            </View>
        )
    }

    const renderItem1 = ({ item }) => {
        return (
            <View style={{ padding: 15 }}>
                <Image source={{ uri: item.img }}
                    style={{ height: HEIGHT * 0.15, width: WIDTH * 0.22, resizeMode: 'contain' }}
                />
                <Text style={{ color: '#000', alignSelf: 'center' }}>{item.text}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
                <Header />
                <ScrollView style={{ flex: 1 }}>
                    <Text style={{ color: 'green', marginLeft: 15 }}>Friday, 4 Sep</Text>
                    <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 25, marginLeft: 15 }}>Namaste, Angela</Text>
                    {visible ?
                        <>
                            <Card style={{ margin: 15, height: HEIGHT * 0.25 }}>
                                <Card.Content>
                                    <IconButton
                                        icon="close"
                                        iconColor='grey'
                                        style={{ position: 'absolute', right: 0 }}
                                        size={25}
                                        onPress={() => setVisible(false)}
                                    />
                                    <View style={{ height: '100%', justifyContent: 'space-around' }}>
                                        <Text style={{ color: 'green', fontSize: 20 }}>
                                            How are you <Text style={{ fontWeight: 'bold' }}>feeling</Text> today?
                                        </Text>
                                        <ProgressWithEmojis />
                                    </View>
                                </Card.Content>
                            </Card>
                        </> : <></>
                    }
                    <Tile iconFirst={'power-sleep'} text={'You slept for'} textBold={'8 hours'} iconLast={'autorenew'} />
                    <Tile iconFirst={'shoe-print'} text={'You walked'} textBold={'1200 steps'} iconLast={'autorenew'} />
                    <Tile iconFirst={'clock'} text={'Screen time is'} textBold={'5 hours'} iconLast={'autorenew'} />
                    <Tile iconFirst={'heart-pulse'} text={'Connect you'} textBold={'Health App'} iconLast={'plus'} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, marginLeft: 15 }}>
                            Shop for Health  & Beauty
                        </Text>
                        <Icon icon='chevron-right' size={25} color='green' />
                    </View>
                    <FlatList
                        data={DATA}
                        keyExtractor={item => item.name}
                        horizontal={true}
                        renderItem={renderItem}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, marginLeft: 15 }}>
                            Upcoming Appointments
                        </Text>
                        <Text style={{ fontSize: 15, color: 'green', alignSelf: 'center', right: 10 }}>Clear</Text>
                    </View>
                    <Appointments />
                    <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, marginLeft: 15 }}>
                        Recent Orders
                    </Text>
                    <FlatList
                        data={DATA1}
                        horizontal={true}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ elevation: 5 }}>
                                    <Image source={item.img}
                                        style={{ height: HEIGHT * 0.3, width: WIDTH * 0.8, resizeMode: 'contain', margin: 10 }}
                                    />
                                </View>
                            )
                        }}
                    />
                    <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, marginLeft: 15 }}>
                        Amrutam Blog
                    </Text>
                    <FlatList
                        data={DATA2}
                        horizontal={true}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ elevation: 5 }}>
                                    <Image source={item.img}
                                        style={{ height: HEIGHT * 0.3, width: WIDTH * 0.8, resizeMode: 'contain', margin: 10 }}
                                    />
                                </View>
                            )
                        }}
                    />
                    <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, marginLeft: 15 }}>
                        What are you looking for?
                    </Text>
                    <FlatList
                        data={DATA3}
                        horizontal={true}
                        renderItem={renderItem1}
                    />
                    <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20, marginLeft: 15 }}>
                        Top Rated Doctors
                    </Text>
                    <FlatList
                        data={DATA4}
                        horizontal={true}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ elevation: 5 }}>
                                    <Image source={item.img}
                                        style={{ height: HEIGHT * 0.3, width: WIDTH * 0.5, resizeMode: 'contain', margin: 10 }}
                                    />
                                </View>
                            )
                        }}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Screen1