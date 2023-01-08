import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Linking,
    TouchableOpacity,
    TextInput,
    Dimensions,
    useWindowDimensions,
} from 'react-native';
import BottomWave from '../../assets/Subtract.svg';
import AuthImage from '../../assets/AuthImage.svg';
import MailIcon from '../../assets/mail.svg';
import LockIcon from '../../assets/lock.svg';
import ProfileIcon from '../../assets/shape.svg';
import { Snackbar } from 'react-native-paper';

// @ts-ignore
export const SignUpScreen = ({ navigation }) => {
    const windowHeight = useWindowDimensions().height;

    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirm, setConfirmPassword] = React.useState('');
    const [snackBarVisible, setVisible] = React.useState(false);
    const [snackBarText, setSnackBarText] = React.useState('');

    const handleSignIn = () => {
        if (
            email === '' ||
            password === '' ||
            name === '' ||
            passwordConfirm === ''
        ) {
            setSnackBarText('All fields are required');
            setVisible(true);
        } else {
            if (
                email !== '' ||
                (password !== '' && name !== '') ||
                passwordConfirm !== ''
            ) {
                if (password === passwordConfirm) {
                    navigation.navigate('LogIn');
                } else {
                    setSnackBarText('Password mismatch');
                    setVisible(true);
                }
            }
        }
    };

    const onDismissSnackBar = () => setVisible(false);

    return (
        <View
            style={{
                minHeight: Math.round(windowHeight),
                flex: 1,
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text style={styles.loginText}>Sign Up</Text>

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
                    <ProfileIcon />
                    <TextInput
                        style={{ marginLeft: 10, width: '90%' }}
                        placeholder='Full name'
                        onChangeText={(text) => setName(text)}
                        value={name}
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
                        marginBottom: 20,
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
                        placeholder='Confirm Password'
                        onChangeText={(text) => setConfirmPassword(text)}
                        value={passwordConfirm}
                    />
                </View>
            </View>

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => handleSignIn()}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={{ position: 'absolute', bottom: 10 }}>
                <AuthImage></AuthImage>
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
        backgroundColor: '#FFFFFF',
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
