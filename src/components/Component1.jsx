import React from "react";
import MyButton from "./MyButton";

export default function Component1({ setHeadLine }) {
  return (
    <div>
      Component 1
      <MyButton
        title="Sätt headline från component 1"
        setHeadline={setHeadLine}
        setHeadlineTo="Headline satt från Component 1"
      />
    </div>
  );
}
