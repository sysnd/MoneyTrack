import { Component } from "react";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ListItem, Icon } from 'react-native-elements'
import { BaseModel } from "../../models/base.model";

interface ICategoryDetailProps { title: string }
interface ICategoryDetailState { colorCode: string }

export default class CategoryDetail extends Component<ICategoryDetailProps, ICategoryDetailState> {
    // styles = StyleSheet.create({
    //     subtitleView: {
    //         flexDirection: 'row',
    //         paddingLeft: 10,
    //         paddingTop: 5
    //     },
    //     ratingImage: {
    //         height: 19.21,
    //         width: 100
    //     },
    //     ratingText: {
    //         paddingLeft: 10,
    //         color: 'grey'
    //     }
    // })
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
    constructor(props: any) {
        super(props);
        this.state = {
            colorCode: this.SetColor()
        }
    }
    SetColor = () => {
        var colorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        return colorCode;
    }
    render() {
        return (
            <View>
                <ListItem leftIcon={{name:'lens', color:this.state.colorCode}} title={this.props.title} />
            </View>
        );
    }
}