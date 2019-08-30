import { Component } from "react";
import React from "react";
import CategoryDetail from "./category.detail.component";
import CategoryAdd from "./category.add.component";

export default class CategoryList extends Component {

    categories = [
        {
            name: 'Food'
        },
        {
            name: 'Transport'
        }
    ];

    render() {
        return (
            this.categories.map((cat) => (
                <CategoryDetail title={cat.name} />
            )).concat(<CategoryAdd />)

        );
    }
}