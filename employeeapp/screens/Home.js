import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, FAB } from 'react-native-paper';


const Home = ({navigation}) => {

    const DATA = [
        { id: 1, name: "Anju", position: "Web Developer", pic: "https://images.unsplash.com/photo-1489939078242-0a1dc4a08f06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
        { id: 2, name: "Gourab", position: "Android Developer", pic: "https://images.unsplash.com/photo-1524386189627-88c26ac1cc69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
        { id: 3, name: "Tania", position: "Api Developer", pic: "https://images.unsplash.com/photo-1542330952-bffc55e812b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxhZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },


    ]

    // const renderList = data.map((item) => {
    //     return (
    //         <Card style={style.mycard} key={item.id}>
    //             <View style={style.cardview}>
    //                 <Image
    //                     style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
    //                     source={{ uri: `${item.pic}` }}

    //                 />
    //                 <View style={{ marginLeft: 10 }}>
    //                     <Text style={style.text}>{item.name}</Text>
    //                     <Text >{item.position}</Text>
    //                 </View>
    //             </View>
    //         </Card>
    //     )

    // })

    const renderList = ((item) => {
        return (
            <Card style={style.mycard} key={item.id} onPress={()=>navigation.navigate("Profile")}>
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
        <View style={style.fullscreen}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => {
                    console.log(item)
                    return renderList(item)

                }}
            // keyExtractor={item => item.id}

            />


            {/* {renderList} */}
            <FAB onPress={()=>navigation.navigate("Create")}
                style={style.fab}
                small={false}
                icon="plus"
                // theme={{ colors: { colo: 'Open Sans' } }}
                // onPress={() => console.log('Pressed')}
            />

        </View>




    )
}

const style = StyleSheet.create({
    fullscreen: {
        flex: 1,
    },
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
        margin: 2,

    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        tintColor: 'white',
        backgroundColor: '#105494'
    },
})

export default Home;