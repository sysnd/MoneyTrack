import { Component } from "react";
import React from "react";
import { ListItem, Button } from "react-native-elements";
import { View } from "react-native";

export default class CategoryAdd extends Component{
    render(){
        return (
            <View>
                <Button type="clear" containerStyle={{backgroundColor:'#ffffff', alignItems:'baseline'}} 
                icon={{name:'add-circle-outline', color:'#317447'}} title='Add' />
            </View>
        );
    }
}