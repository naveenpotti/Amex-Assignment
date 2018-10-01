import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import * as contentActions from "../../redux/actions/content";

const Header = props => {
  return (
    <header className="App-header">
      <h1 className="App-title">React Assignment</h1>
      <Button onClick={props.onResetCount} type="danger">
        Reset
      </Button>
    </header>
  );
};
export default connect(
  ({ content }) => ({
    ...content
  }),
  contentActions
)(Header);
