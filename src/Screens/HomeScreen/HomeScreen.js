import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Animated } from 'react-native';

import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../colors';

import Header from '../../components/HeaderComponent/Header';

const HomeScreen = ({ navigation }) => {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');
    /* Handle Loding Status */
    const [loadedStatus, setLoadedStatus] = useState('LOADED');
    const [isLoading, setIsLoading] = useState(true);
    const [loadingId, setLoadingId] = useState('');
    const [LodingTime, setLoadingTime] = useState('');
    const [driverName, setDriverName] = useState('');
    const [vehicleNumber, setVehicleNumber] = useState('');
    /* Date Time */
    const [currentTime, setCurrentTime] = useState(new Date());

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

        const loadLoadingData = async () => {
            try {
                // Retrieve the values from BackEnd
                const temploadingId = '00-001';
                const temploadingTime = '05.30 AM';
                const tempDriverName = 'Sarath Perera';
                const tempVehicleNumber = 'VO-7874';

                // Update the state with the retrieved values
                setLoadingId(temploadingId);
                setLoadingTime(temploadingTime);
                setDriverName(tempDriverName);
                setVehicleNumber(tempVehicleNumber);
            } catch (error) {

                console.log('Error in loading data from BackEnd:', error);
            }
        };

        loadLoadingData();


    }, []);


    /* Navigation Bar Functions */
    const handleBackPress = () => {
        navigation.navigate('LogInScreen');
    };

    const handleHomePress = () => {
        navigation.navigate('HomeScreen');
    };

    const handleProfilePress = () => {
        navigation.navigate('ViewProfileScreen');
    };

    /* Screen Handle Functions */
    const navigateToViewStockScreen = () => {
        // Implement navigation logic to navigate to ViewStockScreen
        console.log('Navigate to ViewStockScreen');
    };


    return (
        <View style={styles.container}>
            <Header
                title="Home"
                onBackPress={handleBackPress}
                onHomePress={handleHomePress}
                onProfilePress={handleProfilePress}
            />

            <View style={styles.container}>
                {/* Top row with 4 equal size tiles */}
                <View style={styles.row}>
                    <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('FindOutletScreen')}>
                        <View style={styles.triangleGrey}></View>
                        <Image
                            source={require('../../assets/images/outlet.png')}
                            style={styles.tileIcon}
                        />
                        <Text style={styles.tileName}>Outlets</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('TripScreen')}>
                        <View style={styles.triangleGrey}></View>
                        <Image
                            source={require('../../assets/images/trip.png')}
                            style={styles.tileIcon}
                        />
                        <Text style={styles.tileName}>Trip</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('RouteScreen')}>
                        <View style={styles.triangleGrey}></View>
                        <Image
                            source={require('../../assets/images/route.png')}
                            style={styles.tileIcon}
                        />
                        <Text style={styles.tileName}>Route</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('CustomerScreen')}>
                        <View style={styles.triangleGrey}></View>
                        <Image
                            source={require('../../assets/images/user.png')}
                            style={styles.tileIcon}
                        />
                        <Text style={styles.tileName}>Customer</Text>
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

                {isLoading ? (
                    <TouchableOpacity style={styles.alertTile}>
                        <Text style={styles.alertTitleText}>Hey {username}!</Text>
                        {/* Use the loadedStatus state here */}
                        <Text style={styles.commonText}>You have a loading at {loadedStatus} status</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.alertTile}>
                        <Text style={styles.alertTitleText}>Hey {username}!</Text>
                        <Text style={styles.commonText}>You have no loading right now.</Text>
                    </TouchableOpacity>
                )}

                {isLoading ? (
                    <View style={styles.varyTile}>
                        <TouchableOpacity style={styles.stockButton} onPress={() => navigation.navigate('ViewStockScreen')}>
                            <Text style={styles.stockButtonText}>Stock</Text>
                        </TouchableOpacity>
                        <Text style={styles.commonText}>LoadingId: {loadingId}</Text>
                        <Text style={styles.commonText}>LoadingTime: {LodingTime}</Text>
                        <Text style={styles.commonText}>DriverName: {driverName}</Text>
                        <Text style={styles.commonText}>VehicleNumber: {vehicleNumber}</Text>
                    </View>
                ) : (
                    <View>
                        {/* Date */}
                        <Text style={styles.dateText}>{currentTime.toDateString()}</Text>
                        <Text style={styles.dateText}>{currentTime.toTimeString()}</Text>
                    </View>
                )}

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
        aspectRatio: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        flexDirection: 'row',
    },
    alertTile: {
        backgroundColor: colors.lightPink,
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
    alertTitleText: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Roboto',
        color: colors.headerFontColor
    },
    commonText: {
        fontWeight: '500',
        fontSize: 16,
        fontFamily: 'Roboto',
        color: colors.pureBlack
    },
    varyTile: {
        backgroundColor: colors.tileColor,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        margin: 10,
    },
    stockButton: {
        backgroundColor: colors.lightGreen,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '50%',
        alignSelf: 'flex-end'
    },
    stockButtonText: {
        color: colors.headerFontColor,
        fontSize: 18,
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#333',
        margin: 10
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

export default HomeScreen;