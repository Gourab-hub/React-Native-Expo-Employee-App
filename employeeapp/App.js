import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants"
import Home from './screens/Home';
import CreateEmployy from './screens/CreateEmployee';
import Profile from './screens/Profile';

// Navigate 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <CreateEmployy/> */}

      {/* <Profile /> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create" component={CreateEmployy}
           options={{
            title: 'Create Employee',
          }} />
        <Stack.Screen name="Profile" component={Profile} />

      </Stack.Navigator>

    </View>
  );
}



//https://reactnavigation.org/docs/getting-started
export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    // marginTop: Constants.statusBarHeight,

  },
});
