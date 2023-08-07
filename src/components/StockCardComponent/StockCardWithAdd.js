import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Image } from 'react-native';
import colors from '../../colors';

const StockCardWithAdd = ({ itemName, itemId, batchNo, expireDate, manufactureDate, unitPrice, itemQuantity }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [quantityValue, setQuantityValue] = useState('');
    const [enteredQuantity, setEnteredQuantity] = useState('');

    const handleIconPress = () => {
        setIsPopupVisible(true);
        setQuantityValue('');
    };

    const handleOkPress = () => {
        if (quantityValue <= itemQuantity) {
            setIsPopupVisible(false);
            setEnteredQuantity(quantityValue);
        }
    };

    const handleCancelPress = () => {
        setIsPopupVisible(false);
    };

    const renderQuantity = () => {
        if (enteredQuantity) {
            return (
                <View style={styles.enteredQuantityContainer}>
                    <Text style={styles.enteredQuantityText}>{enteredQuantity}</Text>
                </View>
            );
        } else {
            return null;
        }
    };

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
            <TouchableOpacity style={styles.rightSide} onPress={handleIconPress}>
                <Image source={require('../../assets/images/add.png')} style={styles.icon} />
                {renderQuantity()}
            </TouchableOpacity>

            {/* Popup */}
            <Modal visible={isPopupVisible} transparent={true}>
                <View style={styles.popupContainer}>
                    <Text style={styles.popupLabel}>In Stock: {itemQuantity}</Text>
                    <TextInput
                        style={styles.popupInput}
                        placeholder="Quantity"
                        keyboardType="numeric"
                        value={quantityValue}
                        onChangeText={setQuantityValue}
                    />
                    <View style={styles.popupButtons}>
                        <TouchableOpacity style={styles.popupButton} onPress={handleCancelPress}>
                            <Text style={styles.popupButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.popupButton, quantityValue > itemQuantity ? styles.popupButtonDisabled : null]}
                            onPress={handleOkPress}
                            disabled={quantityValue > itemQuantity}
                        >
                            <Text style={styles.popupButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        borderRightWidth: 0.5,
        borderColor: 'black',
    },
    rightSide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
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
    icon: {
        width: 50,
        height: 50,
    },
    // Popup styles
    popupContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        margin: 50,
    },
    popupLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    popupInput: {
        borderWidth: 1,
        borderColor: colors.lightGrey,
        borderRadius: 5,
        padding: 8,
        marginBottom: 20,
    },
    popupButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    popupButton: {
        padding: 10,
        marginLeft: 10,
        backgroundColor: colors.lightCyan,
        borderRadius: 5,
    },
    popupButtonText: {
        fontSize: 16,
        color: 'white',
    },
    popupButtonDisabled: {
        backgroundColor: colors.grey,
    },
    enteredQuantityContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: colors.lightGrey,
        padding: 5,
        borderRadius: 5,
    },
    enteredQuantityText: {
        fontSize: 20,
        color: colors.pureBlack,
        fontWeight: 'bold',
    },
});

export default StockCardWithAdd;
