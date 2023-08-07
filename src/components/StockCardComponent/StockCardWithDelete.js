import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../colors';
import { Swipeable } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const StockCardWithDelete = ({ onDelete, itemName, itemId, batchNo, expireDate, manufactureDate, unitPrice, itemQuantity, totalPrice }) => {
    const rightSwipe = () => {
        return (
            <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                <Image
                    source={require('../../assets/images/delete.png')}
                    style={styles.deleteIcon}
                />
                <Text style={styles.detailSpecial}>Delete</Text>
            </TouchableOpacity>
        )
    }

    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={rightSwipe}>
                <View style={styles.container}>
                    {/* Left Side */}
                    <View style={styles.leftSide}>
                        <Text style={styles.title}>{itemName}</Text>
                        <Text style={styles.detail}>Item ID: {itemId}</Text>
                        <Text style={styles.detail}>Batch No: {batchNo}</Text>
                        <Text style={styles.detail}>Expire Date: {expireDate}</Text>
                        <Text style={styles.detail}>Manufacture Date: {manufactureDate}</Text>
                        <Text style={styles.detail}>Unit Price: {unitPrice}</Text>
                        <Text style={styles.detailSpecial}>Total Price: {totalPrice}</Text>
                    </View>

                    {/* Right Side */}
                    <View style={styles.rightSide}>
                        <Image
                            source={require('../../assets/images/stock_added.png')}
                            style={styles.stockIcon}
                        />
                        <Text style={styles.quantity}>{itemQuantity}</Text>
                    </View>
                </View>
            </Swipeable>
        </GestureHandlerRootView>

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
    detailSpecial: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.pureBlack
    },
    quantity: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.pureBlack,
    },
    deleteButton: {
        width: 100,
        height: 100,
        backgroundColor: colors.lightPink,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center'
    },
    deleteIcon: {
        width: 40,
        height: 40,
    },
    stockIcon: {
        width: 40,
        height: 40
    }
});
export default StockCardWithDelete;
