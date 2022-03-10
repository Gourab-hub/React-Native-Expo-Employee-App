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

const myoptions={
  title: 'Create Employee',
  animationEnabled: "true",
  headerTintColor: "#fff",
  headerMode: 'screen',
  headerStyle: {
    height: 80, // Specify the height of your custom header
    backgroundColor: '#1a298a',
   
  }
}

function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <CreateEmployy/> */}
      {/* <Profile /> */}


      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{...myoptions,title:"Home"}}/>  
        {/* React spread operator to change Title name */}
        <Stack.Screen name="Create" component={CreateEmployy} options={myoptions}/>
        <Stack.Screen name="Profile" component={Profile} options={{...myoptions,title:"Profile"}}/>
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
