import React, { Component } from "react";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.View`
  flex: 1;
  background-color: red;
`;

const UpperView = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const LowerView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Time = styled.Text`
  color: white;
  font-weight: 100;
  font-size: 120;
`;

class PresenterTimer extends Component {
  componentWillReceiveProps = nextProps => {
    console.log("next: " + nextProps.isPlaying, this.props.elapsedTime);
    console.log("cur: " + this.props.isPlaying, this.props.elapsedTime);
    if (this.props.isPlaying === false && nextProps.isPlaying === true) {
      const countSecond = setInterval(() => {
        this.props.addSecond();
      }, 100);

      this.setState({
        countSecond
      });
    } else if (this.props.isPlaying === true && nextProps.isPlaying === false) {
      clearInterval(this.state.countSecond);
    }
  };

  render() {
    const { isPlaying, elapsedTime, restartTimer, startTimer } = this.props;
    return (
      <Container>
        <UpperView>
          <Time>{elapsedTime}</Time>
        </UpperView>
        <LowerView>
          {isPlaying ? (
            <Button name="stop-circle" onPress={restartTimer}></Button>
          ) : (
            <Button name="play-circle" onPress={startTimer}></Button>
          )}
        </LowerView>
      </Container>
    );
  }
}

export default PresenterTimer;
