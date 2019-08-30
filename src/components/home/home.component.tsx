import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerActions } from "react-navigation";
import BudgetSet from "../budgets/budget.upsert.component";
import { Icon } from "react-native-elements";
import AlertSet from "../alerts/alert.upsert.component";
import IncomeSet from "../income/income.upsert.component";
import CategoryList from "../categories/category.list.component";
import ExpenseForm from "../expense/expense.form.component";

class HomeScreen extends Component<any,{}> {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
      };
    
    
  render() {
    return (
    //   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //     <Text>Home Screen</Text>
    //     <Button
    //       title="Go to Details"
    //       onPress={() => this.props.navigation.navigate('Budget')}
    //     />
    //   </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>
      </View>
    );
  }
}
const DrawerNavigator = createDrawerNavigator({
  // AppNavigator:{

  // },
    Home: 
    {
      screen:HomeScreen,
    },
    Expense: ExpenseForm,
    Budget: BudgetSet,
    Alerts: AlertSet,
    Income: IncomeSet,
    Categories: CategoryList
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#58ff79',
    contentOptions: {
      activeTintColor: '#000',
      activeBackgroundColor: '#58ff79'
    },
    // navigationOptions:{
    //   title: activeItemKey
    // }
  });
// DrawerNavigator.navigationOptions={
//   title: DrawerNavigator.props.activeItemKey
// };
const AppNavigator = createStackNavigator({
    DrawerNavigator:{
        screen: DrawerNavigator, 
    navigationOptions: ({ navigation }) => {
      const { state } = navigation;

      if(state.isDrawerOpen) {
        return {
          headerLeft: ({titleStyle}) => (
            <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
                                <Icon name="close" size={36} color={titleStyle} />
            </TouchableOpacity>
          )          
        }
      }
      else {
        return {
          headerLeft: ({titleStyle}) => (
            <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
                                <Icon name="menu" size={36} color={titleStyle} />
            </TouchableOpacity>
          )
        }
      }
    },
//     {
//   Home: HomeScreen,
//   Budget: BudgetSet
// },
// {
//     initialRouteName:'Home',
//     defaultNavigationOptions: {
//         headerStyle: {
//           backgroundColor: '#f4511e'
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold'
//         },
//         headerLeft:(
//             <Button 
//             onPress={()=>console.log('this is a button')}
//             title="Info"
//             color="#fff"
//             />
//         )
//       }
}});

const AppContainer = createAppContainer(AppNavigator);
const DrawerContainer = createAppContainer(DrawerNavigator);
export {DrawerContainer};
export default AppContainer;