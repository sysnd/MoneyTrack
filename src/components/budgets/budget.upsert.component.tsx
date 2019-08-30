import { Component } from "react";
import { Text, Input } from "react-native-elements";
import React from "react";
import { View, Picker, Button } from "react-native";
import { Type } from "../../models/type.model";

export default class BudgetSet extends Component<any, any> {

    static navigationOptions = {
        title: 'Bugdet',
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
            type: "Monthly"
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
                <Input></Input>
                <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Budget')}
        />
            </View>
        );
    }
}