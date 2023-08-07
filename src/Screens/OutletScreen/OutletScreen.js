import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../colors';
import Header from '../../components/HeaderComponent/Header';
import OutletCard from '../../components/GeneralOutletCardComponent/OutletCard';

const OutletScreen = ({ navigation }) => {

    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');

    /* Handle Outlet */
    const [outletName, setOutletName] = useState('');
    const [telephone1, setTelephone1] = useState('');
    const [telephone2, setTelephone2] = useState('');
    const [customer, setCustomer] = useState('');
    const [route, setRoute] = useState('');
    const [routeIndex, setRouteIndex] = useState('');
    const [routeName, setRouteName] = useState('');
    const [city, setCity] = useState('');
    const [type, setType] = useState('');
    const [address, setAddress] = useState('');


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
                setUserId(storedUserId || '');
                setUsername(storedUsername || '');
                setPassword(storedPassword || '');
                setRole(storedRole || '');
                setToken(storedToken || '');
            } catch (error) {
                console.log('Error in loading data from AsyncStorage:', error);
            }
        };

        const loadOutletData = async () => {
            try {
                const outletName = await AsyncStorage.getItem('outletName');
                const telephone1 = await AsyncStorage.getItem('telephone1');
                const telephone2 = await AsyncStorage.getItem('telephone2');
                const customer = await AsyncStorage.getItem('customer');
                const route = await AsyncStorage.getItem('route');
                const routeIndex = await AsyncStorage.getItem('routeIndex');
                const routeName = await AsyncStorage.getItem('routeName');
                const city = await AsyncStorage.getItem('city');
                const type = await AsyncStorage.getItem('type');
                const address = await AsyncStorage.getItem('address');

                setOutletName(outletName || '');
                setTelephone1(telephone1 || '');
                setTelephone2(telephone2 || '');
                setCustomer(customer || '');
                setRoute(route || '');
                setRouteIndex(routeIndex || '');
                setRouteName(routeName || '');
                setCity(city || '');
                setType(type || '');
                setAddress(address || '');
            } catch (error) {
                console.log('Error loading outlet data:', error);
            }
        };

        // Load user data and then outlet data
        loadUserData();
        loadOutletData();
    }, []);

    /* Navigation Bar Functions */
    const handleBackPress = () => {
        navigation.navigate('FindOutletScreen');
    };

    const handleHomePress = () => {
        navigation.navigate('HomeScreen');
    };

    const handleProfilePress = () => {
        navigation.navigate('ViewProfileScreen');
    };

    return (
        <View style={styles.container}>
            <Header
                title="Outlet"
                onBackPress={handleBackPress}
                onHomePress={handleHomePress}
                onProfilePress={handleProfilePress}
            />
            <OutletCard
                backgroundColor="#FFFFFF"
                color={colors.pureBlack}
                outletName={outletName}
                telephone1={telephone1}
                telephone2={telephone2}
                customer={customer}
                route={route}
                routeIndex={routeIndex}
                routeName={routeName}
                city={city}
                type={type}
                address={address}
                showTriangle={false}
            />

            <View style={styles.row}>
                <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('SaleScreen')}>
                    <View style={styles.triangleGrey}></View>
                    <Image
                        source={require('../../assets/images/sale.png')}
                        style={styles.tileIcon}
                    />
                    <Text style={styles.tileName}>Sale</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('PaymentScreen')}>
                    <View style={styles.triangleGrey}></View>
                    <Image
                        source={require('../../assets/images/payment.png')}
                        style={styles.tileIcon}
                    />
                    <Text style={styles.tileName}>Payment</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.row}>
                <TouchableOpacity style={styles.totalTile} onPress={() => navigation.navigate('ReturnScreen')}>
                    <View style={styles.triangleGrey}></View>
                    <Image
                        source={require('../../assets/images/return.png')}
                        style={styles.tileIcon}
                    />
                    <Text style={styles.tileName}>Return</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.totalTile} onPress={() => navigation.navigate('RequestScreen')}>
                    <View style={styles.triangleGrey}></View>
                    <Image
                        source={require('../../assets/images/email.png')}
                        style={styles.tileIcon}
                    />
                    <Text style={styles.tileName}>Requests</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundGrey,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    tile: {
        width: '49%',
        aspectRatio: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tileName: {
        marginTop: 5,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '500',
        color: colors.pureBlack
    },
    tileIcon: {
        width: 50,
        height: 50
    },
    totalTile: {
        width: '100%',
        aspectRatio: 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center'
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

export default OutletScreen;