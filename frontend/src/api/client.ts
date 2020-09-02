import {
  HelloRequest,
  RepeatHelloRequest,
  HelloReply,
} from "proto/helloworld_pb";
import { GreeterClient } from "proto/helloworld_grpc_web_pb";

export const sayHello = () => {
  var client = new GreeterClient(
    "http://" + window.location.hostname + ":8080",
    null,
    null
  );

  // simple unary call
  var request = new HelloRequest();
  request.setName("World");

  client.sayHello(request, {}, (err: any, response: any) => {
    if (err) {
      console.log(
        `Unexpected error for sayHello: code = ${err.code}` +
          `, message = "${err.message}"`
      );
    } else {
      console.log(response.getMessage());
    }
  });

  // server streaming call
  var streamRequest = new RepeatHelloRequest();
  streamRequest.setName("World");
  streamRequest.setCount(5);

  var stream = client.sayRepeatHello(streamRequest, {});
  stream.on("data", (response: any) => {
    console.log(response.getMessage());
  });
  stream.on("error", (err: any) => {
    console.log(
      `Unexpected stream error: code = ${err.code}` +
        `, message = "${err.message}"`
    );
  });
};
