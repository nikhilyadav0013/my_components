import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Screen1 from "../screens/screen1"
import Screen2 from "../screens/screen2"
import Screen3 from "../screens/screen3"

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
                <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
                <Stack.Screen name="Screen3" component={Screen3} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack