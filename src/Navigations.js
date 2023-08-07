/*
    Author : Ruvi
    Email  : ruvi.ijse@gmail.com
*/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YourScreenComponent from './Screens/HomeScreen/YourScreenComponent';
import LogInScreen from '../src/Screens/LogInScreen/LogInScreen';
import HomeScreen from '../src/Screens/HomeScreen/HomeScreen';
import ViewProfileScreen from './Screens/ViewProfileScreen/ViewProfileScreen';
import RouteScreen from './Screens/RouteScreen/RouteScreen';
import TripScreen from './Screens/TripScreen/TripScreen';
import FindOutletScreen from './Screens/OutletScreen/FindOutletScreen';
import CustomerScreen from './Screens/CustomerScreen/CustomerScreen';
import RequestScreen from './Screens/RequestScreen/RequestScreen';
import ViewStockScreen from './Screens/ViewStockScreen/ViewStockScreen';
import RouteCoveredAreaScreen from './Screens/RouteScreen/RouteCoveredAreaScreen';
import OutletScreen from './Screens/OutletScreen/OutletScreen';
import SaleScreen from './Screens/SaleScreen/SaleScreen';
import PaymentScreen from './Screens/PaymentScreen/PaymentScreen';
import ReturnScreen from './Screens/ReturnScreen/ReturnScreen';
import AddStockScreen from './Screens/AddStockScreen/AddStockScreen';
import PayNowScreen from './Screens/PaymentScreen/PayNowScreen';
import BillScreen from './Screens/PaymentScreen/BillScreen';
import OutletPayNowScreen from './Screens/PaymentScreen/OutletPayNowScreen';
import AddItemReturnScreen from './Screens/ReturnScreen/AddItemReturnScreen';
import SettleReturnScreen from './Screens/ReturnScreen/SettleReturnScreen';

const Stack = createNativeStackNavigator();

function Navigations() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={LogInScreen}>
                <Stack.Screen name="LogInScreen" component={LogInScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ViewProfileScreen" component={ViewProfileScreen} />
                <Stack.Screen name="RouteScreen" component={RouteScreen} />
                <Stack.Screen name="TripScreen" component={TripScreen} />
                <Stack.Screen name="FindOutletScreen" component={FindOutletScreen} />
                <Stack.Screen name="CustomerScreen" component={CustomerScreen} />
                <Stack.Screen name="RequestScreen" component={RequestScreen} />
                <Stack.Screen name="ViewStockScreen" component={ViewStockScreen} />
                <Stack.Screen name="RouteCoveredAreaScreen" component={RouteCoveredAreaScreen} />
                <Stack.Screen name="OutletScreen" component={OutletScreen} />
                <Stack.Screen name="SaleScreen" component={SaleScreen} />
                <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
                <Stack.Screen name="ReturnScreen" component={ReturnScreen} />
                <Stack.Screen name="AddStockScreen" component={AddStockScreen} />
                <Stack.Screen name="PayNowScreen" component={PayNowScreen} />
                <Stack.Screen name="BillScreen" component={BillScreen} />
                <Stack.Screen name="OutletPayNowScreen" component={OutletPayNowScreen} />
                <Stack.Screen name="AddItemReturnScreen" component={AddItemReturnScreen} />
                <Stack.Screen name="SettleReturnScreen" component={SettleReturnScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigations;