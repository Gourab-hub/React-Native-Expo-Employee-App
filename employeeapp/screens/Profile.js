import react from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Profile = () => {
    return (
        <View style={style.fullscreen}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={style.background}
            />
            <View style={style.ProfileVew}>
            <Image
                style={style.Profileimage}
                source={{uri:"https://media.istockphoto.com/photos/happy-student-girl-at-high-school-picture-id1278976856?b=1&k=20&m=1278976856&s=170667a&w=0&h=XmwcmWnFqSRvzrUWdhGY7cAX9Ip9JFDPzeKIm0T4VFo="}}
            />
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
    Profileimage:{
        height:140,
        width:140,
        borderRadius:70,
       
    },
    ProfileVew:{
        alignItems:"center",
        marginTop:-70
    }

})

export default Profile