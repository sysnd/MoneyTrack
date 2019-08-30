import { Component } from "react";
import { Type } from "../../models/type.model";
import React from "react";
import { View, Picker, Text } from "react-native";
import { Input } from "react-native-elements";

export default class AlertSet extends Component<{},any>{

    static navigationOptions = {
        title: 'Alerts',
        headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
      };
    types: Type[];
    constructor(props: any) {
        super(props);
        this.types = [
            new Type("Weekly"),
            new Type("Monthly")
        ];
        this.state = {
            type: "Monthly",
            percentage: 80
        }
    }
    render() {
        return (
            <View>
                <Text>Please select a budget type:</Text>
                <Picker selectedValue={this.state.type}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ type: itemValue })} >
                    {this.types.map((t) => {
                        return <Picker.Item label={t.Name}></Picker.Item>
                    })}
                </Picker>
                <Text>Amount:</Text>
                <Input onChangeText={(percentage)=>{this.setState({percentage:percentage})}}
                value={this.state.percentage}></Input>
            </View>
        );
    }
}