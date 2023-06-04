import React, { useEffect,useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { Box, FormControl, Input, Text, NativeBaseProvider, ScrollView, Spacer, Button } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../configfb";
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

const Baño = ({ navigation }) => {
    const route = useRoute();
    const { mascota } = route.params;

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const [modalbaño, setModalBaño] = useState(false);
    const [modaledit, setModalEdit] = useState(false);

    const [descrip, setDescrip] = React.useState('Baño y estética');
    const [fecha, setFecha] = React.useState('07/03/23');
    const [proxf, setProxf] = React.useState('07/04/23');

    const [baños, setBaños] = useState([]);
    useEffect(() => {

        const getBanios = async (id) => {
            const subCollectionRef = collection(
              db,"mascotas",id,"baños"
            );
        
            // Obtiene los documentos de la subcolección
            const querySnapshot = await getDocs(subCollectionRef);
        
            // Recorre los documentos obtenidos
            const bañosData = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                data.id = doc.id;
                bañosData.push(data);
            });
            setBaños(bañosData);
          };
        getBanios();

    }, []);

    const handleAddBaño = async () => {
        const BañoData = {
            descripcion: descrip,
            fecha: fecha,
            proxf: proxf,
        } 

        const refBaños = doc(db,'mascotas',mascota.id);

        await addDoc(collection(refBaños, 'baños'),BañoData);
        setModalBaño(false);
    }

    const handleUpBaño = async () => {

        const dataUp = {
            descripcion: nwdescrip,
            fecha: nwfecha,
            proxf: nwproxf,
        };

        const refBaños = doc(collection(db, "baños"));
        await updateDoc(refBaños, data);
        setModalEdit(false);
    }


    return (
        <View style={styles.VistaPrincipal}>
            <View style={styles.divBtn}>
                <Ionicons name="arrow-back-outline" color="#1AB28E" size='40px' onPress={() => navigation.navigate("Menú", {mascota: mascota})} key={mascota.id} />
                <Ionicons name="add-circle" color="#1AB28E" size='30px' onPress={() => setModalBaño(true)} />
            </View>
            <View style={styles.divCards}>
                {baños.map((baño) => (
                    <View style={styles.cardbaño} key={baño.id}>
                        <View style={{ flexDirection: 'row', gap: 5, }}>
                            <View style={styles.lineaVerde}>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: '17px' }}> {mascota.descripcion} </Text>
                                <Text style={{ fontSize: '13px', fontWeight: '500' }}> {mascota.fecha} </Text>
                                <Text style={{ fontSize: '10px', fontWeight: '500' }}> {mascota.proxf} </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', alignContent: 'center', paddingRight: 5, }}>
                            <Ionicons name="create-outline" size='25px' onPress={() => setModalEdit(true)} />
                            <Spacer height={1} />
                            <Ionicons name="close-circle" color="#B20A0A" size='25px' />
                        </View>
                    </View>
                ))}
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalbaño}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.tituloModal}>Agregando datos</Text>
                        <FormControl mb="2" mt="5">
                            <Text style={{ fontSize: '10px', fontWeight: '500' }}>Descripción </Text>
                            <Input variant="underlined" w={'90%'} onChangeText={(text) => setDescrip(text)}/>
                        </FormControl>
                        <FormControl mb="2">
                            <Text style={{ fontSize: '10px', fontWeight: '500' }}>Fecha</Text>
                            <Input variant="underlined" w={'90%'} onChangeText={(text) => setFecha(text)}/>
                        </FormControl>
                        <FormControl mb="5">
                            <Text style={{ fontSize: '10px', fontWeight: '500' }}>Próxima cita</Text>
                            <Input variant="underlined" w={'90%'} onChangeText={(text) => setProxf(text)}/>
                        </FormControl>
                        <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-around' }}>
                            <Button style={styles.btnGuardar} _text={{ color: "white" }} onPress={handleAddBaño}> Guardar  </Button>
                            <Button style={styles.btnCancelar} _text={{ color: "#1AB28E" }} onPress={() => setModalBaño(!modalbaño)}> Cancelar  </Button>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modaledit}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.tituloModal}>Editando datos</Text>
                        <FormControl mb="2" mt="5">
                            <Text style={{ fontSize: '10px', fontWeight: '500' }}>Descripción </Text>
                            <Input variant="underlined" w={'90%'} onChangeText={(text) => setDescrip(text)} />
                        </FormControl>
                        <FormControl mb="2">
                            <Text style={{ fontSize: '10px', fontWeight: '500' }}>Fecha</Text>
                            <Input variant="underlined" w={'90%'} onChangeText={(text) => setFecha(text)} />
                        </FormControl>
                        <FormControl mb="5">
                            <Text style={{ fontSize: '10px', fontWeight: '500' }}>Próxima cita</Text>
                            <Input variant="underlined" w={'90%'} onChangeText={(text) => setProxf(text)}/>
                        </FormControl>
                        <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-around' }}>
                            <Button style={styles.btnGuardar} _text={{ color: "white" }} onPress={() => setModalEdit(!modaledit)}> Guardar  </Button>
                            <Button style={styles.btnCancelar} _text={{ color: "#1AB28E" }} onPress={() => setModalEdit(!modaledit)}> Cancelar  </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
export default Baño;

const styles = StyleSheet.create({
    VistaPrincipal: {
        height: '100%', width: '100%', backgroundColor: 'white', flexDirection: 'column'
    },
    divBtn: {
        flexDirection: 'row', width: '100%', height: 'auto', paddingLeft: 10, paddingTop: 10, paddingRight: 10, justifyContent: 'space-between', alignItems: 'center'
    },
    divCards: {
        flexDirection: 'row', paddingLeft: 40, paddingRight: 40, paddingTop: 10, width: '100%', height: 'auto', gap: 40, display: 'flex', flexWrap: 'wrap'
    },
    cardbaño: {
        width: 'auto', height: 'auto', flexDirection: 'row', backgroundColor: '#F6F6F6', borderRadius: '10px', justifyContent: 'space-between', gap: 50,
        paddingBottom: 10, paddingTop: 10,
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
        backgroundColor: '#1AB28E', width: '5px', height: 'auto', borderRadius: '10px'
    },
    CirculoRed: {
        width: '20px', height: '20px', borderRadius: '20px', backgroundColor: 'red',
    }, centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingBottom: 15,
        paddingLeft: 40,
        paddingRight: 40,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    btnGuardar: {
        backgroundColor: "#1AB28E",
        borderRadius: 5,
        height: '30px',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignContent: 'center'
    },
    btnCancelar: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: '#1AB28E',
        borderRadius: 5,
        height: '30px',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignContent: 'center'
    },
    tituloModal: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: '20px',
        textAlign: 'center',
        fontWeight: '500',
        color: '#1AB28E',

    },
});
