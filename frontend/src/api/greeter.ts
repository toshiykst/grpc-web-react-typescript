import { HelloRequest, RepeatHelloRequest } from "proto/helloworld_pb";
import { GreeterClient } from "proto/helloworld_grpc_web_pb";
import { unaryMetadata } from "./config/metadata";

const HOST = "http://" + window.location.hostname + ":8080";

const client = new GreeterClient(HOST);

type UnaryCallback<T extends (...args: any) => any> = Parameters<T>[2];

export const sayHello = (
  params: HelloRequest.AsObject,
  callback: UnaryCallback<typeof client.sayHello>
) => {
  // unary call
  const request = new HelloRequest();
  request.setName(params.name);
  return client.sayHello(request, unaryMetadata, callback);
};

export const sayRepeatHello = (params: RepeatHelloRequest.AsObject) => {
  // server streaming call
  const streamRequest = new RepeatHelloRequest();
  streamRequest.setName(params.name);
  streamRequest.setCount(params.count);

  return client.sayRepeatHello(streamRequest);
};
