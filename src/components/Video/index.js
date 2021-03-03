import React from "react";
import { connect } from "react-redux";
const Video = ({ activeLesson, activeModule }) => {
  return (
    <div>
      <strong> Modulo {activeModule.title}</strong>
      <span> aula {activeLesson.title}</span>
    </div>
  );
};
export default connect((state) => {
  return {
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson,
  };
})(Video);
