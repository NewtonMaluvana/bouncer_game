import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ColorPellete from "./ColorPellete";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-blue-900   h-full grid-cols-4 relative">
        <ColorPellete color={`bg-red-500 absolute top-0 left-0`} />
        <ColorPellete color={`bg-red-500 absolute top-0 right-0 `} />
        <ColorPellete color={`bg-red-500 absolute bottom-0 right-0 `} />
        <ColorPellete color={`bg-yellow-500 absolute bottom-0 left-0`} />
      </div>
    </>
  );
}

export default App;
