import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../colors';
import Header from '../../components/HeaderComponent/Header';
import GeneralSearchDropDown from '../../components/GeneralSearchDropDownComponent/GeneralSearchDropdown';

const BillScreen = ({ navigation }) => {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');



    /*Handle dropdown search */
    const dropdownItems = ['Item 1', 'Item 2', 'Item 3'];

    const samplePaymentData = [
        {
            invoiceNo: 'INV001',
            totalItems: 5,
            totalQty: 10,
            dateTime: '2023-08-03 10:30 AM',
            grossTotal: 500,
            discount: 50,
            netTotal: 450,
            remain: 200,
        },
        {
            invoiceNo: 'INV002',
            totalItems: 3,
            totalQty: 7,
            dateTime: '2023-08-03 11:45 AM',
            grossTotal: 300,
            discount: 30,
            netTotal: 270,
            remain: 100,
        },
        // Add more payment data as needed
    ];


    /* Initializations */
    useEffect(() => {
        const loadUserData = async () => {
            try {
                // Retrieve the values from AsyncStorage
                const storedUserId = await AsyncStorage.getItem('userId');
                const storedUsername = await AsyncStorage.getItem('username');
                const storedPassword = await AsyncStorage.getItem('password');
                const storedRole = await AsyncStorage.getItem('role');
                const storedToken = await AsyncStorage.getItem('token');

                // Update the state with the retrieved values
                setUserId(storedUserId);
                setUsername(storedUsername);
                setPassword(storedPassword);
                setRole(storedRole);
                setToken(storedToken);
            } catch (error) {

                console.log('Error in loading data from AsyncStorage:', error);
            }
        };

        loadUserData();

    }, []);


    /* Navigation Bar Functions */
    const handleBackPress = () => {
        navigation.navigate('HomeScreen');
    };

    const handleHomePress = () => {
        navigation.navigate('HomeScreen');
    };

    const handleProfilePress = () => {
        navigation.navigate('ViewProfileScreen');
    };

    const navigatePayNow = () => {
        navigation.navigate('OutletPayNowScreen');
    }

    return (
        <View style={styles.container}>
            <Header
                title="Bills"
                onBackPress={handleBackPress}
                onHomePress={handleHomePress}
                onProfilePress={handleProfilePress}
            />
            <View style={{ padding: 10, height: 160, backgroundColor: '#FFFFFF' }}>
                <GeneralSearchDropDown
                    items={dropdownItems}
                    style={styles.dropdown}
                />
            </View>


            {/* FlatList for rendering payment cards */}
            <FlatList
                style={styles.flat}
                data={samplePaymentData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={navigatePayNow} style={{ backgroundColor: '#FFFFFF', margin: 10, borderRadius: 5, padding: 10, borderWidth: 1, borderColor: '#FFFFFF' }}>
                        <View style={styles.triangleGrey}></View>
                        <Text style={styles.invoiceNum}>{item.invoiceNo}</Text>
                        <View style={styles.middleContainer}>
                            {/* Left Side */}
                            <View style={styles.leftSide}>
                                <View style={styles.row}>
                                    <Text style={styles.detailTitle}>Total Items</Text>
                                    <Text style={styles.detailValue}>:{item.totalItems}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.detailTitle}>Total Qty</Text>
                                    <Text style={styles.detailValue}>:{item.totalQty}</Text>
                                </View>
                            </View>

                            {/* Right Side */}
                            <View style={styles.rightSide}>
                                <Image
                                    source={require('../../assets/images/dollar.png')}
                                    style={styles.dollarIcon}
                                />
                            </View>
                        </View>
                        {/* Merged Cell */}
                        <View style={styles.mergedCell}>
                            <Text style={styles.mergedCellTitle}>Date Time</Text>
                            <Text style={styles.mergedCellValue}>:{item.dateTime}</Text>
                        </View>
                        <View style={styles.mergedCell}>
                            <Text style={styles.mergedCellTitle}>Gross Total</Text>
                            <Text style={styles.mergedCellValue}>:{item.grossTotal}</Text>
                        </View>
                        <View style={styles.mergedCell}>
                            <Text style={styles.mergedCellTitle}>Discount</Text>
                            <Text style={styles.mergedCellValue}>:{item.discount}</Text>
                        </View>
                        <View style={styles.mergedCell}>
                            <Text style={styles.mergedCellTitle}>Net Total</Text>
                            <Text style={styles.mergedCellValue}>:{item.netTotal}</Text>
                        </View>
                        <View style={styles.remainCell}>
                            <Text style={styles.remainCellTitle}>Remain Rs</Text>
                            <Text style={styles.remainCellValue}>:{item.remain}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundGrey,
    },
    flat: {
        backgroundColor: colors.backgroundGrey,
        borderRadius: 10,
        borderWidth: 1,
        zIndex: 1,
        opacity: 1
    },
    invoiceNum: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    middleContainer: {
        flexDirection: 'row',
        backgroundColor: "#FFFFFF",

    },
    row: {
        flexDirection: 'row'
    },
    leftSide: {
        flex: 4
    },
    rightSide: {
        flex: 1,
    },
    detailTitle: {
        fontSize: 14,
        color: colors.pureBlack,
        fontWeight: '400',
        width: 100,
        color: colors.pureBlack
    },
    detailValue: {
        fontSize: 14,
        color: colors.pureBlack
    },
    mergedCell: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    remainCell: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderTopWidth: 1,
        borderTopColor: 'black',
        fontSize: 18,
        marginVertical: 5
    },
    mergedCellTitle: {
        fontSize: 14,
        fontWeight: '400',
        marginRight: 4,
        color: colors.pureBlack,
        width: 95,
    },
    mergedCellValue: {
        fontSize: 14,
        flex: 1,
        color: colors.pureBlack
    },
    remainCellTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginRight: 4,
        color: colors.pureBlack,
        width: 95,
    },
    remainCellValue: {
        fontSize: 18,
        flex: 1,
        color: colors.pureBlack
    },
    dollarIcon: {
        width: 35,
        height: 35
    },
    triangleGrey: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 25,
        borderTopWidth: 25,
        borderLeftColor: 'transparent',
        borderTopColor: '#6c757d',
        position: 'absolute',
        top: 0,
        right: 0
    },
});

export default BillScreen;