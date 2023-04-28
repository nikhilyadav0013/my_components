import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Dimensions } from 'react-native'
import Screen1 from '../screens/screen1'
import Bulletin from '../screens/bulletin'

const HEIGHT = Dimensions.get('window').height

const Tab = createMaterialBottomTabNavigator()

export const BottomNav = () => {
    return (
        <Tab.Navigator
            activeColor='green'
            barStyle={{
                height: HEIGHT * 0.1,
                backgroundColor: 'white',
            }}>
            <Tab.Screen
                name="Home"
                component={Screen1}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="white-balance-sunny" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Store',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="store" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Orders',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="clipboard-list" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Consult"
                component={Consult}
                options={{
                    tabBarLabel: 'Consult',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bottle-tonic-plus" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Bulletin"
                component={Bulletin}
                options={{
                    tabBarLabel: 'Bulletin',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="flower-tulip" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const Notifications = () => { return null }
const Profile = () => { return null }
const Consult = () => { return null }
