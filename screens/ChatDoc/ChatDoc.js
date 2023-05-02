import * as React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Text, NativeBaseProvider, ScrollView, Spacer, Avatar } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';


const ChatDoc = ({navigation}) => {
    
    const [busqueda, onChangeBusqueda] = React.useState('');
    return (
        <View style={styles.VistaPrincipal}>
            <View style={styles.divEncabe}>
                <Ionicons name="arrow-back-outline" color="#1AB28E" size='40px' onPress={() => navigation.navigate('ChatScreen')} />
                <Avatar style={styles.avatar} source={require('../../img/vet1.jpeg')}> </Avatar>
                <Text style={styles.textName}>Dra. Dulce Castillo </Text>
            </View> 
            <Spacer height={2} />
            <View style={styles.divChat}>
                <View style={styles.divmsj1}>
                    <View style={styles.contmsj1}>
                        <Text style={styles.textmsj1}> Buenos dias, ya está listo su perrito Golfo. </Text>
                    </View>
                    <Text style={styles.hr}> 10:00 am </Text>
                </View>
                <Spacer height={1} />
                <View style={styles.divmsj2}>
                    <View style={styles.contmsj2}>
                        <Text style={styles.textmsj2}> Perfecto, en 10min estoy ahí. </Text>
                    </View>
                    <Text style={styles.hr}> 10:02 am </Text>
                </View>
            </View>
            <View style={styles.divinput}>
                <View style={styles.elementosinput}>
                    <TextInput style={styles.input} onChangeText={onChangeBusqueda} value={busqueda} placeholder="Mensaje" />
                    <Ionicons name="send-sharp" color="#1AB28E" size='20px' />
                </View>
            </View>
            
        </View>

    );
}
export default ChatDoc;

const styles = StyleSheet.create({
    VistaPrincipal: {
        height: '100%', width: '100%', backgroundColor: 'white',flexDirection:'column'
    },
    divEncabe: {
        width:'100%', height:'60px',padding:10,backgroundColor: '#F6F6F6',flexDirection:'row',gap:10,
    }, 
    avatar: { width: '40px',height: '40px',
    },
    textName: { fontWeight: '700',fontSize: '15px'
    },
    divChat: { flexDirection:'column',width:'100%'

    },
    divmsj1:{
        alignItems:'flex-start',padding:10
    },
    divmsj2:{
        alignItems:'flex-end',padding:10
    },
    contmsj1:{
        backgroundColor: '#F6F6F6', width:'60%',height:'auto',borderRadius:'5px',
    },
    contmsj2:{
        backgroundColor: '#1AB28E',width:'60%',height:'auto',borderRadius:'5px'
    },
    textmsj1: {
        padding:4,color:'black',fontWeight:'400',textAlign:'left'
    },
    textmsj2: {
        padding:4,color:'white',fontWeight:'400',textAlign:'left'
    },
    hr:{
        fontSize:'10px',fontWeight:'400',paddingTop:4
    },
    divinput:{
        width: '100%',
        height: '30px',
        alignItems:'center',
        marginBottom:'10px'
    },
    elementosinput:{
        backgroundColor:'#F6F6F6',
        width:'95%',
        borderRadius:'10px',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5
    },
    input: {
        height: 'auto',
        width: '90%',
        color: '#6E6F6F',
        marginLeft: 5
    },


})