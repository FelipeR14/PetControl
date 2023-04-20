import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Box, Heading, Image, Text, Center, HStack, Stack, NativeBaseProvider, ScrollView, Spacer, Button, VStack } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
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
                    <View style={styles.IconoPlus}>
                        <Ionicons name="add-circle" color="#1AB28E" size='25px' />
                    </View>
                </View>
                <Spacer height={1} />
                <View style={styles.fotos}>
                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _web={{ shadow: 2, borderWidth: 0 }}
                        _light={{ backgroundColor: "gray.50" }}>
                        <Box>
                            <Center>
                                <Image source={require('../../img/biza.jpg')} width={110} height={100} alt="Mascota 1" />
                            </Center>
                            <Center bg="#1AB28E" _text={{ color: "warmGray.50", fontWeight: "700", fontSize: "s" }}
                                position="center" bottom="0" px="3" py="1.5">
                                Golfo
                            </Center>
                        </Box>
                    </Box>

                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _web={{ shadow: 2, borderWidth: 0 }}
                        _light={{ backgroundColor: "gray.50" }}>
                        <Box>
                            <Center>
                                <Image source={require('../../img/changuito.jpg')} width={110} height={100} alt="Mascota 1" />
                            </Center>
                            <Center bg="#1AB28E" _text={{ color: "warmGray.50", fontWeight: "700", fontSize: "s" }}
                                position="center" bottom="0" px="3" py="1.5">
                                Changuito
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
                    <View style={styles.recetacard}>
                        <Ionicons name="document" color="#1AB28E" size='40px' /> 
                        <View style={{ flexDirection: 'column'}}>
                            <Text style={{ fontWeight:'bold',fontSize:'15px', }}>Receta de Golfo</Text>
                            <Text style={{ color:'#6E6F6F',fontSize:'13px', }}>5 de Feb del 2023</Text>
                        </View>
                        <View style={{ justifyContent:'center'}}>
                            <Ionicons name="arrow-forward" color="#1AB28E" size='30px' /> 
                        </View>


                    </View>
                </View>
            </View>


        </View>
    );

}

export default () => {
    return (
        <NativeBaseProvider>
            <HomeScreen />
        </NativeBaseProvider>
    );
};

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
    },
    card: {
        width: '100px',
        height: '100px',
    },
    Recetas:{
        padding: 10,
    },
    cardsrecetas:{
        padding:10,
    },
    recetacard:{
        flexDirection: 'row',
        padding: 10,
        gap:7,
        backgroundColor:'#E9EDEE',
        width:'230px',
        height:'60px',
        borderRadius:'10%'
    }
    
    
    


});


