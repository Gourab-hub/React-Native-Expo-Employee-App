import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const Home = () => {
    return (
        <Card style={style.mycard}>
            <Text style={{fontSize:22}}>hello from home</Text>
        </Card>

    )
}

const style= StyleSheet.create({
    mycard: {
      
        padding:5,
        margin:5,
        backgroundColor: '#fff',
       
      },
})

export default Home;