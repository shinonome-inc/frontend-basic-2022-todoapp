import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({ onEditComplete }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
    ref.current.addEventListener("focusout", () => {
      onEditComplete(ref.current.value);
    });
    ref.current.addEventListener("keypress", (event) => {
      if (event.key !== "Enter") return;
      onEditComplete(ref.current.value);
      ref.current.blur();
    });
  }, []);

  return <StyledInput ref={ref} />;
};
export default Input;

const StyledInput = styled.input.attrs((props) => ({ ...props, size: "1" }))`
  background-color: ${COLOR.BLACK};
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.M}
  border-radius: 2px;
  padding: 0 4px;
  border: none;
  outline: none;
  width: 100%;
`;
