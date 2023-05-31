import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, FormControl, Button, Input, AlertDialog } from "native-base";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../configfb';
import {getDatabase, ref,set} from 'firebase/database';

const Register = ({ navigation }) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef(null);

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [passw, setPassw] = React.useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getDatabase(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, passw)
            .then((userCredential) => {
                setIsOpen(true)
                console.log('Cuenta creada')
                const user = userCredential.user;
                console.log(user)
                    //se agrega a una bd
                    set(ref(db, 'users/' + user.uid), {
                        img: "https://firebasestorage.googleapis.com/v0/b/petcontrol-866d0.appspot.com/o/userpic.jpg?alt=media&token=a219975f-db64-416a-aecd-cd93f7f387a6",
                        name: username,
                        email: email,
                        pass: passw,
                        tel: "",
                        direccion: ""
                    }).then(() => {
                        console.log("Datos cargados");
                    }).catch((error) => {
                        console.log("Error:" + error);
                        alert("Error:" + error);
                    });                
            })
            .catch((error) => {
                console.log("Error:" + error);
                alert("Error:" + error);
        });
    }

    const cerrarAlertDialog = () => {
        setIsOpen(false);
        navigation.navigate('App');
    };




    return (
        <View style={styles.VistaPrincipal}>
            <View style={{ width: '100%', height: 'auto', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10 }}>
                <View style={{ paddingTop: 20 }}>
                    <Text style={{ fontSize: '30px', fontWeight: '600', color: '#1AB28E' }}> Register </Text>
                </View>
                <View style={{ backgroundColor: '#1AB28E', width: '10%', height: '100%', borderBottomStartRadius: 100 }}>
                </View>
            </View>
            <View style={{ flexDirection: 'column', paddingLeft: 20, paddingTop: 60, width: '90%' }}>
                <FormControl mb="4" isRequired>
                    <Text style={{ fontSize: '10px', fontWeight: '500', color: '#A5A5A5' }}>Username</Text>
                    <Input variant="underlined" style={styles.input} onChangeText={(text) => setUsername(text)} placeholder="Your username" />
                </FormControl>
                <FormControl mb="4" isRequired>
                    <Text style={{ fontSize: '10px', fontWeight: '500', color: '#A5A5A5' }}>Email</Text>
                    <Input variant="underlined" style={styles.input} onChangeText={(text) => setEmail(text)} placeholder="Your email" />
                </FormControl>
                <FormControl mb="4" isRequired>
                    <Text style={{ fontSize: '10px', fontWeight: '500', color: '#A5A5A5' }}>Password</Text>
                    <Input type='password' variant="underlined" style={styles.input} onChangeText={(text) => setPassw(text)} placeholder="Your password" />
                </FormControl>
            </View>
            <View style={styles.divBtns}>
                <Button style={styles.btnLog} _text={{ color: "white", fontSize: '15px', fontWeight: 500 }} onPress={handleCreateAccount}> Save  </Button>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                    <Text style={{ color: '#1AB28E', fontWeight: 'bold' }}> or </Text>
                </View>
                <Button style={styles.btnReg} _text={{ color: "#1AB28E", fontSize: '15px', fontWeight: 500 }} onPress={() => navigation.navigate('Login')}> Login  </Button>
            </View>

            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                    <AlertDialog.Header>Registro finalizado</AlertDialog.Header>
                    <AlertDialog.Body>
                        Tus datos se han guardado en nuestro sistema de manera correcta. ¡Bienvenido!
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                        <Button colorScheme="info" onPress={cerrarAlertDialog}>
                            De acuerdo
                        </Button>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>


        </View>
    );

}

export default Register;

const styles = StyleSheet.create({

    VistaPrincipal: {
        height: '100%', width: '100%', backgroundColor: 'white', flexDirection: 'column'
    },
    divBtns: {
        flexDirection: 'column', alignItems: 'center', width: '100%', paddingTop: 40
    },
    btnLog: {
        backgroundColor: "#1AB28E",
        borderRadius: 5,
        height: '40px',
        width: '60%',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnReg: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: '#1AB28E',
        borderRadius: 5,
        height: '40px',
        width: '60%',
        fontWeight: 'bold',
        textAlign: 'center'
    },
})