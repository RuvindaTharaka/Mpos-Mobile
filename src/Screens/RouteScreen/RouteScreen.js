import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../colors';
import Header from '../../components/HeaderComponent/Header';

const RouteScreen = ({ navigation }) => {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');
    /* Handle Route Details  */
    const [routeName, setRouteName] = useState('Pandura - Galle');
    const [startCity, setStartCity] = useState('Panadura');
    const [endCity, setEndCity] = useState('Galle');
    const [routeDescription, setRouteDescription] = useState('Coastal line route');


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

    return (
        <View style={styles.container}>
            <Header
                title="Route"
                onBackPress={handleBackPress}
                onHomePress={handleHomePress}
                onProfilePress={handleProfilePress}
            />
            <View style={styles.subContainer}>
                {/* Card */}
                <View style={styles.card}>
                    {/* Detail Titles */}
                    <View style={styles.detailRow}>
                        <Text style={styles.cardTitle}>{routeName}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>Start City : </Text>
                        <Text style={styles.detailValue}>{startCity}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>End City : </Text>
                        <Text style={styles.detailValue}>{endCity}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailTitle}>Description : </Text>
                        <Text style={styles.detailValue}>{routeDescription}</Text>
                    </View>
                </View>
                {/* */}
                <View style={styles.row}>
                    <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('FindOutletScreen')}>
                        <View style={styles.triangleGrey}></View>
                        <Image
                            source={require('../../assets/images/outlet.png')}
                            style={styles.tileIcon}
                        />
                        <Text style={styles.tileName}>Outlets</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tile} onPress={() => navigation.navigate('RouteCoveredAreaScreen')}>
                        <View style={styles.triangleGrey}></View>
                        <Image
                            source={require('../../assets/images/route.png')}
                            style={styles.tileIcon}
                        />
                        <Text style={styles.tileName}>Covered Area</Text>
                    </TouchableOpacity>
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
        marginBottom: 8,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.pureBlack,
        width: 180,
        height: 40
    },
    detailTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.pureBlack,
        width: 100,
    },
    detailValue: {
        fontSize: 16,
        color: '#666666',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',

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

export default RouteScreen;