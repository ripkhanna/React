/*import React from "react";
import PropTypes from "prop-types";

class App extends React.Component
{
    render()
    {
        return(
            <div className="container-fluid">
				<p>Header Here</p>
				{this.props.children}
			</div>
        );
    }
}

App.propTypes = {
children: PropTypes.object.isRequired
};

export default App;
*/
import React, { Component } from 'react';
//import '../styles/App.css';
// import route Components here
// import route Components here
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';
  import Hello from './HelloComponent';
    import About from './AboutComponent';
    import Books from './BooksComponent';
    import Home from './HomeComponent';
    import Course from './course/CoursesPage';
    
class App extends Component {
  render() {
    return (
        <Router>  
      <div className="App">
<div className="container">
<ul>
   <li><Link to="/hello">Hello</Link></li>
   <li><Link to="/about">About</Link></li>
   <li><Link to="/books">Books</Link></li>
   <li><Link to="/course">Course</Link></li>
</ul>
          <hr/>
{/* Routes will go here */}
<Switch>
    <Route exact path="/" component={Home} />
    <Route path="/hello" component={Hello} />
    <Route path="/hello/goodmorning" render={() => { return      <h1>Goodmorning</h1>; }} />
    <Route path="/books" component={Books} />
    <Route path="/About" component={About} />
    <Route path="/Course" component={Course} />
</Switch>

</div>
</div>
</Router>
    );
  }
}
export default App;