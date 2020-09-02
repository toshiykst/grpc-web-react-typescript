import React, { useEffect } from "react";
import { sayHello, sayRepeatHello } from "api/client";

function App() {
  useEffect(() => {
    sayHello();
    sayRepeatHello();
  }, []);

  return (
    <div>
      <p>react app</p>
    </div>
  );
}

export default App;
