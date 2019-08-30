import { createDrawerNavigator, createStackNavigator, DrawerActions, createAppContainer } from "react-navigation";
import AlertSet from "./alerts/alert.upsert.component";
import BudgetSet from "./budgets/budget.upsert.component";
import React from "react";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
    const DrawerNavigator = createDrawerNavigator({
        // Home: {
        //   screen: HomeScreen, 
        //   navigationOptions: ({ navigation }) => ({
        //     title: 'Home Screen', 
        //     drawerLabel: 'Home',
        //     // drawerIcon: () => (
        //     //   <Ionicons name="ios-home" size={20} />
        //     // )
        //   })
        // },
        Alerts: {
            screen: AlertSet,
            navigationOptions: ({ navigation }) => ({
                title: 'Alert Screen',
                drawerLabel: 'Alert',
                // drawerIcon: () => (
                //   <Ionicons name="ios-person" size={20} />
                // )
            })
        },
        Settings: {
            screen: BudgetSet,
            navigationOptions: ({ navigation }) => ({
                // drawerIcon: () => (
                //   <Ionicons name="ios-settings" size={20} />
                // )
            })
        }
    });


    const StackNavigator = createStackNavigator({
        DrawerNavigator: {
            screen: DrawerNavigator,
            navigationOptions: ({ navigation }) => {
                const { state } = navigation;

                if (state.isDrawerOpen) {
                    return {
                        headerLeft: ({ titleStyle }) => (
                            <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
                                <Icon name="close" size={36} color={titleStyle} />
                            </TouchableOpacity>
                        )
                    }
                }
                else {
                    return {
                        headerLeft: ({ titleStyle }) => (
                            <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
                                <Icon name="menu" size={32} color={titleStyle} />
                            </TouchableOpacity>
                        )
                    }
                }
            }
        }
    })

const TestNav = createAppContainer(StackNavigator);

export default TestNav;
