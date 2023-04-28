import * as React from 'react';
import { StyleSheet, View,  } from 'react-native';
import { Box, Heading, Image, Text, Center, HStack, Stack, NativeBaseProvider, ScrollView, Spacer } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

const MapScreen = () => {
    return (
        <View style={styles.VistaPrincipal}>
            <Text> Map screen </Text>

        </View>

    );
}
export default () => {
    return (
        <NativeBaseProvider>
            <MapScreen />
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({

    VistaPrincipal: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
});