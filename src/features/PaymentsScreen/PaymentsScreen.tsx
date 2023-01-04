import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DropdownItem, {
    DropdownItemIconType,
} from 'src/components/DropdownItem/DropdownItem';

export const PaymentsScreen = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.scholarContainer}>
                <Text style={styles.listLabelText}>SCHOLAR</Text>

                <View style={styles.listWrapper}>
                    <DropdownItem
                        title='Taxe plm'
                        content='Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.'
                        icon={DropdownItemIconType.OVERDUE}
                    />
                </View>
            </View>

            <View style={styles.servicesContainer}>
                <Text style={styles.listLabelText}>SERVICES</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: '#fafafa',
        paddingVertical: 26,
        paddingHorizontal: 18,
    },
    listLabelText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 12,
        lineHeight: 15,
        color: 'rgba(0, 0, 0, 0.53)',
    },
    listWrapper: {
        paddingTop: 16,
        paddingBottom: 24,
    },
    scholarContainer: {},
    servicesContainer: {},
});
