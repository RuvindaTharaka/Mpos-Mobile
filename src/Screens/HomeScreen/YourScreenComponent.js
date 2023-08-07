import React from 'react';
import { View, Image } from 'react-native';
import Header from '../../components/HeaderComponent/Header';
import GeneralButton from '../../components/GeneralButtonComponent/GeneralButton';
import GeneralDropDown from '../../components/GeneralDropDownComponent/GeneralDropDown';

const YourScreenComponent = ({ navigation }) => {
    const handleBackPress = () => {
        // Handle navigation back logic here

    };

    const handleHomePress = () => {
        // Handle navigation to home screen logic here
        // For example: navigation.navigate('Home');
    };

    const handleProfilePress = () => {
        // Handle navigation to profile screen logic here
        // For example: navigation.navigate('Profile');
    };

    const handleButtonPress = () => {
        // Handle button press logic here
    };

    const dropdownItems = ['Item 1', 'Item 2', 'Item 3'];
    return (
        <View>
            <Header
                title="Your Screen Title"
                onBackPress={handleBackPress}
                onHomePress={handleHomePress}
                onProfilePress={handleProfilePress}
            />
            {/* Your screen content goes here */}
            <GeneralButton
                color="#007BFF"
                backgroundColor="#FFFFFF"
                onPress={handleButtonPress}
                text="Click Me!"
                icon={require('../../assets/images/back.png')} // Replace with the actual path to your icon
            />

            <GeneralButton
                color="#FF6347"
                backgroundColor="#FFFFFF"
                onPress={handleButtonPress}
                text="Another Button"
                icon={require('../../assets/images/home.png')} // Replace with the actual path to your icon
            />

            <GeneralButton
                color="#6C757D"
                backgroundColor="#FFFFFF"
                onPress={handleButtonPress}
                text="Button without Icon"
            // No icon prop provided, so the button will have no icon
            />

            <GeneralDropDown items={dropdownItems} title={Routes} />
        </View>
    );
};

export default YourScreenComponent;
