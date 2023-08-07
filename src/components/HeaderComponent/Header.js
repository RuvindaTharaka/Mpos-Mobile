import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../../colors';


const Header = ({ title, user, onBackPress, onHomePress, onProfilePress }) => {

    return (
        <View style={styles.headerContainer}>
            <View style={styles.leftIconsContainer}>
                {onBackPress && (
                    <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
                        <Image
                            source={require('../../assets/images/back.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                )}
                {onHomePress && (
                    <TouchableOpacity onPress={onHomePress} style={styles.iconContainer}>
                        <Image
                            source={require('../../assets/images/home.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                )}
            </View>
            <Text style={styles.title}>{title}</Text>
            {onProfilePress && (
                <TouchableOpacity onPress={onProfilePress} style={styles.profileIconContainer}>
                    <Image
                        source={require('../../assets/images/sample-profile-img.png')}
                        style={styles.profileIcon}
                    />

                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = {
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 50,
        backgroundColor: colors.primaryBlue
    },

    leftIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(182,179,179,.4)',
        width: '87px',
        height: '32px',
        borderRadius: 5

    },

    iconContainer: {
        padding: 8,
    },

    icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: colors.headerFontColor
    },

    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 5,
        resizeMode: 'cover',
    }
};

export default Header;
