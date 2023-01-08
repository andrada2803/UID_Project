import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Linking,
    TouchableOpacity,
    TextInput,
    Dimensions,
    StatusBar,
    Platform,
    KeyboardAvoidingView,
    ScrollView,
    useWindowDimensions,
} from 'react-native';
import BottomWave from '../../assets/Subtract.svg';
import AuthImage from '../../assets/AuthImage.svg';
import MailIcon from '../../assets/mail.svg';
import LockIcon from '../../assets/lock.svg';
import SeePassIcon from '../../assets/SeePass.svg';
import { Snackbar } from 'react-native-paper';
import { User } from 'src/models/User';
import { setCurrentUser } from 'src/stores/authSlice';
import { useAppDispatch, useAppSelector } from 'src/stores/store';

// @ts-ignore
export const LogInScreen = ({ navigation }) => {
    const windowHeight = useWindowDimensions().height;
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [snackBarVisible, setVisible] = React.useState(false);
    const [snackBarText, setSnackBarText] = React.useState('');
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.auth.users);

    const handleLogIn = () => {
        if (email === '' || password === '') {
            setSnackBarText('All fields are required');
            setVisible(true);
        } else {
            if (email !== '' || password !== '') {

                const found = users.find(u => u.email === email && u.password === password);

                if (found) {
                    const newCurrentLoggedIn: User = {
                        email:email,
                        password:password,
                        fullName:''
                    };
                    dispatch(setCurrentUser(newCurrentLoggedIn));
                    navigation.navigate('Home');
                } else {
                    setSnackBarText('Email or password incorrect');
                    setVisible(true);
                }
            }
        }
    };

    const onDismissSnackBar = () => setVisible(false);

    return (
        <View
            style={{
                position: 'relative',
                flex: 1,
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
                paddingTop:
                    Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                minHeight: Math.round(windowHeight),
            }}
        >
            <Text style={styles.loginText}>Login</Text>

            <View style={{ flexDirection: 'column', margin: 20 }}>
                <Text style={styles.policiesText}>
                    By signing in you are agreeing our{' '}
                </Text>
                <TouchableOpacity
                    onPress={async () =>
                        await Linking.openURL(
                            'https://moodle.com/privacy-notice/'
                        )
                    }
                >
                    <Text style={styles.linkText}>Term and privacy policy</Text>
                </TouchableOpacity>
            </View>

            <View style={{ margin: 30 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        width: '90%',
                        backgroundColor: '#E2E6EE',
                        borderRadius: 10,
                        paddingTop: 8,
                        paddingBottom: 8,
                        paddingLeft: 12,
                        paddingRight: 12,
                        marginBottom: 20,
                    }}
                >
                    <MailIcon />
                    <TextInput
                        style={{ marginLeft: 10, width: '90%' }}
                        placeholder='Email address'
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        width: '90%',
                        backgroundColor: '#E2E6EE',
                        borderRadius: 10,
                        paddingTop: 8,
                        paddingBottom: 8,
                        paddingLeft: 12,
                        paddingRight: 12,
                    }}
                >
                    <LockIcon />
                    <TextInput
                        secureTextEntry={true}
                        style={{ marginLeft: 10, width: '90%' }}
                        placeholder='Password'
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                </View>
            </View>

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => handleLogIn()}
            >
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.signUpContainer}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>

            <View
                style={{
                    position: 'absolute',
                    bottom: 10,
                    width: '100%',
                }}
            >
                <AuthImage width={'100%'}></AuthImage>
            </View>

            <Snackbar
                wrapperStyle={{}}
                visible={snackBarVisible}
                onDismiss={onDismissSnackBar}
            >
                {snackBarText}
            </Snackbar>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    loginText: {
        fontFamily: 'Inter',
        fontSize: 40,
        lineHeight: 48,
        marginTop: 100,
    },

    policiesText: {
        fontFamily: 'Inter',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        color: '#6B5E5E',
    },

    linkText: {
        fontFamily: 'Inter',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        color: '#006688',
    },
    buttonText: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },

    buttonContainer: {
        width: '65%',
        backgroundColor: '#006688',
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 30,
    },

    signUpText: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },

    signUpContainer: {
        width: '65%',
        backgroundColor: '#8CD4FF',
        paddingVertical: 8,
        borderRadius: 8,
    },
});
