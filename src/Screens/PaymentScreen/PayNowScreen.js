import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../colors';
import Header from '../../components/HeaderComponent/Header';
import GeneralButton from '../../components/GeneralButtonComponent/GeneralButton';

const PayNowScreen = ({ navigation }) => {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');

    /* handle bill */
    const [invoiceNo, setInvoiceNo] = useState('INV001');
    const [totalItems, setTotalItems] = useState(0);
    const [totalQty, setTotalQty] = useState(0);
    const [grossTotal, setGrossTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [netTotal, setNetTotal] = useState(0);
    const [dateTime, setDateTime] = useState('');
    const [remain, setRemain] = useState('');

    // Payment Option States
    const [showCashDrawer, setShowCashDrawer] = useState(false);
    const [showChequeDrawer, setShowChequeDrawer] = useState(false);
    const [showCardDrawer, setShowCardDrawer] = useState(false);
    const [showExcessDrawer, setShowExcessDrawer] = useState(false);

    // State for payment inputs
    const [cashAmount, setCashAmount] = useState('');
    const [chequeNo, setChequeNo] = useState('');
    const [chequeDate, setChequeDate] = useState('');
    const [chequeAmount, setChequeAmount] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardDate, setCardDate] = useState('');
    const [cardCVC, setCardCVC] = useState('');
    const [excessAmount, setExcessAmount] = useState('');

    /* Stock Items */
    const [stockList, setStockList] = useState([
        {
            id: '1',
            itemName: 'Item 1',
            itemId: 'ITM001',
            batchNo: 'B12345',
            expireDate: '2023-08-15',
            manufactureDate: '2023-07-31',
            unitPrice: 10.99,
            itemQuantity: 50,
            totalPrice: 0 // Calculate the initial totalPrice
        },
        {
            id: '2',
            itemName: 'Item 2',
            itemId: 'ITM002',
            batchNo: 'B12345',
            expireDate: '2023-08-15',
            manufactureDate: '2023-07-31',
            unitPrice: 10.99,
            itemQuantity: 1000,
            totalPrice: 0 // Calculate the initial totalPrice
        },
        // Add more sample data as needed
    ]);
    /* Payment Items */
    const [paymentList, setPaymentList] = useState([
        {
            invoiceNo: 'INV001',
            paymentType: 'Cash',
            dateTime: '2023-08-03 10:30 AM',
            amount: 100,
        },
        {
            invoiceNo: 'INV002',
            paymentType: 'Card',
            dateTime: '2023-08-03 11:45 AM',
            amount: 50,
        },
        // Add more payment data as needed
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

    /* Calculate Total Quantity, Gross Total, Discount, Net Total, and Remain */
    useEffect(() => {
        // Calculate Total Items and Total Quantity based on stockList
        let totalItemsCount = 0;
        let totalQuantityCount = 0;
        stockList.forEach((item) => {
            totalItemsCount += 1;
            totalQuantityCount += item.itemQuantity;
        });
        setTotalItems(totalItemsCount);
        setTotalQty(totalQuantityCount);

        // Calculate Gross Total, Discount, and Net Total based on your business logic
        // For demonstration purposes, I'll set random values here
        const randomGrossTotal = Math.floor(Math.random() * 1000);
        const randomDiscount = Math.floor(randomGrossTotal * 0.1);
        const randomNetTotal = randomGrossTotal - randomDiscount;
        setGrossTotal(randomGrossTotal);
        setDiscount(randomDiscount);
        setNetTotal(randomNetTotal);

        // Get current date and time and set it as DateTime
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();
        setDateTime(formattedDate);

        // Additional calculations if needed (e.g., Remain calculation)
        // const remainValue = calculateRemain(); // Implement your own calculation function
        // setRemain(remainValue);
    }, []);

    /* Navigation Bar Functions */
    const handleBackPress = () => {
        navigation.navigate('OutletScreen');
    };

    const handleHomePress = () => {
        navigation.navigate('HomeScreen');
    };

    const handleProfilePress = () => {
        navigation.navigate('ViewProfileScreen');
    };

    const handlePayBtn = () => {
        // Implement the logic to handle the payment based on the selected option and the entered amount
        // For now, you can console.log the payment details
        console.log('Payment Details:');
        console.log('Cash Amount:', cashAmount);
        console.log('Cheque No:', chequeNo);
        console.log('Cheque Date:', chequeDate);
        console.log('Cheque Amount:', chequeAmount);
        console.log('Card Number:', cardNumber);
        console.log('Card Date:', cardDate);
        console.log('Card CVC:', cardCVC);
        console.log('Excess Amount:', excessAmount);

        // Reset the payment inputs after payment
        setCashAmount('');
        setChequeNo('');
        setChequeDate('');
        setChequeAmount('');
        setCardNumber('');
        setCardDate('');
        setCardCVC('');
        setExcessAmount('');

        // Close all payment drawers after payment
        setShowCashDrawer(false);
        setShowChequeDrawer(false);
        setShowCardDrawer(false);
        setShowExcessDrawer(false);
    };





    return (
        <View style={styles.container}>
            <Header
                title="Pay Now"
                onBackPress={handleBackPress}
                onHomePress={handleHomePress}
                onProfilePress={handleProfilePress}
            />
            <ScrollView style={{ flex: 1 }}>


                <GeneralButton
                    color="#FFFFFF"
                    backgroundColor={colors.lightPink}
                    onPress={handlePayBtn}
                    text="Pay"
                    icon={require('../../assets/images/tick.png')}
                />

                <View style={{ backgroundColor: '#FFFFFF', margin: 10, borderRadius: 5, padding: 10, borderWidth: 1, borderColor: 'black' }}>

                    <Text style={styles.invoiceNum}>{invoiceNo}</Text>
                    <View style={styles.middleContainer}>
                        {/* Left Side */}
                        <View style={styles.leftSide}>
                            <View style={styles.row}>
                                <Text style={styles.detailTitle}>Total Items</Text>
                                <Text style={styles.detailValue}>:{totalItems}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.detailTitle}>Total Qty</Text>
                                <Text style={styles.detailValue}>:{totalQty}</Text>
                            </View>
                        </View>

                        {/* Right Side */}
                        <View style={styles.rightSide}>
                            <Image
                                source={require('../../assets/images/dollar.png')}
                                style={styles.dollarIcon}
                            />
                        </View>
                    </View>

                    {/* Merged Cell */}
                    <View style={styles.mergedCell}>
                        <Text style={styles.mergedCellTitle}>Date Time</Text>
                        <Text style={styles.mergedCellValue}>:{dateTime}</Text>
                    </View>
                    <View style={styles.mergedCell}>
                        <Text style={styles.mergedCellTitle}>Gross Total</Text>
                        <Text style={styles.mergedCellValue}>:{grossTotal}</Text>
                    </View>
                    <View style={styles.mergedCell}>
                        <Text style={styles.mergedCellTitle}>Discount</Text>
                        <Text style={styles.mergedCellValue}>:{discount}</Text>
                    </View>
                    <View style={styles.mergedCell}>
                        <Text style={styles.mergedCellTitle}>Net Total</Text>
                        <Text style={styles.mergedCellValue}>:{netTotal}</Text>
                    </View>
                    <View style={styles.remainCell}>
                        <Text style={styles.remainCellTitle}>Remain Rs</Text>
                        <Text style={styles.remainCellValue}>:{remain}</Text>
                    </View>



                </View>

                {/* Payment Options */}
                <View style={styles.paymentOptionsContainer}>
                    <TouchableOpacity
                        style={styles.paymentOptionCard}
                        onPress={() => {
                            setShowCashDrawer(true);
                            setShowChequeDrawer(false);
                            setShowCardDrawer(false);
                            setShowExcessDrawer(false);
                        }}
                    >
                        <Image
                            source={require('../../assets/images/cash.png')}
                            style={styles.tileIcon}
                        />
                        <Text style={styles.paymentOptionText}>Cash</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.paymentOptionCard}
                        onPress={() => {
                            setShowCashDrawer(false);
                            setShowChequeDrawer(true);
                            setShowCardDrawer(false);
                            setShowExcessDrawer(false);
                        }}
                    >
                        <Image
                            source={require('../../assets/images/cheque.png')}
                            style={styles.tileIcon}
                        />
                        <Text style={styles.paymentOptionText}>Cheque</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.paymentOptionCard}
                        onPress={() => {
                            setShowCashDrawer(false);
                            setShowChequeDrawer(false);
                            setShowCardDrawer(true);
                            setShowExcessDrawer(false);
                        }}
                    >
                        <Image
                            source={require('../../assets/images/outlet.png')}
                            style={styles.tileIcon}
                        />
                        <Text style={styles.paymentOptionText}>Card</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.paymentOptionCard}
                        onPress={() => {
                            setShowCashDrawer(false);
                            setShowChequeDrawer(false);
                            setShowCardDrawer(false);
                            setShowExcessDrawer(true);
                        }}
                    >

                        <Image
                            source={require('../../assets/images/excess.png')}
                            style={styles.tileIcon}
                        />
                        <Text style={styles.paymentOptionText}>Excess</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ flex: 1, backgroundColor: colors.backgroundGrey, borderRadius: 10 }}>

                    {/* Drawers for Payment Options */}
                    {showCashDrawer && (
                        <View style={styles.paymentDrawer}>
                            <Text style={styles.paymentLabel}>Amount</Text>
                            <TextInput
                                style={styles.paymentInput}
                                placeholder="Enter amount"
                                keyboardType="numeric"
                                value={cashAmount}
                                onChangeText={setCashAmount}
                            />
                            <GeneralButton
                                color="#FFFFFF"
                                backgroundColor={colors.lightPink}
                                onPress={handlePayBtn}
                                text="Pay"
                            />
                        </View>
                    )}

                    {showChequeDrawer && (
                        <View style={styles.paymentDrawer}>
                            <Text style={styles.paymentLabel}>Cheque No</Text>
                            <TextInput
                                style={styles.paymentInput}
                                placeholder="Enter cheque number"
                                value={chequeNo}
                                onChangeText={setChequeNo}
                            />
                            <Text style={styles.paymentLabel}>Cheque Date</Text>
                            <TextInput
                                style={styles.paymentInput}
                                placeholder="Enter cheque date"
                                value={chequeDate}
                                onChangeText={setChequeDate}
                            />
                            <Text style={styles.paymentLabel}>Amount</Text>
                            <TextInput
                                style={styles.paymentInput}
                                placeholder="Enter amount"
                                keyboardType="numeric"
                                value={chequeAmount}
                                onChangeText={setChequeAmount}
                            />
                            <GeneralButton
                                color="#FFFFFF"
                                backgroundColor={colors.lightPink}
                                onPress={handlePayBtn}
                                text="Pay"
                            />
                        </View>
                    )}

                    {showCardDrawer && (
                        <View style={styles.paymentDrawer}>
                            <Text style={styles.paymentLabel}>Card Number</Text>
                            <TextInput
                                style={styles.paymentInput}
                                placeholder="Enter card number"
                                value={cardNumber}
                                onChangeText={setCardNumber}
                            />
                            <Text style={styles.paymentLabel}>Expiry Date</Text>
                            <TextInput
                                style={styles.paymentInput}
                                placeholder="Enter expiry date"
                                value={cardDate}
                                onChangeText={setCardDate}
                            />
                            <Text style={styles.paymentLabel}>CVC</Text>
                            <TextInput
                                style={styles.paymentInput}
                                placeholder="Enter CVC"
                                value={cardCVC}
                                onChangeText={setCardCVC}
                            />
                            <GeneralButton
                                color="#FFFFFF"
                                backgroundColor={colors.lightPink}
                                onPress={handlePayBtn}
                                text="Pay"
                            />
                        </View>
                    )}

                    {showExcessDrawer && (
                        <View style={styles.paymentDrawer}>
                            <Text style={styles.paymentLabel}>Amount</Text>
                            <TextInput
                                style={styles.paymentInput}
                                placeholder="Enter excess amount"
                                keyboardType="numeric"
                                value={excessAmount}
                                onChangeText={setExcessAmount}
                            />
                            <GeneralButton
                                color="#FFFFFF"
                                backgroundColor={colors.lightPink}
                                onPress={handlePayBtn}
                                text="Pay"
                            />
                        </View>
                    )}



                    {/* Payment Cards */}
                    {paymentList.map((payment, index) => (
                        <TouchableOpacity key={index} style={styles.paymentCard}>
                            <View style={styles.paymentCardRow}>
                                <Text style={styles.paymentCardLabel}>Invoice No:</Text>
                                <Text style={styles.paymentCardValue}>{payment.invoiceNo}</Text>
                            </View>
                            <View style={styles.paymentCardRow}>
                                <Text style={styles.paymentCardLabel}>Payment Type:</Text>
                                <Text style={styles.paymentCardValue}>{payment.paymentType}</Text>
                            </View>
                            <View style={styles.paymentCardRow}>
                                <Text style={styles.paymentCardLabel}>DateTime:</Text>
                                <Text style={styles.paymentCardValue}>{payment.dateTime}</Text>
                            </View>
                            <View style={styles.paymentCardRow}>
                                <Text style={styles.paymentCardLabel}>Amount:</Text>
                                <Text style={styles.paymentCardValue}>{payment.amount}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    invoiceNum: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    middleContainer: {
        flexDirection: 'row',
        backgroundColor: "#FFFFFF",

    },
    row: {
        flexDirection: 'row'
    },
    leftSide: {
        flex: 4
    },
    rightSide: {
        flex: 1,
    },
    detailTitle: {
        fontSize: 14,
        color: colors.pureBlack,
        fontWeight: '400',
        width: 100,
        color: colors.pureBlack
    },
    detailValue: {
        fontSize: 14,
        color: colors.pureBlack
    },
    mergedCell: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    remainCell: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderTopWidth: 1,
        borderTopColor: 'black',
        fontSize: 18,
        marginVertical: 5
    },
    mergedCellTitle: {
        fontSize: 14,
        fontWeight: '400',
        marginRight: 4,
        color: colors.pureBlack,
        width: 95,
    },
    mergedCellValue: {
        fontSize: 14,
        flex: 1,
        color: colors.pureBlack
    },
    remainCellTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginRight: 4,
        color: colors.pureBlack,
        width: 95,
    },
    remainCellValue: {
        fontSize: 18,
        flex: 1,
        color: colors.pureBlack
    },
    dollarIcon: {
        width: 35,
        height: 35
    },
    paymentOptionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 10,
        marginVertical: 10
    },
    paymentOptionCard: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        width: 80,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center'
    },
    paymentOptionText: {
        color: colors.pureBlack,
        fontSize: 16,
        fontWeight: '400',
    },
    paymentDrawer: {
        backgroundColor: colors.lightGrey,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        flex: 1
    },
    paymentLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    paymentInput: {
        borderWidth: 1,
        borderColor: colors.lightGrey,
        borderRadius: 5,
        padding: 8,
        marginBottom: 20,
    },
    paymentCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        margin: 10,
    },
    paymentCardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    paymentCardLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.pureBlack,
    },
    paymentCardValue: {
        fontSize: 16,
        color: colors.pureBlack,
    },
    tileIcon: {
        width: 45,
        height: 45
    }
});


export default PayNowScreen;