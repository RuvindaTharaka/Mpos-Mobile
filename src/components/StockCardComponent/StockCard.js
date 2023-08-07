import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../colors';

const StockCard = ({ itemName, itemId, batchNo, expireDate, manufactureDate, unitPrice, itemQuantity }) => {
    return (
        <View style={styles.container}>
            {/* Left Side */}
            <View style={styles.leftSide}>
                <Text style={styles.title}>{itemName}</Text>
                <Text style={styles.detail}>Item ID: {itemId}</Text>
                <Text style={styles.detail}>Batch No: {batchNo}</Text>
                <Text style={styles.detail}>Expire Date: {expireDate}</Text>
                <Text style={styles.detail}>Manufacture Date: {manufactureDate}</Text>
                <Text style={styles.detail}>Unit Price: {unitPrice}</Text>
            </View>

            {/* Right Side */}
            <View style={styles.rightSide}>
                <Text style={styles.quantity}>{itemQuantity}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    leftSide: {
        flex: 4,
        borderRightWidth: .5,
        borderColor: 'black'
    },
    rightSide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: colors.pureBlack,
    },
    detail: {
        fontSize: 16,

    },
    quantity: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.pureBlack,
    },
});

export default StockCard;
