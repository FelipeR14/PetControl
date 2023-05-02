import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, NativeBaseProvider,FormControl,Button,Input,} from "native-base";

const Register = ({navigation}) => {
    const [user, onChangeUser] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [passw, onChangePassw] = React.useState('');

    return (
        <View style={styles.VistaPrincipal}>
            <View style={{width:'100%',height:'auto',flexDirection:'row',justifyContent:'space-between',paddingLeft:10}}>
                <View style={{paddingTop:20}}>
                    <Text style={{fontSize:'30px',fontWeight:'600',color:'#1AB28E'}}> Register </Text>
                </View>
                <View style={{backgroundColor:'#1AB28E',width:'10%',height:'100%',borderBottomStartRadius:100}}>                    
                </View>
            </View>
            <View style={{flexDirection:'column',paddingLeft:20,paddingTop:60,width:'90%'}}>
                <FormControl mb="4">
                    <Text style={{fontSize:'10px',fontWeight:'500',color:'#A5A5A5'}}>Username</Text>
                    <Input variant="underlined" style={styles.input} onChangeText={onChangeUser} value={user} placeholder="Your username" />
                </FormControl>
                <FormControl mb="4">
                    <Text style={{fontSize:'10px',fontWeight:'500',color:'#A5A5A5'}}>Email</Text>
                    <Input variant="underlined" style={styles.input} onChangeText={onChangeEmail} value={email} placeholder="Your email" />
                </FormControl>
                <FormControl mb="4">
                    <Text style={{fontSize:'10px',fontWeight:'500',color:'#A5A5A5'}}>Password</Text>
                    <Input variant="underlined" style={styles.input} onChangeText={onChangePassw} value={passw} placeholder="Your password" />
                </FormControl>
            </View>
            <View style={styles.divBtns}>
                <Button style={styles.btnLog} _text={{ color: "white",fontSize:'15px',fontWeight:500 }} onPress={() => navigation.navigate('App')}> Save  </Button>
                <View style={{flexDirection:'row',alignItems:'center',padding:5}}>
                    <Text style={{color:'#1AB28E',fontWeight:'bold'}}> or </Text>
                </View>
                <Button style={styles.btnReg} _text={{ color: "#1AB28E",fontSize:'15px',fontWeight:500  }} onPress={() => navigation.navigate('Login')}> Login  </Button>  
            </View>
            
        </View>
    );
}

export default Register;

const styles = StyleSheet.create({

    VistaPrincipal: { height: '100%', width: '100%', backgroundColor: 'white', flexDirection:'column'
    },
    divBtns: {
        flexDirection:'column',alignItems:'center',width:'100%',paddingTop:40
    }, 
    btnLog: {
        backgroundColor: "#1AB28E",
        borderRadius: 5,
        height: '40px',
        width:'60%',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnReg: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: '#1AB28E',
        borderRadius: 5,
        height: '40px',
        width:'60%',
        fontWeight: 'bold',
        textAlign: 'center'
    },
})