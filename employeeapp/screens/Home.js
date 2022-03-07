import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const Home = () => {

    const data = [
        { id: 1, name: "Anju", position: "Web Developer", pic: "https://images.unsplash.com/photo-1489939078242-0a1dc4a08f06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
        { id: 2, name: "Gourab", position: "Android Developer", pic: "https://images.unsplash.com/photo-1524386189627-88c26ac1cc69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
        { id: 3, name: "Tania", position: "Api Developer", pic: "https://images.unsplash.com/photo-1542330952-bffc55e812b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxhZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },


    ]

    const renderList = data.map((item) => {
        return (
            <Card style={style.mycard} key={item.id}>
                <View style={style.cardview}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                        source={{ uri: `${item.pic}` }}

                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={style.text}>{item.name}</Text>
                        <Text >{item.position}</Text>
                    </View>
                </View>
            </Card>
        )

    })



    return (
        <View>
            {renderList}

        </View>




    )
}

const style = StyleSheet.create({
    mycard: {
        margin: 5,
        backgroundColor: '#fff',
    },
    cardview: {
        flexDirection: 'row',
        margin: 15,
    },
    text: {
        fontSize: 20,
        margin:2,
     
    }
})

export default Home;