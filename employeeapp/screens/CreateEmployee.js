import react, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Modal, Alert,KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

//Image Picker
import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions'



const CreateEmployy = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [salary, setSalary] = useState("")
    const [picture, setPicture] = useState(null)
    const [position, setPosition] = useState("")
    const [model, setModel] = useState(false)
    // const [image, setImage] = useState(null);



    const submitData = () => {
        fetch("http://192.168.1.106:5000/send/", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                salary,
                picture,
                position
            })
        })
            .then(res => res.json())
            .then(data => {
                Alert.alert(`${data.name} is saved successfuly`)
                console.log("save data", data)
                navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("someting went wrong")
                console.log(err)
            })
    }




    const pickImageFromGallery = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        // console.log(result);
        if (!result.cancelled) {
            let newfile = {
                uri: result.uri,
                type: `test/${result.uri.split(".")[1]}`,
                name: `test.${result.uri.split(".")[1]}`
            }
            handelUpload(newfile);
            console.log("newfile", newfile);
        }
    }


    const pickImageFromCamera = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        // console.log(result);
        if (!result.cancelled) {
            let newfile = {
                uri: result.uri,
                type: `test/${result.uri.split(".")[1]}`,
                name: `test.${result.uri.split(".")[1]}`
            }
            handelUpload(newfile);
            console.log("newfile", newfile);
        }
    }


    // const handelUpload=(image)=>{
    //   const result = new FromData();
    //   data.append('file',image)
    //   data.append('upload_preset',employeeApp)
    //   data.append('cloud_name', "gourab")

    // }


    const handelUpload = (image) => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', "employeeApp")
        data.append('cloud_name', "gourab")
        const res = fetch("https://api.cloudinary.com/v1_1/gourab/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setPicture(data.url)
                setModel(false)
                console.log("url", data)
            })
            .catch(err => {
                console.log("error handelupload", err)
            })

    }




    return (
        <View style={style.fullscreen}>
            <KeyboardAvoidingView behavior='position'>
            <TextInput
                style={style.textinput}
                label="Name"
                value={name}
                mode="outlined"
                // placeholder='Enter Your Name'
                onChangeText={e => setName(e)}
                selectionColor='#a89fd4'
                outlineColor="#1a298a"
                activeOutlineColor='#150c3d'
            />
            <TextInput
                style={style.textinput}
                label="Email"
                value={email}
                mode="outlined"
                // placeholder='Enter Your Name'
                onChangeText={e => setEmail(e)}
                selectionColor='#a89fd4'
                outlineColor="#1a298a"
                activeOutlineColor='#150c3d'
            />
            <TextInput
                style={style.textinput}
                label="Phone"
                value={phone}
                mode="outlined"
                keyboardType='number-pad'
                // placeholder='Enter Your Name'
                onChangeText={e => setPhone(e)}
                selectionColor='#a89fd4'
                outlineColor="#1a298a"
                activeOutlineColor='#150c3d'
            />
            <TextInput
                style={style.textinput}
                label="Salary"
                value={salary}
                mode="outlined"
                // placeholder='Enter Your Name'
                onChangeText={e => setSalary(e)}
                selectionColor='#a89fd4'
                outlineColor="#1a298a"
                activeOutlineColor='#150c3d'
            />
            <TextInput
                style={style.textinput}
                label="Position"
                value={position}
                mode="outlined"
                // placeholder='Enter Your Name'
                onChangeText={e => setPosition(e)}
                selectionColor='#a89fd4'
                outlineColor="#1a298a"
                activeOutlineColor='#150c3d'
            />

            <Button style={style.button} icon="upload" mode="contained" onPress={() => setModel(true)}>
                Upload Pic
            </Button>
            <Button style={style.button} icon="content-save" mode="contained" onPress={() => submitData()}>
                Save
            </Button>

            <Modal
                animationType='slide'
                transparent={true}
                visible={model}
                //Back button work
                onRequestClose={() => setModel(false)}
            >
                <View style={style.modelPossition}>
                    <View style={style.modelButtonView}>
                        <Button style={style.button} icon="camera" mode="contained" onPress={pickImageFromCamera}>
                            {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
                            Camera
                        </Button>

                        <Button style={style.button} icon="folder" mode="contained" onPress={pickImageFromGallery} >
                            {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
                            Gallary
                        </Button>
                    </View>
                    <Button style={style.button} icon="cancel" mode="contained" onPress={() => setModel(false)}>
                        Cancel
                    </Button>
                </View>
            </Modal>

            </KeyboardAvoidingView>
        </View>
    )
}



const style = StyleSheet.create({
    fullscreen: {
        flex: 1,
    },
    textinput: {
        margin: 5,
        backgroundColor: '#fff',

    },
    button: {
        backgroundColor: "#1a298a",
        margin: 5
    },
    modelPossition: {
        position: "absolute",
        bottom: 2,
        width: "100%",
        backgroundColor: "#d4d4d4"

    },
    modelButtonView: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 5,

    }

})
export default CreateEmployy