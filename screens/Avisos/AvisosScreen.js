import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Box, Image, Text, Pressable, NativeBaseProvider, ScrollView, Spacer } from "native-base";
import { Linking } from 'react-native';

const AvisosScreen = () => {
    const openLink1 = () => {
        Linking.openURL('https://www.facebook.com');
      };
      const openLink2 = () => {
        Linking.openURL('https://www.twitter.com');
      };
    return (
        <View style={styles.VistaPrincipal}>
            <View style={styles.divAvisos}>
                <Pressable style={styles.avisocard} onPress={openLink2}>
                    <Box>
                        <Image source={require('../../img/logoTw.png')} width={'40px'} height={'40px'} />
                    </Box>
                    <Box style={{ flexDirection: 'column',width:'80%',height:'auto' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: '13px', }}>¿Qué debo hacer si mi perro sufre un episodio de epilepsia? </Text>
                        <Text style={{ color: '#6E6F6F', fontSize: '11px',paddingTop:4 }}>Dra Dulce Castillo</Text>
                    </Box>
                </Pressable>
                <Spacer height={4} />
                <Pressable style={styles.avisocard} onPress={openLink1}>
                    <Box>
                        <Image source={require('../../img/logoFb.png')} width={'40px'} height={'40px'} />
                    </Box>
                    <Box style={{ flexDirection: 'column',width:'80%',height:'auto'  }}>
                        <Text style={{ fontWeight: 'bold', fontSize: '13px', }}>5 consejos al momento de entrenar a tu perro. </Text>
                        <Text style={{ color: '#6E6F6F', fontSize: '11px',paddingTop:4 }}>Dra Dulce Castillo</Text>
                    </Box>
                </Pressable>
                <Spacer height={4} />
                <Pressable style={styles.avisocard} onPress={openLink1}>
                    <Box>
                        <Image source={require('../../img/logoFb.png')} width={'40px'} height={'40px'} />
                    </Box>
                    <Box style={{ flexDirection: 'column', width:'80%',height:'auto' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: '13px', }}>Nueva jornada de esterilización. </Text>
                        <Text style={{ color: '#6E6F6F', fontSize: '11px',paddingTop:4 }}>Gobierno del estado</Text>
                    </Box>
                </Pressable>
                <Spacer height={4} />

            </View>
        </View>


    );
}
export default () => {
    return (
        <NativeBaseProvider>
            <AvisosScreen />
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({

    VistaPrincipal: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    divAvisos: {
        paddingTop:30,
        flexDirection: 'column',
        alignItems:'center'
    },
    avisocard: {
        flexDirection: 'row',
        backgroundColor:'#F6F6F6',
        width:'80%',
        height:'auto',
        borderRadius:'10px',
        gap:10,
        padding:10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    }

});