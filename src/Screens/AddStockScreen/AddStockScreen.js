import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../colors';
import Header from '../../components/HeaderComponent/Header';
import GeneralButton from '../../components/GeneralButtonComponent/GeneralButton';
import GeneralSearchDropDown from '../../components/GeneralSearchDropDownComponent/GeneralSearchDropdown';
import StockCardWithAdd from '../../components/StockCardComponent/StockCardWithAdd';

const AddStockScreen = ({ navigation }) => {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');

    /*Handle dropdown search */
    const dropdownItems = ['Item 1', 'Item 2', 'Item 3'];
    const dropdownBrand = ['Item 1', 'Item 2', 'Item 3'];
    const dropdownCategory = ['Item 1', 'Item 2', 'Item 3'];
    const dropdownDiscount = ['Item 1', 'Item 2', 'Item 3'];

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
        navigation.navigate('SaleScreen');
    };

    const handleHomePress = () => {
        navigation.navigate('HomeScreen');
    };

    const handleProfilePress = () => {
        navigation.navigate('ViewProfileScreen');
    };

    const handlePAddToSaleBtn = () => {

    }

    return (
        <View style={styles.container}>
            <Header
                title="Item"
                onBackPress={handleBackPress}
                onHomePress={handleHomePress}
                onProfilePress={handleProfilePress}
            />
            <View style={styles.subContainer}>
                <GeneralButton
                    color={colors.pureBlack}
                    backgroundColor='#FFFFFF'
                    onPress={handlePAddToSaleBtn}
                    text="Add to Sale"
                    icon={require('../../assets/images/tick.png')}
                />

                <GeneralSearchDropDown
                    items={dropdownItems}
                />

                <FlatList
                    data={stockList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <StockCardWithAdd
                            itemName={item.itemName}
                            itemId={item.itemId}
                            batchNo={item.batchNo}
                            expireDate={item.expireDate}
                            manufactureDate={item.manufactureDate}
                            unitPrice={item.unitPrice}
                            itemQuantity={item.itemQuantity}
                        />
                    )}
                />
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundGrey,
    },
    subContainer: {
        flex: 1,
        backgroundColor: colors.backgroundGrey,
        padding: 10
    }
});

export default AddStockScreen;