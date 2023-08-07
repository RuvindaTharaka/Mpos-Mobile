import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import colors from '../../colors';

const GeneralDropDown = ({ items, topItem }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    const handleItemPress = (item) => {
        setSelectedItem(item);
        setShowDropdown(false);
    };

    return (
        <View style={styles.dropdownContainer}>
            <TouchableOpacity onPress={toggleDropdown} style={styles.header}>

                <Text style={styles.headerText}>
                    {selectedItem || (showDropdown ? topItem : topItem)}
                </Text>
                <Image
                    source={showDropdown ? require('../../assets/images/arrow-up.png') : require('../../assets/images/arrow-down.png')}
                    style={styles.arrowIcon}
                />
            </TouchableOpacity>
            {showDropdown && (
                <View style={styles.dropdownList}>
                    {items.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.item} onPress={() => handleItemPress(item)}>
                            <Text style={styles.itemText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    dropdownContainer: {
        position: 'relative',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: colors.pureBlack,
        borderRadius: 5,
        backgroundColor: '#f2f2f2'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 50
    },
    headerText: {
        fontSize: 20,
        padding: 5
    },
    arrowIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    dropdownList: {
        position: 'absolute',
        top: 35,
        right: 0,
        left: 0,
        backgroundColor: '#f2f2f2',
        borderRadius: 4,
        zIndex: 2,
        opacity: 2
    },
    item: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    itemText: {
        fontSize: 20,
        padding: 5,
    },
});

export default GeneralDropDown;
