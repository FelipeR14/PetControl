import React, { useState } from 'react';
import { StyleSheet, View, Switch, Modal } from 'react-native';
import { Image, Text, NativeBaseProvider, ScrollView, Avatar, Button, FormControl, Input } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Table, Row } from 'react-native-table-component';


const Cartilla = ({navigation}) => {

    const [modalEditM, setModalEditM] = useState(false);

    const [namem, onChangeNamem] = React.useState('Golfo');
    const [especie, onChangeEspecie] = React.useState('Perro');
    const [sex, onChangeSex] = React.useState('Macho');
    const [raza, onChangeRaza] = React.useState('Schnauzer');
    const [peso, onChangePeso] = React.useState('12.5kg');

    const tableHead = ['Nombre', 'Apellido', 'Edad'];
    const tableData = [['Juan', 'Pérez', '25'],
    ['María', 'García', '30'],
    ['Pedro', 'González', '28'],
    ];

    return (
        <View style={styles.VistaPrincipal}>
            <View style={{ paddingLeft: 10, paddingTop: 10, justifyContent: 'flex-start' }}>
                <Ionicons name="arrow-back-outline" color="#1AB28E" size='40px' onPress={() => navigation.navigate('Menú')}/>
            </View>
            <View style={styles.divDatos}>
                <View style={styles.divcard}>
                    <View style={{ alignItems: 'flex-end' }} > <Ionicons name="create-outline" color="#1AB28E" size='20px' onPress={() => setModalEditM(true)} /> </View>
                    <View style={{ alignItems: 'center', padding: 5 }}>
                        <Avatar style={styles.avatar} source={require('../../../img/Golfo.jpg')} > </Avatar>
                        <Text style={styles.tituloM}> {namem}</Text>
                        <Text style={styles.datosMasc}>Especie: {especie}</Text>
                        <Text style={styles.datosMasc}>Sexo: {sex}</Text>
                        <Text style={styles.datosMasc}>Raza {raza}</Text>
                        <Text style={styles.datosMasc}>Peso {peso}</Text>
                    </View>

                </View>
            </View>
            <View style={styles.divBtns}>
                <Button style={styles.btnV} _text={{ color: "white" }} onPress={() => mostrarVac()}> Vacunación  </Button>
                <Button style={styles.btnP} _text={{ color: "#1AB28E" }} onPress={() => mostrarDesp()}> Desparacitación  </Button>
            </View>
            <View style={styles.divTabla}>
                <View style={styles.table}>
                    <View style={styles.row}>
                        <Text style={styles.header}>Fecha</Text>
                        <Text style={styles.header}>Vacuna</Text>
                        <Text style={styles.header}>Lote</Text>
                        <Text style={styles.header}>Sig.</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.cell}>07/02/22</Text>
                        <Text style={styles.cell}>Parvovirus</Text>
                        <Text style={styles.cell}>V13105 FEB</Text>
                        <Text style={styles.cell}>07/07/22</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.cell}>07/07/22</Text>
                        <Text style={styles.cell}>Moquillo</Text>
                        <Text style={styles.cell}>V14608 FEB</Text>
                        <Text style={styles.cell}>07/12/22</Text>
                    </View>
                </View>

            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalEditM}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.tituloModal}>Editando datos</Text>
                        <Image style={styles.fotoperfil} source={require('../../../img/Golfo.jpg')} />
                        <FormControl mb="2" mt="5">
                            <Text style={{ fontSize: '10px', fontWeight: '500' }}>Nombre</Text>
                            <Input variant="underlined" w={'90%'} value={namem} />
                        </FormControl>
                        <FormControl mb="2">
                            <Text style={{ fontSize: '10px', fontWeight: '500' }}>Especie</Text>
                            <Input variant="underlined" w={'90%'} value={especie} />
                        </FormControl>
                        <FormControl mb="2">
                            <Text style={{ fontSize: '10px', fontWeight: '500' }}>Sexo</Text>
                            <Input variant="underlined" w={'90%'} value={sex} />
                        </FormControl>
                        <FormControl mb="2">
                            <Text style={{ fontSize: '10px', fontWeight: '500' }}>Raza</Text>
                            <Input variant="underlined" w={'90%'} value={raza} />
                        </FormControl>
                        <FormControl mb="5">
                            <Text style={{ fontSize: '10px', fontWeight: '500' }}>Peso</Text>
                            <Input variant="underlined" w={'90%'} value={peso} />
                        </FormControl>
                        <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-around' }}>
                            <Button style={styles.btnGuardar} _text={{ color: "white" }} onPress={() => setModalEditM(!modalEditM)}> Guardar  </Button>
                            <Button style={styles.btnCancelar} _text={{ color: "#1AB28E" }} onPress={() => setModalEditM(!modalEditM)}> Cancelar  </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Cartilla;

const styles = StyleSheet.create({
    VistaPrincipal: {
        height: '100%', width: '100%', backgroundColor: 'white', flexDirection: 'column',
    },
    divDatos: {
        height: 'auto', width: 'auto', paddingLeft: 10, paddingBottom: 5, alignItems: 'center',
    },
    divcard: {
        backgroundColor: '#F6F6F6', width: 'auto', height: 'auto', borderRadius: '10px', flexDirection: 'column', paddingLeft: 10, paddingRight: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    avatar: {
        width: '60px', height: '60px',
    },
    divBtns: {
        width: '100%', height: 'auto', flexDirection: 'row', justifyContent: 'space-around', padding: 10,
    },
    divTabla: {
        width: '100%', height: 'auto', padding: 10,
    },
    centeredView: {
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
        textAlign: 'center'
    },
    btnCancelar: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: '#1AB28E',
        borderRadius: 5,
        height: '30px',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    tituloM: {
        marginTop: 5,
        textAlign: 'center',
        fontWeight: '700',
        color: '#1AB28E',
        fontSize: '15px'
    },
    tituloModal: {
        marginTop: 10, marginBottom: 10,
        textAlign: 'center',
        fontWeight: '500',
        color: '#1AB28E',
    },
    datosMasc: {
        fontSize: '12px', fontWeight: '500',
    },
    fotoperfil: {
        width: '110px', height: '110px', borderRadius: 5

    },
    btnV: {
        backgroundColor: "#1AB28E",
        borderRadius: 5,
        height: '30px', width: '40%',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnP: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: '#1AB28E',
        borderRadius: 5,
        height: '30px', width: '40%',
        fontWeight: 'bold',
        textAlign: 'center'
    },table: {
        borderWidth: 1,
        borderColor: '#E2E2E2',
        marginVertical: 10,
        textAlign:'center',
      },
      row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#E2E2E2',
      },
      header: {
        fontWeight: 'bold',
        flex: 1,
        padding: 10,
        borderRightWidth: 1,
        borderColor: '#E2E2E2',
        backgroundColor:'#1AB28E',
        color:'white',
        fontSize:'13px'
      },
      cell: {
        flex: 1,
        padding: 10,
        borderRightWidth: 1,
        borderColor: '#E2E2E2',
        fontSize:'12px'
        
      },
})