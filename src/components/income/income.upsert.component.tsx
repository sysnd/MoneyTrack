import { Component } from "react";
import { Type } from "../../models/type.model";
import React from "react";
import { View, Picker, Text } from "react-native";
import { Input } from "react-native-elements";

export default class IncomeSet extends Component<{}, any>{

    types: Type[];
    constructor(props: any) {
        super(props);
        this.types = [
            new Type("Weekly"),
            new Type("Monthly")
        ];
        this.state = {
            type: "Monthly"
        }
    }
    render() {
        var types = this.types.map((t) => {
            return <Picker.Item label={t.Name}></Picker.Item>
        })
        return (
            <View>
                <Text>Please select an income type:</Text>
                <Picker selectedValue={this.state.type}
                    style={{ height: 50, width: 200 }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ type: itemValue })} >
                    {this.types.map((t) => {
                        return <Picker.Item label={t.Name}></Picker.Item>
                    })}
                </Picker>
                <Text>Amount:</Text>
                <Input></Input>
            </View>
        );
    }
}