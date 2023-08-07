import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../colors';

const OutletCard = ({ showTriangle, backgroundColor, color, outletName, clickable, onPress, telephone1, telephone2, customer, route, routeIndex, routeName, city, type, address }) => {
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: backgroundColor }]}
            disabled={!clickable}
            onPress={() => onPress && onPress({ outletName, telephone1, telephone2, customer, route, routeIndex, routeName, city, type, address })}
        >
            {showTriangle ? (
                <View style={styles.triangleGrey}></View>
            ) : (
                <View></View>
            )
            }

            <Text style={[styles.outletName, { color: color }]}>{outletName}</Text>
            <View style={styles.middleContainer}>
                {/* Left Side */}
                <View style={styles.leftSide}>
                    <View style={styles.row}>
                        <Text style={[styles.detailTitle, { color: color }]}>Tele 1</Text>
                        <Text style={[styles.detailValue, { color: color }]}>:{telephone1}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={[styles.detailTitle, { color: color }]}>Tele 2</Text>
                        <Text style={[styles.detailValue, { color: color }]}>:{telephone2}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={[styles.detailTitle, { color: color }]}>Customer</Text>
                        <Text style={[styles.detailValue, { color: color }]}>:{customer}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={[styles.detailTitle, { color: color }]}>Route</Text>
                        <Text style={[styles.detailValue, { color: color }]}>:{route}</Text>
                    </View>
                </View>

                {/* Right Side */}
                <View style={styles.rightSide}>
                    <View style={styles.row}>
                        <Text style={[styles.detailTitle, { color: color }]}>RouteId</Text>
                        <Text style={[styles.detailValue, { color: color }]}>:{routeIndex}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={[styles.detailTitle, { color: color }]}>Route</Text>
                        <Text style={[styles.detailValue, { color: color }]}>:{routeName}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={[styles.detailTitle, { color: color }]}>City</Text>
                        <Text style={[styles.detailValue, { color: color }]}>:{city}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={[styles.detailTitle, { color: color }]}>Type</Text>
                        <Text style={[styles.detailValue, { color: color }]}>:{type}</Text>
                    </View>
                </View>
            </View>
            {/* Merged Cell */}
            <View style={styles.mergedCell}>
                <Text style={[styles.mergedCellTitle, { color: color }]}>Address:</Text>
                <Text style={[styles.mergedCellValue, { color: color }]}>{address}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '96%',
        height: 220,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        flexDirection: 'column'
    },
    middleContainer: {
        flexDirection: 'row'
    },
    row: {
        flexDirection: 'row'
    },
    outletName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    leftSide: {
        flex: 1
    },
    rightSide: {
        flex: 1,
    },
    detailTitle: {
        fontSize: 14,
        color: colors.pureBlack,
        fontWeight: 'bold',
        marginBottom: 4,
        width: 65
    },
    detailValue: {
        fontSize: 14,
        marginBottom: 8,
    },
    mergedCell: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    mergedCellTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 4,
    },
    mergedCellValue: {
        fontSize: 16,
        flex: 1,
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

export default OutletCard;
