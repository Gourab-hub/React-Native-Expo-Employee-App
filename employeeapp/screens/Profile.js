import react from 'react';
import { StyleSheet, Text, View, Image, FlatList, Linking, Platform, TouchableOpacity,Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card } from 'react-native-paper';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { TextInput, Button } from 'react-native-paper';



const Profile = (props) => {


    //   console.log("Profilr props",props)
    const { _id, name, email, phone, picture, salary, position } = props.route.params.item
  
    // console.log(_id)

    const deleteEmployee=()=>{
        fetch("https://employee-jsonn.vercel.app/delete",{
            method:"post",
            headers:{
               "Content-Type":"application/json"
            },
            body:JSON.stringify({
                id:_id
            })
        })
        .then(res=>res.json())
        .then(deleteEmp=>{
            Alert.alert(`${deleteEmp.name} Deleted`)
            props.navigation.navigate('Home');
            console.log("deleteEmp",deleteEmp)
        }).catch(err=>{
            Alert.alert('Error:', err.message)
            console.log(err)
        }
        )
    }


    const openDial = () => {
        if (Platform.OS === "android") {
            Linking.openURL(`tel:${phone}`)
        } else {
            Linking.openURL(`telprompt:${phone}`)
        }
    }



    return (
        <View style={style.fullscreen} key={_id}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={style.background}
            />

            {/* Profile Image  */}
            <View style={style.ProfileVew}>
                <Image
                    style={style.Profileimage}
                    source={{ uri: picture }}
                />
            </View>

            {/* Profile Information View  */}


            <View style={style.ProfileVewDetails}>
                <Title>{name}</Title>
                <Text style={{ fontSize: 15 }}>{position}</Text>
            </View>

            <Card style={style.Details}

                onPress={() => Linking.openURL(`mailto:${email}`)}>
                <View style={style.DetailsView}>
                    <MaterialIcons style={style.icon} name="email" />
                    <Text style={{ marginLeft: 25 }}>{email}</Text>
                </View>
            </Card >


            <Card style={style.Details} onPress={() => openDial()}
            >
                <View style={style.DetailsView}>
                    <AntDesign style={style.icon} name="phone" />
                    <Text style={{ marginLeft: 25 }}>{phone}</Text>
                </View>
            </Card >


            <Card style={style.Details}>
                <View style={style.DetailsView}>
                    <MaterialIcons style={style.icon} name="attach-money" />

                    <Text style={{ marginLeft: 25 }}>{salary}</Text>
                </View>
            </Card>


            <View style={style.modelButtonView}>
                <Button style={style.button} icon="account-edit" mode="contained" onPress={() => {
                      props.navigation.navigate('CreateEmployee',
                    { _id, name, email, phone, picture, salary, position }
                    )
                    }}>
                    Account-edit
                </Button>

                <Button style={style.button} icon="delete-outline" mode="contained" onPress={() =>deleteEmployee()}>
                    Delete
                </Button>
            </View>
        </View>

    )
}


const style = StyleSheet.create({
    fullscreen: {
        flex: 1,
    },
    background: {
        height: "20%",

    },
    Profileimage: {
        height: 140,
        width: 140,
        borderRadius: 70,

    },
    ProfileVew: {
        alignItems: "center",
        marginTop: -70
    },
    ProfileVewDetails: {
        alignItems: "center",
        margin: 5,
        padding: 5
    },
    Details: {
        margin: 5,
        padding: 5
    },
    icon: {
        color: "#1a298a",
        fontSize: 25

    },
    DetailsView: {
        flexDirection: "row",
        padding: 5
    },
    modelButtonView: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 25,

    }

})

export default Profile