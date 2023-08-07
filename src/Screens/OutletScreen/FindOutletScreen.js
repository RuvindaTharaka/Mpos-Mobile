import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../colors';
import Header from '../../components/HeaderComponent/Header';
import GeneralSearchDropDown from '../../components/GeneralSearchDropDownComponent/GeneralSearchDropdown';
import OutletCard from '../../components/GeneralOutletCardComponent/OutletCard';
import GeneralButton from '../../components/GeneralButtonComponent/GeneralButton';

const FindOutletScreen = ({ navigation }) => {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');

    /* Handle Dropdown Routes */
    const dropdownItems = ['Outlet 1', 'Outlet 2', 'Outlet 3'];

    // Sample data for outlets
    const [outlets, setOutlets] = useState([
        {
            id: '1',
            outletName: 'Outlet 1',
            clickable: true,
            telephone1: '1234567890',
            telephone2: '9876543210',
            customer: 'Customer A',
            route: 'Route X',
            routeIndex: 'RX001',
            routeName: 'Route X Name',
            city: 'City A',
            type: 'Type 1',
            address: '123 Main Street, City A',
            backgroundColor: '#FFFFFF',
            color: 'black'
        },
        {
            id: '2',
            outletName: 'Outlet 2',
            clickable: true,
            telephone1: '1234567890',
            telephone2: '9876543210',
            customer: 'Customer A',
            route: 'Route X',
            routeIndex: 'RX001',
            routeName: 'Route X Name',
            city: 'City A',
            type: 'Type 1',
            address: '123 Main Street, City A',
            backgroundColor: '#FF7575',
            color: '#FFFFFF'
        },
        {
            id: '3',
            outletName: 'Outlet 3',
            clickable: true,
            telephone1: '1234567890',
            telephone2: '9876543210',
            customer: 'Customer A',
            route: 'Route X',
            routeIndex: 'RX001',
            routeName: 'Route X Name',
            city: 'City A',
            type: 'Type 1',
            address: '123 Main Street, City A',
            backgroundColor: '#FFFFFF',
            color: 'black'
        },
        {
            id: '4',
            outletName: 'Outlet 4',
            clickable: true,
            telephone1: '1234567890',
            telephone2: '9876543210',
            customer: 'Customer A',
            route: 'Route X',
            routeIndex: 'RX001',
            routeName: 'Route X Name',
            city: 'City A',
            type: 'Type 1',
            address: '123 Main Street, City A',
            backgroundColor: '#FF7575',
            color: '#FFFFFF'
        },
        // Add more sample data for other outlets
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

    /* Handle Screen butoon */
    const handleAllRouteBtn = () => {
        alert("All");
    }

    const handleOutletCardPress = async (outlet) => {
        // Store the values in AsyncStorage
        try {
            await AsyncStorage.setItem('outletName', outlet.outletName);
            await AsyncStorage.setItem('telephone1', outlet.telephone1);
            await AsyncStorage.setItem('telephone2', outlet.telephone2);
            await AsyncStorage.setItem('customer', outlet.customer);
            await AsyncStorage.setItem('route', outlet.route);
            await AsyncStorage.setItem('routeIndex', outlet.routeIndex);
            await AsyncStorage.setItem('routeName', outlet.routeName);
            await AsyncStorage.setItem('city', outlet.city);
            await AsyncStorage.setItem('type', outlet.type);
            await AsyncStorage.setItem('address', outlet.address);

            // Navigate to the home screen if all values are not null
            if (outlet.outletName && outlet.telephone1 && outlet.telephone2 && outlet.customer && outlet.route && outlet.routeIndex && outlet.routeName && outlet.city && outlet.type && outlet.address) {

                navigation.navigate('OutletScreen');
            }
        } catch (error) {
            console.log('Error in outlet data to AsyncStorage: ', error);
        }

    };
    return (
        <View style={styles.container}>
            <Header
                title="Find Outlet"
                onBackPress={handleBackPress}
                onHomePress={handleHomePress}
                onProfilePress={handleProfilePress}
            />
            <View style={styles.subContainer}>

                <GeneralSearchDropDown
                    items={dropdownItems}
                    topTitle='Outlet'
                />

                <GeneralButton
                    color="#FFFFFF"
                    backgroundColor={colors.lightPink}
                    onPress={handleAllRouteBtn}
                    text="All"
                    icon={require('../../assets/images/trip.png')}
                />
            </View>

            {/* Outlet Cards */}

            <FlatList
                data={outlets}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <OutletCard
                        key={item.id}
                        onPress={() => handleOutletCardPress(item)}
                        backgroundColor={item.backgroundColor}
                        color={item.color}
                        outletName={item.outletName}
                        clickable={item.clickable}
                        telephone1={item.telephone1}
                        telephone2={item.telephone2}
                        customer={item.customer}
                        route={item.route}
                        routeIndex={item.routeIndex}
                        routeName={item.routeName}
                        city={item.city}
                        type={item.type}
                        address={item.address}
                        showTriangle={true}
                    />
                )}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundGrey
    },
    subContainer: {
        padding: 10,
        position: 'relative',
        zIndex: 1,
        opacity: 1,
        backgroundColor: '#FFFFFF'
    },
});

export default FindOutletScreen;