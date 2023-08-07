import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../colors';
import Header from '../../components/HeaderComponent/Header';
import GeneralButton from '../../components/GeneralButtonComponent/GeneralButton';
import StockCard from '../../components/StockCardComponent/StockCard';



const ViewStockScreen = ({ navigation }) => {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');

    /* Stock Items */
    const [stockItems, setStockItems] = useState([
        {
            id: '1',
            itemName: 'Item 1',
            itemId: 'ITM001',
            batchNo: 'B12345',
            expireDate: '2023-08-15',
            manufactureDate: '2023-07-31',
            unitPrice: '$10.99',
            itemQuantity: 50,
        },
        {
            id: '2',
            itemName: 'Item 2',
            itemId: 'ITM002',
            batchNo: 'B12345',
            expireDate: '2023-08-15',
            manufactureDate: '2023-07-31',
            unitPrice: '$10.99',
            itemQuantity: 100,
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
        navigation.navigate('HomeScreen');
    };

    const handleHomePress = () => {
        navigation.navigate('HomeScreen');
    };

    const handleProfilePress = () => {
        navigation.navigate('ViewProfileScreen');
    };

    /* Handle Screen Buttons */
    const handleVerifyStockBtn = () => {
        alert("Verify Stock")
    }

    const handleInvalidBtn = () => {
        alert("Invalid")
    }

    return (
        <View style={styles.container}>
            <Header
                title="Stock"
                onBackPress={handleBackPress}
                onHomePress={handleHomePress}
                onProfilePress={handleProfilePress}
            />
            <View style={{ margin: 10 }}>
                <GeneralButton
                    backgroundColor={colors.lightGreen}
                    color={colors.tileColor}
                    onPress={handleVerifyStockBtn}
                    text="Verify Stock"
                />
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <GeneralButton
                    backgroundColor={colors.lightPink}
                    color={colors.tileColor}
                    onPress={handleInvalidBtn}
                    text="Invalid"
                />
            </View>

            {/* FlatList for Stock Cards */}
            <FlatList
                data={stockItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <StockCard
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundGrey,
    },
});

export default ViewStockScreen;