import React from "react";
import { connect } from "react-redux";
import { actionCreatros } from "../store";
import {Link} from "react-router-dom";

function ToDo({text, onBtnClick, id}) {
  return (
  <li>
    <Link to={`/${id}`}>
      {text} 
    </Link>
    <button onClick={onBtnClick}>DEL</button>
  </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreatros.deleteToDo(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps) (ToDo);