import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../colors';
import Header from '../../components/HeaderComponent/Header';
import GeneralDropDown from '../../components/GeneralDropDownComponent/GeneralDropDown';
import GeneralButton from '../../components/GeneralButtonComponent/GeneralButton';

const TripScreen = ({ navigation }) => {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');
    /* Trip Details Handle  */
    const [tripId, setTripId] = useState('123');
    const [loadId, setLoadId] = useState('L1234');
    const [loadDateTime, setLoadDateTime] = useState('2023-07-30 12:00 PM');
    const [vehicleId, setVehicleId] = useState('V001');
    const [vehicleNo, setVehicleNo] = useState('ABC123');
    const [driverId, setDriverId] = useState('D001');
    const [driverName, setDriverName] = useState('John Doe');
    const [loadCreator, setLoadCreator] = useState('Admin');
    const [remark, setRemark] = useState('Sample remark');
    const [tripStartDateTime, setTripStartDateTime] = useState('2023-07-31 09:00 AM');
    /* Dropdown Routes */
    const dropdownItems = ['Route 1', 'Route 2', 'Route 3'];

    /* Initializations */
    useEffect(() => {
        // Function to load user data from AsyncStorage
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

        // Call the loadUserData function when the component mounts
        loadUserData();

        // Function to save trip details to AsyncStorage
        const saveTripDetailsToAsyncStorage = async () => {
            try {
                // Prepare the trip details object
                const tripDetails = {
                    tripId,
                    loadId,
                    loadDateTime,
                    vehicleId,
                    vehicleNo,
                    driverId,
                    driverName,
                    loadCreator,
                    remark,
                    tripStartDateTime,
                };

                // Convert the object to JSON string
                const tripDetailsJSON = JSON.stringify(tripDetails);

                // Save the details to AsyncStorage
                await AsyncStorage.setItem('tripDetails', tripDetailsJSON);

                // Show success message or any other action
                console.log('Trip details saved to AsyncStorage successfully!');
            } catch (error) {
                console.log('Error in saving trip details to AsyncStorage:', error);
            }
        };

        // Call the saveTripDetailsToAsyncStorage function when the component mounts
        saveTripDetailsToAsyncStorage();
    }, [tripId, loadId, loadDateTime, vehicleId, vehicleNo, driverId, driverName, loadCreator, remark, tripStartDateTime]);



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
    const handleViewStockBtn = () => {
        navigation.navigate('ViewStockScreen')
    }

    const handleStartTripBtn = () => {
        alert("Start Trip Button ");
    }


    return (
        <View style={styles.container}>
            <Header
                title="Trip"
                onBackPress={handleBackPress}
                onHomePress={handleHomePress}
                onProfilePress={handleProfilePress}
            />
            <View style={styles.subContainer}>
                {/* Card */}
                <View style={styles.card}>
                    {/* Detail Titles */}
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>TripId:</Text>
                        <Text style={styles.detailValue}>{tripId}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>LoadId:</Text>
                        <Text style={styles.detailValue}>{loadId}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>LoadDataTime:</Text>
                        <Text style={styles.detailValue}>{loadDateTime}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>VehicleId:</Text>
                        <Text style={styles.detailValue}>{vehicleId}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>VehicleNo:</Text>
                        <Text style={styles.detailValue}>{vehicleNo}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>DriverId:</Text>
                        <Text style={styles.detailValue}>{driverId}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>DriverName:</Text>
                        <Text style={styles.detailValue}>{driverName}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>LoadCreater:</Text>
                        <Text style={styles.detailValue}>{loadCreator}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>Remark:</Text>
                        <Text style={styles.detailValue}>{remark}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>TripStartDateTime:</Text>
                        <Text style={styles.detailValue}>{tripStartDateTime}</Text>
                    </View>
                </View>

                {/* Dropdown */}
                <View style={{ minHeight: 100, zIndex: 2, opacity: 2 }}>
                    <GeneralDropDown items={dropdownItems} topItem='Select Route' />
                </View>

                {/* Buttons */}
                <View style={{ marginBottom: 20 }}>
                    <GeneralButton
                        backgroundColor="#FFFFFF"
                        color="black"
                        onPress={handleViewStockBtn}
                        text="View Stock"
                        icon={require('../../assets/images/stock.png')}
                    />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <GeneralButton
                        backgroundColor="#FFFFFF"
                        color="black"
                        onPress={handleStartTripBtn}
                        text="Start Trip"
                        icon={require('../../assets/images/vehicle.png')}
                    />
                </View>
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
        padding: 10,
        position: 'relative',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    detailTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333333',
    },
    detailValue: {
        fontSize: 16,
        color: '#666666',
    }
});

export default TripScreen;