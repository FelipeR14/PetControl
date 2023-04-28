import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Pressable, NativeBaseProvider, Avatar } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

const MenuMasc = (navigation) => {
    return (
        <View style={styles.VistaPrincipal}>
            <View style={{paddingLeft:10}}>
                    <Ionicons name="arrow-back-outline" color="#323232" size='40px' onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.divDatos}>
                <Avatar style={styles.avatar} source={require('../../../img/Golfo.jpg')} > </Avatar>
                <Text style={styles.datoprin}>Golfo</Text>
            </View>
            <View style={styles.divOps}>
                <Pressable style={styles.divCard}>
                    <Ionicons name="paw-outline" color="#323232" size='42px' /> 
                    <Text style={styles.nomOp}>Baño</Text>
                </Pressable>
                <Pressable style={styles.divCard}>
                    <Ionicons name="medkit-outline" color="#323232" size='42px' /> 
                    <Text style={styles.nomOp}>Revisión</Text>
                </Pressable>
                <Pressable style={styles.divCard}>
                    <Ionicons name="folder-outline" color="#323232" size='42px' /> 
                    <Text style={styles.nomOp}>Cartilla</Text>
                </Pressable>
                <Pressable style={styles.divCard}>
                    <Ionicons name="document-text-outline" color="#323232" size='42px' />  
                    <Text style={styles.nomOp}>Receta</Text>
                </Pressable>
            </View>
            
        </View>
    );
}
export default () => {
    return (
        <NativeBaseProvider>
            <MenuMasc />
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    VistaPrincipal: {
        height: '100%', width: '100%', backgroundColor: 'white',flexDirection:'column'
    },
    divDatos: { flexDirection:'column',alignItems:'center'}
    ,
    avatar: {
        width: '90px',height: '90px',
    },
    datoprin: {
        fontSize: '25px', fontWeight: 'bold', color: '#323232', padding:5
    },
    divOps: { 
        width:'100%',height:'auto',padding:20, flexDirection:'row', justifyContent:'space-around',display:'flex',flexWrap:'wrap'
    },
    divCard:{ backgroundColor:'#F6F6F6',width:'110px',height:'auto', borderRadius:'10px',alignItems:'center',flexDirection:'column',marginBottom:20,
        paddingLeft:20,paddingRight:20,paddingBottom:10,paddingTop:5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,   
    },
    nomOp: {
        fontSize: '20px', fontWeight: '600', color: '#323232',paddingTop:5
    }
});

