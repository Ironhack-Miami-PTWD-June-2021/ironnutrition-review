import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/food-box/Foodbox';
import AddFoodForm from './components/add-food-form/AddFoodForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodsList: foods,
      foodToShow: foods,
      showFoodForm: false,
      totalCalories: []
    }
  }

  displayFood = () => {
    return this.state.foodToShow.map((food, i) => {
      return <FoodBox food={food} key={i} />
    })
  }

  showAddFoodForm = () => {
    this.setState({showFoodForm: !this.state.showFoodForm});
  }

  getAddFoodForm = () => {
    // return (
    //   <div>
    //     <input type="text" onChange={this.onChange} name="name" placeholder='Name' />
    //     <input type="text" onChange={this.onChange} name="calories" placeholder='Calories' />
    //     <input type="text" onChange={this.onChange} name='image' placeholder='Image' />
    //     <button onClick={this.submitNewFood} >Submit</button>
    //   </div>
    // )
    return <AddFoodForm changeStateInParent={this.onChange} submit={this.submitNewFood} />
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  submitNewFood = () => {
    const { name, calories, image } = this.state;
    const newFood = {name, calories, image, quantity: 0};

    // this.setState((previousState) => {
    //   foodsList: [newFood, ...previousState.foodsList],
    //   foodToShow: [newFood, ...previousState.foodToShow]
    // })
    const previousFoodsList = [...this.state.foodsList];
    const previousShowFoods = [...this.state.foodToShow];

    this.setState({foodsList: [newFood, previousFoodsList], foodToShow: [newFood, ...previousShowFoods]});
    this.showAddFoodForm();
  }

  render() {
    return (
      <div className="App">
        <h1>Iron Nutrition</h1>
        <button onClick={this.showAddFoodForm}>{this.state.showFoodForm ? 'Hide' : 'Add'} Food Form</button>
        {this.state.showFoodForm && this.getAddFoodForm()}
        <div className="food-container">
          <div className="column">
            {this.displayFood()}
          </div>
  
          <div className="column">
            <h2>Future List</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
