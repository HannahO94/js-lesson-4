import React from "react";
import MyButton from "./MyButton";

export default function Component2({ setHeadLine }) {
  function handleOnClick() {
    setHeadLine("Headline satt från Component 2");
  }
  return (
    <div>
      Component 2
      <MyButton
        title="Sätt Headline från component 2"
        setHeadline={setHeadLine}
        setHeadlineTo="Headline satt från Component 2"
      />
    </div>
  );
}
