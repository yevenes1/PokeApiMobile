import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, TextInput, View, Text } from 'react-native';
import db from '../../../../firebase';
import { doc, getDoc } from "firebase/firestore";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const searchUser = async () => {
        // const docRef = doc(db, "users", "user-id"); // reemplaza "user-id" con el ID del usuario que estás buscando

        // const docSnap = await getDoc(docRef);

        // if (docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());
        // } else {
        //     console.log("No such document!");
        // }
        navigation.navigate('HomeNavigator');
    };

    const navigateToSignUp = () => {
        navigation.navigate('SignUp');
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
            <Button title="Sign In" onPress={() => searchUser()} />
            <Text>Not an user? Sign Up!</Text>
            <Button title="Sign Up" onPress={() => navigateToSignUp()} />
        </View>
        // <div>
        //     <h1>Sign In</h1>
        //     <form onSubmit={handleSubmit}>
        //         <Text>
        //             Email:
        //             <input type="email" value={email} onChange={handleEmailChange} />
        //         </Text>
        //         <br />
        //         <Text>
        //             Password:
        //             <input type="password" value={password} onChange={handlePasswordChange} />
        //         </Text>
        //         <br />
        //         <button type="submit">Sign In</button>
        //     </form>
        // </div>
    );
};

export default SignIn;