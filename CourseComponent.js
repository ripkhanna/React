import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../src/Actions/courseActions';
import {bindActionCreators} from 'redux';

class CourseComponent extends Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            course:{ title :""}
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onclickSave = this.onclickSave.bind(this);
    }
    onTitleChange(event)
    {
        const course =this.state.course;
        course.title = event.target.value;
        this.setState({course:course});
    }
    onclickSave()
    {
        //const title = this.state.course.title;
        //alert('Saving: ' +   title);
        this.props.actions.createCourse(this.state.course);
    }
    courseRow(course,index) {
        return <div key={index}>{course.title} </div>;
    }
  render() {
    return (
      <div>
        <h1>Courses </h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course </h2>
        <input type="text" onChange ={this.onTitleChange} value={this.state.course.title} />
        <input type="submit" onClick ={this.onclickSave} value="Save" />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
    actions: bindActionCreators(courseActions,dispatch)
    };
  }
  CourseComponent.propTypes={
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired 
  };

function mapStateToProps(state,ownProps ) {
    return {courses:state.courses
        };
}

export default connect(mapStateToProps,mapDispatchToProps)(CourseComponent);

