import React from "react";
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield:''
        }
    }
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value })
    }
    render(){
        const filteredRobots= this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return(
            <div className="tc">
                <h1>RoboFriends</h1>

                <scroll>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
                
                </scroll>
            </div>
        )
    };
}
export  default App;