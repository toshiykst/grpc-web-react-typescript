import React, { useEffect, useState } from "react";
import { sayHello, sayRepeatHello } from "api/greeter";

function App() {
  const [helloMessage, setHelloMessage] = useState<string>("");
  const [repeatHello, setRepeatHello] = useState<string[]>([]);

  useEffect(() => {
    const call = sayHello({ name: "World!" }, (err, res) => {
      if (err) {
        console.error(
          `Unexpected error for sayHello: code = ${err.code}` +
            `, message = "${err.message}"`
        );
        return;
      }
      const data = res.toObject();
      setHelloMessage(data.message);
    });

    return () => {
      call.cancel();
    };
  }, []);

  useEffect(() => {
    const stream = sayRepeatHello({ name: "World", count: 5 });
    stream.on("data", (res) => {
      const data = res.toObject();
      setRepeatHello((prev) => [...prev, data.message]);
    });
    stream.on("error", (err) => {
      console.log(
        `Unexpected stream error: code = ${err.code}` +
          `, message = "${err.message}"`
      );
    });
    return () => {
      stream.cancel();
    };
  }, []);

  return (
    <div>
      <p>react app</p>
      <div>{helloMessage}</div>
      <div>
        {repeatHello.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
