import React from 'react'
import { View, Text, Button } from 'react-native'
import { createAppContainer } from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs"
import Fa from "react-native-vector-icons/FontAwesome5"

const App = (props) => {
    const gotoSettings = () => {
        props.navigation.navigate("Settings")
    }
    return (
        <View>
            <Text>This is for tab navigation</Text>
            <Fa name="envelope" size={30} style={{
                fontWeight: 100,
                color: "#666",
                fontSize: 20,
                padding: 10,
      
            }} />
            <Button title="goto settings" onPress={gotoSettings} />
        </View>
    )
}

const Settings = (props) => {
    const gotoHome = () => {
        props.navigation.navigate("App")
    }
    return (
        <View>
            <Text>this is the settings screen.</Text>
            <Button title="goto home" onPress={gotoHome} />

        </View>
    )
}
const tabNavigator = createBottomTabNavigator({
    App,
    Settings
}, {
    defaultNavigationOptions: {

    },
    tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "grey"
    }
})

export default createAppContainer(tabNavigator)
