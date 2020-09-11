import { HelloRequest, RepeatHelloRequest } from "proto/helloworld_pb";
import { GreeterClient } from "proto/helloworld_grpc_web_pb";
import { setRequestParams } from "utils/request";
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
  setRequestParams(params, request);
  return client.sayHello(request, unaryMetadata, callback);
};

export const sayRepeatHello = (params: RepeatHelloRequest.AsObject) => {
  // server streaming call
  const request = new RepeatHelloRequest();
  setRequestParams(params, request);
  return client.sayRepeatHello(request);
};
