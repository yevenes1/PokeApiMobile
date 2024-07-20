import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button } from 'react-native';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const signUn = () => {
        console.log('SignIn Function');
    }

    const navigateToSignIn = () => {
        navigation.goBack();
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>Email:</Text>
            <TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="Email"
            />
            <Text>Password:</Text>
            <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                secureTextEntry={true}
            />
            <Button title="Sign Up!" onPress={() => signUn()} />
            <Button title="Go Back" onPress={() => navigateToSignIn()} />
        </View>
    );
};

export default SignUp;
