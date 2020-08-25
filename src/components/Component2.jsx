import React from "react";
import MyButton from "./MyButton";

export default function Component2({ setHeadLine }) {
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
