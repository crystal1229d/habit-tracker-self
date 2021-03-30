import React, { Component } from 'react';
import Habit from './habit';


class Habits extends Component {
    
    handleIncrement = (habit) => {

    };

    handleDecrement = (habit) => {

    };

    handleDelete = (habit) => {

    };

    render() {

        console.log(this.props.habits);
        return (
            <>
                <ul>
                    {this.props.habits.map(habit => (
                        <li>{habit.name}</li>
                    ))}
                </ul>
                {/* <Habit /> */}
            </>
        );
    }
}

export default Habits;