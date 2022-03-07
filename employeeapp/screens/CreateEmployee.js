import react, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';



const CreateEmployy = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Salary, setSalary] = useState("")
    const [Picture, setPicture] = useState("")
    const [Model, setModel] = useState(false)





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
                outlineColor="#1c1345"
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
                outlineColor="#1c1345"
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
                outlineColor="#1c1345"
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
                outlineColor="#1c1345"
                activeOutlineColor='#150c3d'
            />
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

})
export default CreateEmployy