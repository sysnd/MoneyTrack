import { Component } from "react";
import { View, Text, Button, Picker } from "react-native";
import React from "react";
import { Input } from "react-native-elements";
import Category from "../../models/category.model";
import DatePicker from 'react-native-datepicker'


export default class ExpenseForm extends Component<{}, any> {

    static navigationOptions = {
        title: 'Expense',
        headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
      };
    categories: Category[];
    constructor(props: any) {
        super(props);
        this.categories = [
            new Category({ name: "Food" }),
            new Category({ name: "Transport" })
        ];
        this.state = {
            category: "Food",
            date: ''
        }
    }
    render() {
        return (
            <View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ textAlignVertical: "bottom" }}>Title</Text>
                    <Input></Input>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ textAlignVertical: "bottom" }}>Category</Text>
                    <Picker selectedValue={this.state.category}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ category: itemValue })} >
                        {this.categories.map((c) => {
                            return <Picker.Item label={c.Name}></Picker.Item>
                        })}
                    </Picker>
                </View>

                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ textAlignVertical: "bottom" }}>Date</Text>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.date} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-01-2016"
                        maxDate="01-01-2020"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />
                </View>

                <View>
                    <Text style={{ textAlignVertical: "bottom" }}>Total</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Input></Input>
                    </View>
                    <Button title="Take photo" onPress={() => { }}></Button>
                </View>
            </View>
        );
    }
}