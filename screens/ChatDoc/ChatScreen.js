import * as React from 'react';
import { Box, Heading, Image, Text,View, Center, HStack, Stack, NativeBaseProvider, ScrollView,Spacer } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatScreen = () => {
    return <View>
        <Text> Chat Screen! </Text>
    </View>
        
    
}
export default () => {
    return (
        <NativeBaseProvider>
            <ChatScreen />
        </NativeBaseProvider>
    );
};