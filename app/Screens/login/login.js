import React from "react";
import { SafeAreaView, View } from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';
import { loginStyle } from "./login.style";
export const LoginScreen = () => {
    return(
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
                <Card Type = 'elevated'>
                    <Card.Title title = "Connect" titleStyle= {loginStyle.cardTitle}></Card.Title>
                    <Card.Content>
                        <TextInput Type="flat" label="Email" style={loginStyle.TextInput} keyboardType="email-address"></TextInput>
                        <TextInput label="Password" style={loginStyle.TextInput} secureTextEntry={true }></TextInput>
                        <Button uppercase={false} style={loginStyle.CardButton}>Forgot email / password</Button>
                        <Button mode="contained" uppercase={false} style={loginStyle.CardButton}>Login</Button>
                        <Button mode="contained" uppercase={false} style={loginStyle.CardButton}>Sign Up</Button>
                    </Card.Content>       
                </Card>
            </View>
        </SafeAreaView>
    );
}