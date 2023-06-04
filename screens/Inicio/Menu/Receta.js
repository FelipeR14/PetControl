import React, { useState } from 'react';
import { StyleSheet, View,Modal } from 'react-native';
import {Text, NativeBaseProvider, ScrollView, Button,AlertDialog } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../configfb";
import moment from 'moment';
import { Linking } from 'react-native';
import "firebase/firestore";
import {
  getFirestore,updateDoc, addDoc,
  doc,
  setDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const Receta = ({navigation}) => {
    const route = useRoute();
    const { mascota } = route.params;
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef(null);
    
    const openpdf = () => {
        Linking.openURL('https://drive.google.com/file/d/1wYktiPdDiLRxrd4khkYaTfajkOsrRhP-/view?usp=sharing');
    };

    const currentDate = moment().format('DD-MM-YYYY');
    const handleAddReceta = async () => {
        
        const RecetaData = {
            recetanom: 'Receta de ' + mascota.nombremasc,
            fecha: currentDate,
        } 

        const refRecetas = doc(db,'mascotas',mascota.id);

        await addDoc(collection(refRecetas, 'recetas'),RecetaData);
        console.log("Receta creada para: " + mascota.nombremasc);
        setIsOpen(true)
    }



    return ( 
        <View style={styles.VistaPrincipal}>
            <View style={styles.divBtn}>
                <Ionicons name="arrow-back-outline" color="#1AB28E" size='40px' onPress={() => navigation.navigate('Menú', { mascota: mascota })} key={mascota.id}/>
                <Ionicons name="add-circle" color="#1AB28E" size='30px' onPress={handleAddReceta} />
            </View>
            <View style={styles.divCards}>
                <View style={styles.cardbaño}>
                    <View style={{flexDirection:'row',gap:5,}}>
                        <View style={styles.lineaVerde}>
                        </View>
                        <View style={{flexDirection:'column',}}>
                            <View style={{flexDirection:'column',justifyContent:'flex-start',paddingRight:100}}> 
                                <Text style={{fontWeight:'bold',fontSize:'17px'}}> Receta de Golfo </Text>
                                <Text style={{fontSize:'13px',fontWeight:'500'}}> 05/02/23 </Text>
                            </View> 
                            <View style={{flexDirection:'row',justifyContent:'flex-end',paddingRight:10,paddingTop:5,gap:5}}> 
                                <Button style={styles.btnGuardar} _text={{ color: "white",fontSize:'13px' }} onPress={openpdf}> Revisar  </Button>
                                <Button style={styles.btnCancelar} _text={{ color: "#1AB28E",fontSize:'13px' }} onPress={() => EliminarRec()}> Eliminar  </Button>                        
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                    <AlertDialog.Header>Receta añadidad</AlertDialog.Header>
                    <AlertDialog.Body>
                        La receta se guardó en la bd.
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                        <Button colorScheme="info" onPress={() => setIsOpen(false)}>
                            De acuerdo
                        </Button>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        </View>
    );
}
export default Receta;

const styles = StyleSheet.create({
    VistaPrincipal: {
        height: '100%', width: '100%', backgroundColor: 'white',flexDirection:'column'
    },
    divBtn: {
        flexDirection:'row', width:'100%',height:'auto',paddingLeft:10,paddingTop:10,paddingRight:10,justifyContent:'space-between',alignItems:'center'
    },
    divCards: {
        flexDirection:'row',paddingLeft:30,paddingRight:30,paddingTop:10, width:'100%',height:'auto',gap:40,display:'flex',flexWrap:'wrap'
    },
    cardbaño: {
        width:'auto',height:'auto',flexDirection:'row', backgroundColor:'#F6F6F6', borderRadius:'10px', justifyContent:'space-between',gap:50,
        paddingBottom:10,paddingTop:10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,  
    },
    lineaVerde: {
        backgroundColor:'#1AB28E',width:'5px',height:'auto',borderRadius:'10px'
    },
    btnGuardar: {
        backgroundColor: "#1AB28E",
        borderRadius: 5,
        borderColor: '#1AB28E',
        borderWidth: 2,
        height: '20px',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignContent: 'center'
    },
    btnCancelar: {
        backgroundColor: "#F6F6F6",
        borderWidth: 2,
        borderColor: '#1AB28E',
        borderRadius: 5,
        height: '20px',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignContent: 'center'
    },
    tituloModal: {
        marginTop: 10,
        marginBottom: 10,
        fontSize:'20px',
        textAlign: 'center',
        fontWeight: '500',
        color: '#1AB28E',

    },
});
