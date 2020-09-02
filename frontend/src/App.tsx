import React, { useEffect } from "react";
import { sayHello } from "api/client";

function App() {
  useEffect(() => {
    sayHello();
  }, []);

  return (
    <div>
      <p>react app</p>
    </div>
  );
}

export default App;
