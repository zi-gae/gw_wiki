import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components";
import PropTypes from "prop-types";

const TouchableOpacity = styled.TouchableOpacity`
  margin: 10px;
`;

const Button = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome name={name} size={50} color={"black"}></FontAwesome>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Button;
