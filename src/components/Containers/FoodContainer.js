import Food from "../foods/Food";
import React from 'react';
import Bacon from "../../images/food/bacon/Bacon.png";
import Lettuce from "../../images/food/lettuce/Lettuce.png";
import Bread from "../../images/food/bread/Bread.png";
export default function FoodContainer(props){
    return (
        <React.Fragment>
            <Food name="Bacon" picture={Bacon}></Food>
                    <Food name="Lettuce" picture={Lettuce}></Food>
                    <Food name="Bread" picture={Bread}></Food>
        </React.Fragment>
    )
}
