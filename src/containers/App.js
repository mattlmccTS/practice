import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'
// STATE - the description of the app. It is an object that describes the application  
// State is able to change, such as changing what is searched
// PROPS are simply things that come out of STATE
// STATE >> Props
// Parent feeds state into a child component --> As soon as the child component receives a state, 
// it is a property. That child can never change the property. 
// The parent just tells it what the state is, and the child receives it as robots



    
function App (){
// constructor() {
//     super()
//     this.state = { // bc this has state, it is called a smart component 
//         robots: [], // these are the things that can change and live in the parent component
//         searchfield: '' // this is what we type
//         // These are the things that can change. React uses this state to render and pass them down as props. App will look 
//         // the same bc it is a simple pure function
//     }
// }
    const [robots, setRobots] = useState([]) // one state for robots, AND allows us to name our state whatever we want
    const [searchfield, setSearchfield] = useState('') // one state for searchfield
    const [count, setCount] = useState(0)

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response=> response.json())
    // //     .then(users => this.setState({ robots: users}));
    // }
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {setRobots(users)});
      console.log(count)
    },[count]) // only run if count changes. 
    // When the app renders it is going to utilize the useEffect methodology
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }


    const filteredrobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase()); // if x inclueds y
    })

    return !robots.length ? 
        <h1>Loading</h1> : 
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <button onClick={()=>setCount(count+1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredrobots} />
                </Scroll>
                
            </div>
            );
    }

export default App;