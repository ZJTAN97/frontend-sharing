import { useState } from "react";
import { MyChildComponent } from "./MyChildComponent";

export const MyComponent = () => {
  const [text, setText] = useState("");
  return (
    <div>
      {text}
      <input value={text} onChange={(e) => setText(e.currentTarget.value)} />
      <MyChildComponent />
    </div>
  );
};
z;
