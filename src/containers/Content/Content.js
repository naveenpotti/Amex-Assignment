import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import * as contentActions from "../../redux/actions/content";
import CounterModal from "./CounterModal";
import CarList from "./CarList";
import { carListSort } from "../../redux/selectors/carListSort";

const Content = props => {
  return (
    <div className="App-content" onWheel={props.onMouseScroll}>
      <div className="half-width">
        <Button type="primary" onClick={() => props.onModalToggle(true)}>
          Open
        </Button>
        <div
          style={{
            fontSize: props.fontSize,
            cursor: "pointer",
            marginTop: "1%"
          }}
        >
          font size change on mouse scroll
        </div>
      </div>
      <div className="half-width">
        <CarList {...props} />
      </div>
      <CounterModal {...props} />
    </div>
  );
};

export default connect(
  ({ content }) => ({
    ...content,
    carListSort: carListSort(content)
  }),
  contentActions
)(Content);
