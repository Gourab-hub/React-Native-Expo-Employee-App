import react, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Modal, Alert, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

//Image Picker
import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions'



const CreateEmployee = ({ navigation, route }) => {

    console.log("Create Employee",route)


    const getDetails = (type) => {
        if (route.params) {
            switch (type) {
                case "name":
                    return route.params.name
                case "phone":
                    return route.params.phone
                case "email":
                    return route.params.email
                case "salary":
                    return route.params.salary
                case "picture":
                    return route.params.picture
                case "position":
                    return route.params.position
            }
        }
        return ""
    }


    const [name, setName] = useState(getDetails("name"))
    const [email, setEmail] = useState(getDetails("email"))
    const [phone, setPhone] = useState(getDetails("phone"))
    const [salary, setSalary] = useState(getDetails("salary"))
    const [picture, setPicture] = useState(getDetails("picture"))
    const [position, setPosition] = useState(getDetails("position"))
    const [model, setModel] = useState(false)
    const [keyboardshow,setKeyboardShow]=useState(false)
    // const [image, setImage] = useState(null);



    const submitData = () => {
        fetch("https://employee-jsonn.vercel.app/send/", {
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

    const updateData=()=>{
        fetch("https://employee-jsonn.vercel.app/update/", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:route.params._id,
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
                Alert.alert(`${data.name} is updated successfuly`)
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
        <KeyboardAvoidingView behavior='position'  style={style.fullscreen} enabled={keyboardshow}>
        <View>
           
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
                    onFocus={()=>setKeyboardShow(true)}
                    activeOutlineColor='#150c3d'
                />
                <TextInput
                    style={style.textinput}
                    label="Position"
                    value={position}
                    mode="outlined"
                    // placeholder='Enter Your Name'
                    onChangeText={e => setPosition(e)}
                    onFocus={()=>setKeyboardShow(true)}
                    selectionColor='#a89fd4'
                    outlineColor="#1a298a"
                    activeOutlineColor='#150c3d'
                />

                <Button style={style.button} icon="upload" mode="contained" onPress={() => setModel(true)}>
                    Upload Pic
                </Button>
                {route.params ?
                    <Button style={style.button} icon="update" mode="contained" onPress={() => updateData()}>
                        Update
                    </Button>
                    :
                    <Button style={style.button} icon="content-save" mode="contained" onPress={() => submitData()}>
                        Save
                    </Button>}
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
        </KeyboardAvoidingView>
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
export default CreateEmployee