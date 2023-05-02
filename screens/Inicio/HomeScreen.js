import React, { useState } from 'react';
import { StyleSheet, View,Modal } from 'react-native';

import { Box, FormControl,Input, Image, Text, Center, Pressable, Spacer, Button } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        
        <View style={styles.VistaPrincipal}>
            <View style={styles.Encabe}>
                <View>
                    <Text style={styles.textSaludo} > HOLA, </Text>
                </View>
                <View>
                    <Text style={styles.textName} > Felipe Rios </Text>
                </View>
            </View>

            <View style={styles.Mascotas}>
                <View style={styles.HeadingMasc}>
                    <View style={styles.Titulo}>
                        <Text style={styles.textSeccion}> Tus mascotas</Text>
                    </View>
                    <Box style={styles.IconoPlus}>
                        <Ionicons name="add-circle" color="#1AB28E" size='25px' onPress={() => setModalVisible(true)} />
                    </Box>
                    
                </View>
                <Spacer height={1} />
                <View style={styles.fotos}>
                    <Pressable onPress={() => navigation.navigate('Menú')}>
                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="2" _web={{ shadow: 5, borderWidth: 0 }}
                        _light={{ backgroundColor: "gray.50" }}>
                        <Box>
                            <Center>
                                <Image source={require('../../img/Golfo.jpg')} width={110} height={100} alt="Mascota 1"/>
                            </Center>
                            <Center bg="#1AB28E" _text={{ color: "warmGray.50", fontWeight: "700", fontSize: "s" }}
                                position="center" bottom="0" px="3" py="1.5">
                                Golfo
                            </Center>
                        </Box>
                    </Box>
                    </Pressable>

                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="2" _web={{ shadow: 5, borderWidth: 0 }}
                        _light={{ backgroundColor: "gray.50" }}>
                        <Box>
                            <Center>
                                <Image source={require('../../img/donita.jpeg')} width={110} height={100} alt="Mascota 1" />
                            </Center>
                            <Center bg="#1AB28E" _text={{ color: "warmGray.50", fontWeight: "700", fontSize: "s" }}
                                position="center" bottom="0" px="3" py="1.5">
                                Donita
                            </Center>
                        </Box>
                    </Box>
                </View>
            </View>

            <View style={styles.Recetas}>
                <View style={styles.Titulo}>
                    <Text style={styles.textSeccion}> Recetas activas </Text>
                </View>
                <Spacer height={1} />
                <View style={styles.cardsrecetas}>
                    <Pressable style={styles.recetacard} >
                        <View style={{backgroundColor:'#1AB28E',width:'5px',height:'auto',paddingTop:2,paddingBottom:2,borderRadius:'10px'}}></View>
                        <Ionicons name="document-text" color="#1AB28E" size='32px' /> 
                        <View style={{ flexDirection: 'column',width:'auto',height:'auto'}}>
                            <Text style={{ fontWeight:'bold',fontSize:'12px', }}>Receta de Golfo</Text>
                            <Text style={{ color:'#6E6F6F',fontSize:'10px', }}>5 de Feb del 2023</Text>
                        </View>
                        <View style={{ justifyContent:'center'}}>
                            <Ionicons name="arrow-forward" color="#1AB28E" size='30px' /> 
                        </View>                       
                    </Pressable>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.tituloModal}>Agregando datos</Text>
                        <Image style={styles.fotoperfil} source={require('../../img/img.jpg')} />
                        <FormControl mb="2" mt="5">
                            <Text style={{ fontSize: '10px', fontWeight: '500' }}>Nombre</Text>
                            <Input variant="underlined"  w={'90%'}/>
                        </FormControl>
                        <FormControl mb="2">
                            <Text style={{ fontSize: '10px', fontWeight: '500' }}>Especie</Text>
                            <Input variant="underlined"  w={'90%'}/>
                        </FormControl>
                        <FormControl mb="2">
                            <Text style={{fontSize:'10px',fontWeight:'500'}}>Sexo</Text>
                            <Input variant="underlined" w={'90%'}/>
                        </FormControl>
                        <FormControl mb="2">
                            <Text style={{fontSize:'10px',fontWeight:'500'}}>Raza</Text>
                            <Input variant="underlined"  w={'90%'}/>
                        </FormControl>
                        <FormControl mb="5">
                            <Text style={{fontSize:'10px',fontWeight:'500'}}>Peso</Text>
                            <Input variant="underlined"  w={'90%'}/>
                        </FormControl>
                        <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-around' }}>
                            <Button style={styles.btnGuardar} _text={{ color: "white" }} onPress={() => setModalVisible(!modalVisible)}> Guardar  </Button>
                            <Button style={styles.btnCancelar} _text={{ color: "#1AB28E" }} onPress={() => setModalVisible(!modalVisible)}> Cancelar  </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

    );

}

export default HomeScreen;

const styles = StyleSheet.create({
    VistaPrincipal: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    Encabe: {
        flexDirection: 'column',
        padding: 10,
    },
    textSaludo: {
        textAlign: 'left',
        fontSize: '20px',
        color: '#111',
    },
    textName: {
        textAlign: 'left',
        color: '#111',
        fontSize: '30px',
        fontWeight: 'bold',
    },
    Mascotas: {
        padding: 10,
    },
    HeadingMasc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textSeccion: {
        textAlign: 'left',
        color: '#1AB28E',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    fotos: {
        flexDirection: 'row',
        gap: 20,
        padding: 10,
        shadow: 5, 
        borderWidth: 0 
    },
    Recetas:{
        padding: 10,
    },
    cardsrecetas:{
        padding:10,
        flexDirection:'row',
        gap:15,
    },
    recetacard:{
        flexDirection: 'row',
        paddingLeft:0,paddingBottom:10,paddingRight:10,paddingTop:10,
        gap:4,
        display:'flex',
        backgroundColor:'#F6F6F6',
        width:'auto',
        height:'auto',
        maxHeight:'90px',
        borderRadius:'10px',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,  
    },centeredView: { 
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
        textAlign: 'center',
        fontWeight: '500',
        color: '#1AB28E',

    },
    fotoperfil: {
        width: '110px', height: '110px', borderRadius: 5

    }
    
});





