import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { updatePayment } from 'src/stores/settingsSlice';
import { useAppDispatch, useAppSelector } from 'src/stores/store';

const confirmationScreenTitle = 'Payment details updated successfully!';
const confirmationScreenMessage =
    'Changes will be available in payment settings screen.';

//@ts-ignore
export const PaymentDetails = ({ navigation }) => {
    const currentPayment = useAppSelector((state) => state.settings.payment);
    const [newPayment, setNewPayment] = React.useState(currentPayment);

    const dispatch = useAppDispatch();

    const isButtonDisabled =
        currentPayment.cardNumber === newPayment.cardNumber &&
        currentPayment.cvv === newPayment.cvv &&
        currentPayment.date === newPayment.date;

    const handleCardNumber = (text: string) => {
        const parsedText = text.replace(/[^0-9]/g, '');
        if (parsedText.length > 16) return;

        let formattedText = parsedText.split(' ').join('');
        if (formattedText.length > 0) {
            formattedText = formattedText
                .match(new RegExp('.{1,4}', 'g'))!
                .join(' ');
        }

        setNewPayment((prev) => ({
            ...prev,
            cardNumber: formattedText,
        }));
    };

    const handleExpiryDate = (text: string) => {
        const parsedText = text.replace(/[^0-9]/g, '');
        if (parsedText.length > 4) return;

        let formattedText = parsedText.split(' ').join('');
        if (formattedText.length > 0) {
            formattedText = formattedText
                .match(new RegExp('.{1,2}', 'g'))!
                .join('/');
        }
        setNewPayment((prev) => ({
            ...prev,
            date: formattedText,
        }));
    };

    const handleCVV = (text: string) => {
        const parsedText = text.replace(/[^0-9]/g, '');
        if (parsedText.length > 3) return;
        setNewPayment((prev) => ({
            ...prev,
            cvv: parsedText,
        }));
    };

    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.inputLabel}>Credit Card Number</Text>
                <TextInput
                    style={styles.inputContainer}
                    onChangeText={handleCardNumber}
                    value={newPayment.cardNumber}
                    placeholder='1234 1234 1234 1234'
                    keyboardType='numeric'
                />
            </View>

            <View
                style={{ display: 'flex', flexDirection: 'row', marginTop: 32 }}
            >
                <View style={{ flex: 1 }}>
                    <Text style={styles.inputLabel}>Expiry Date</Text>
                    <TextInput
                        style={styles.inputContainer}
                        onChangeText={handleExpiryDate}
                        value={newPayment.date}
                        placeholder='MM/YY'
                        keyboardType='numeric'
                    />
                </View>
                <View style={{ flex: 1, marginLeft: 24 }}>
                    <Text style={styles.inputLabel}>CVV</Text>
                    <TextInput
                        style={styles.inputContainer}
                        onChangeText={handleCVV}
                        value={newPayment.cvv}
                        placeholder='123'
                        keyboardType='numeric'
                    />
                </View>
            </View>

            <TouchableOpacity
                style={[
                    styles.buttonContainer,
                    isButtonDisabled ? { backgroundColor: '#E2E6EE' } : {},
                ]}
                onPress={() => {
                    dispatch(updatePayment(newPayment));
                    navigation.navigate('ConfirmationScreen', {
                        title: confirmationScreenTitle,
                        message: confirmationScreenMessage,
                        noOfScreensToPop: 1,
                    });
                }}
            >
                <Text
                    style={[
                        styles.buttonText,
                        isButtonDisabled ? { color: '#9EA8BD' } : {},
                    ]}
                >
                    CONFIRM
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputLabel: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        color: '#000',
    },
    inputContainer: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#E2E6EE',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        color: '#9EA8BD',
        borderRadius: 8,
    },

    buttonWrapper: {
        shadowColor: 'rgba(0,0,0, .6)', // IOS
        shadowOffset: { height: 2, width: 2 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 4, //IOS
        backgroundColor: '#fff',
        elevation: 5, // Android
        borderRadius: 8,
    },

    wrapper: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#fafafa',
        paddingVertical: 26,
        paddingHorizontal: 18,
    },

    buttonText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },

    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        width: '90%',
        backgroundColor: '#006688',
        paddingVertical: 16,
        borderRadius: 8,
        alignSelf: 'center',
    },
});
