import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Heading, Image, Text,View, Center, HStack, Stack, NativeBaseProvider, ScrollView,Spacer, Button} from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = (navigation) => {
    return <View>
        <Text style={styles.text}> Home Screen! </Text>
        <Button
        title="Go to config"
        onPress={() => navigation.navigate('configName')}
      />
    </View>
        
    
}
export default () => {
    return (
        <NativeBaseProvider>
            <HomeScreen />
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    text: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      color: 'Green',
      
    },
});


