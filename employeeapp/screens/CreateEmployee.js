import react, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

//Image Picker
import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions'



const CreateEmployy = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Salary, setSalary] = useState("")
    const [Picture, setPicture] = useState("")
    const [model, setModel] = useState(false)
    const [image, setImage] = useState(null);



    const pickImageFromGallery = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
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
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
        }
    }




        return (
            <View style={style.fullscreen}>
                <TextInput
                    style={style.textinput}
                    label="Name"
                    value={Name}
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
                    value={Email}
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
                    value={Phone}
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
                    value={Salary}
                    mode="outlined"
                    // placeholder='Enter Your Name'
                    onChangeText={e => setSalary(e)}
                    selectionColor='#a89fd4'
                    outlineColor="#1a298a"
                    activeOutlineColor='#150c3d'
                />

                <Button style={style.button} icon="upload" mode="contained" onPress={() => setModel(true)}>
                    Upload Pic
                </Button>
                <Button style={style.button} icon="content-save" mode="contained" onPress={() => console.log("pressed")}>
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