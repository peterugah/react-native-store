import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import Icon from './components/Icon'
const Home = (props) => {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",

      // alignItems: "center",
    },
    text: {
      fontFamily: "Quicksand",
      fontSize: 30
    },
    textInput: {
      fontFamily: "Quicksand",
      width: "90%",
      borderWidth: 1,
      fontSize: 15,
      paddingLeft: "5%",
      margin: 10
    },
    button: {
      fontFamily: "Quicksand",
      backgroundColor: "red"
    }
  })
  const openModal = () => {
    props.navigation.navigate("Modal")
  }
  return (
    <View>
      <Text style={style.text}>Hello Peter</Text>
      <Button title="open Modal" onPress={openModal} />
    </View>
  )
}

const loggedIn = false;



const Modal = () => {
  return (
    <View>
      <Text>This is a modal</Text>
    </View>
  )
}
const stackNavigator = createStackNavigator({
  Home,
  Icon,
}, {
  initialRouteName: loggedIn ? "Home" : "Icon",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "green",
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: 12,
      fontFamily: "Quicksand"
    }
  }
})

const modalNavigator = createStackNavigator({
  // Main: stackNavigator,
  Modal
}, {
  mode: "modal",
  headerMode: "none"
})

const rootNavigator = createStackNavigator({
  Main: stackNavigator,
  Modal: modalNavigator
}, {
  initialRouteName: "Main",
  headerMode: "none"
})

const AppContainer = createAppContainer(rootNavigator)

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />
//   }
// }

export default AppContainer

// export default () => {
//   return <AppContainer />
// }