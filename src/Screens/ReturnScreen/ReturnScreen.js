import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, ScrollView, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../colors';
import Header from '../../components/HeaderComponent/Header';
import GeneralButton from '../../components/GeneralButtonComponent/GeneralButton';
import StockCardWithDelete from '../../components/StockCardComponent/StockCardWithDelete';


const ReturnScreen = ({ navigation }) => {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');

    /* Invoice  */
    const [invoiceNo, setInvoiceNo] = useState('');
    const [totalItems, setTotalItems] = useState('');
    const [totalQty, setTotalQty] = useState('');
    const [grossTotal, setGrossTotal] = useState('');
    const [discount, setDiscount] = useState('');
    const [netTotal, setNetTotal] = useState('');

    /* Stock Items */
    const [stockList, setStockList] = useState([
        {
            id: '1',
            itemName: 'Item 1',
            itemId: 'ITM001',
            batchNo: 'B12345',
            expireDate: '2023-08-15',
            manufactureDate: '2023-07-31',
            unitPrice: 10.99,
            itemQuantity: 50,
            totalPrice: 0 // Calculate the initial totalPrice
        },
        {
            id: '2',
            itemName: 'Item 2',
            itemId: 'ITM002',
            batchNo: 'B12345',
            expireDate: '2023-08-15',
            manufactureDate: '2023-07-31',
            unitPrice: 10.99,
            itemQuantity: 1000,
            totalPrice: 0 // Calculate the initial totalPrice
        },
        // Add more sample data as needed
    ]);


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
        navigation.navigate('OutletScreen');
    };

    const handleHomePress = () => {
        navigation.navigate('HomeScreen');
    };

    const handleProfilePress = () => {
        navigation.navigate('ViewProfileScreen');
    };

    /* Handle Screen buttons */
    const handleSettleBtn = () => {
        navigation.navigate('SettleReturnScreen');
    }

    const handleAddItemBtn = () => {
        navigation.navigate('AddItemReturnScreen');
    }

    const handleDeleteItem = (itemId) => {
        const updatedList = stockList.filter((item) => item.id !== itemId);
        setStockList(updatedList);
    };



    return (
        <SafeAreaView style={styles.container}>
            <Header
                title="Return"
                onBackPress={handleBackPress}
                onHomePress={handleHomePress}
                onProfilePress={handleProfilePress}
            />

            <GeneralButton
                color="#FFFFFF"
                backgroundColor={colors.normalPink}
                onPress={handleSettleBtn}
                text="Settle"
                icon={require('../../assets/images/tick.png')}
            />

            <View style={{ backgroundColor: '#FFFFFF', margin: 10, borderRadius: 5, padding: 10 }}>
                <Text style={styles.invoiceNum}>{invoiceNo}</Text>
                <View style={styles.middleContainer}>
                    {/* Left Side */}
                    <View style={styles.leftSide}>
                        <View style={styles.row}>
                            <Text style={styles.detailTitle}>Total Items</Text>
                            <Text style={styles.detailValue}>:{totalItems}</Text>
                        </View>
                    </View>

                    {/* Right Side */}
                    <View style={styles.rightSide}>
                        <View style={styles.row}>
                            <Text style={styles.detailTitle}>Total Qty</Text>
                            <Text style={styles.detailValue}>:{totalQty}</Text>
                        </View>
                    </View>
                </View>
                {/* Merged Cell */}
                <View style={styles.mergedCell}>
                    <Text style={styles.mergedCellTitle}>Gross Total</Text>
                    <Text style={styles.mergedCellValue}>:{grossTotal}</Text>
                </View>
                <View style={styles.mergedCell}>
                    <Text style={styles.mergedCellTitle}>Discount</Text>
                    <Text style={styles.mergedCellValue}>:{discount}</Text>
                </View>
                <View style={styles.mergedCell}>
                    <Text style={styles.mergedCellTitle}>Net Total</Text>
                    <Text style={styles.mergedCellValue}>:{netTotal}</Text>
                </View>
            </View>

            <GeneralButton
                color="#FFFFFF"
                backgroundColor={colors.lightCyan}
                onPress={handleAddItemBtn}
                text="Add Item"
                icon={require('../../assets/images/add.png')}
            />

            <FlatList
                data={stockList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <StockCardWithDelete
                        itemName={item.itemName}
                        itemId={item.itemId}
                        batchNo={item.batchNo}
                        expireDate={item.expireDate}
                        manufactureDate={item.manufactureDate}
                        unitPrice={item.unitPrice}
                        itemQuantity={item.itemQuantity}
                        totalPrice={item.totalPrice}
                        onDelete={() => handleDeleteItem(item.id)}
                    />
                )}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundGrey,
    },
    invoiceNum: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    middleContainer: {
        flexDirection: 'row',
        backgroundColor: "#FFFFFF"
    },
    row: {
        flexDirection: 'row'
    },
    leftSide: {
        flex: 1
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
});

export default ReturnScreen;