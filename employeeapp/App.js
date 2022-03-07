import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants"
import Home from './screens/Home';
import CreateEmployy from './screens/CreateEmployee';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <CreateEmployy/>
      {/* <Text>hii</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
     flex:1,
    backgroundColor: '#eee',
    marginTop: Constants.statusBarHeight,

  },
});
