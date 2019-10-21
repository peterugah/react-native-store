import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
const Icon = (props) => {
    const [ParamOn, setParamOn] = useState(props.navigation.getParam("name"))
    useEffect(() => {
        props.navigation.setParams({
            reload
        })
        // props.navigation.willBlur(() => {
        //     console.log("will blur")
        // })
    }, [])
    const goHome = () => {
        props.navigation.navigate("Home")
    }
    const reload = () => {
        // console.warn(props.navigation)
        // console.warn(props.navigation.getParam("name", "not set"))
        props.navigation.push("Icon", { name: "peter" })
    }
    return (
        <View>
            {
                ParamOn &&
                <Text>
                    {ParamOn}
                </Text>
            }
            <Text style={{
                fontFamily: "Quicksand"
            }}>this is working...</Text>
            <Button title="goHome" onPress={goHome}></Button>
            <View>
                <Button title="reload" onPress={reload}></Button>
            </View>
        </View>
    )
}

const Title = () => {
    return (
        <View style={{
            padding: 0
        }}>
            <Text style={{
                padding: 0,
                color: "white",
                textAlign: "center",
                alignSelf: "center",
                fontWeight: "bold",
                display: "flex",
                flexDirection: "row",
                fontFamily: "Quicksand"
            }}>this is a custom title...</Text>
        </View>
    )
}

Icon.navigationOptions = ({ navigation, navigationOptions }) => {
    const youClicked = () => {
        console.warn("you clicked me")
    }
    return {
        // headerTitle: () => <Title />,
        headerBackTitle: "go--",
        headerRight: () => (
            <Button onPress={navigation.getParam("reload")} title="touch me" />
        ),
        // headerLeft: () => (
        //     <Button title="you also clicked here..." />
        // ),
        // headerStyle: {
        //     backgroundColor: "red"
        // },
        // headerTintColor: "white",
        headerTitleStyle: {
            fontFamily: "Quicksand",
        },
        // title: navigation.getParam("name", "not set yet")
    }
}
class Home extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello peter</Text>

            </View>
        )
    }
}

const stackNavigator = createStackNavigator({
    Home: Home,
}, {
    initialRouteName: "Home",
})

// export default createAppContainer(stackNavigator)
export default Icon


