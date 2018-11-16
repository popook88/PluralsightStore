import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage";
import AboutPage from "./about/AboutPage";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="continer-fluid">
        <Header loading={this.props.loading} />

        <Route exact path="/" component={HomePage}/>
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:id" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} exact />
        <Route path="/about" component={AboutPage} />
      </div>
    );
  }
}

App.propTypes = {
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
