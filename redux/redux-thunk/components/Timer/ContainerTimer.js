import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PresenterTimer from "./PresenterTimer";
import { startTimer, restartTimer, addSecond } from "../../reducer";

const mapStateToProps = state => {
  const { isPlaying, elapsedTime, timeDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timeDuration
  };
};
const mapDispatchToProps = dispatch => {
  return {
    startTimer: bindActionCreators(startTimer, dispatch),
    restartTimer: bindActionCreators(restartTimer, dispatch),
    addSecond: bindActionCreators(addSecond, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PresenterTimer);
