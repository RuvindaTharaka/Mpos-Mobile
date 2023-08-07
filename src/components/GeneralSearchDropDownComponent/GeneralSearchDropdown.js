import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import colors from '../../colors';

const GeneralSearchDropDown = ({ items, topTitle }) => {
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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/images/search.png')}
                        style={styles.tileIcon}
                    />
                    <Text style={styles.headerText}>
                        {selectedItem || (showDropdown ? topTitle : topTitle)}
                    </Text>
                </View>

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

        height: 50,
        borderWidth: 1,
        borderColor: colors.pureBlack,
        borderRadius: 5,
        backgroundColor: '#f2f2f2',
        zIndex: 2,
        opacity: 2,
        margin: 5
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

export default GeneralSearchDropDown;
