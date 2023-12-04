import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native'

const Login = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Image
                    style={styles.inputIcon}
                    source={{
                        uri: "https://png.icons8.com/male-user/ultraviolet/50/3498db"
                    }}
                />
                <TextInput
                    style={styles.inputs}
                    placeholder="Email Anda"
                    keyboardType="email-address"
                    underlineColorAndroid="transparent"
                />
            </View>

            <View style={styles.inputContainer}>
                <Image
                    style={styles.inputIcon}
                    source={{
                        uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db"
                    }}
                />
                <TextInput
                    style={styles.inputs}
                    placeholder="Password Anda"
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                />
            </View>
            <TouchableOpacity style={styles.submitButtonText} onPress={() => { navigation.navigate('PetaLokasiObjek') }}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'column', marginLeft:-110, marginTop:10 }}>
                <Text style={{fontSize:16, fontWeight:'bold'}}> Belum punya akun </Text>
                <TouchableOpacity>
                    <Text>Daftar brok</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFBB5C"
    },
    inputContainer: {
        borderBottomColor: "#F5FCFF",
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: "#FFFFFF",
        flex: 1
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: "center"
    },
    buttonContainer: {
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        width: 250,
        borderRadius: 30
    },


    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 60,
    },
    submitButtonText: {
        color: '#FFFFFF',
        backgroundColor: 'red',
        width: 250,
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        color: '#FFFFFF',
        alignItems: 'center'
    },
    navigateButton: {
        backgroundColor: '#99ffcc',
        marginTop: 10,
    },
    signUpText: {
        color: '#000000',
        // textDecorationLine:'underline',
        fontWeight: 'bold',
        alignItems: 'center',
        margin: 10,
    },
})