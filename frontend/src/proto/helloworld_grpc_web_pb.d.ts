import * as grpcWeb from 'grpc-web';

import * as helloworld_pb from './helloworld_pb';


export class GreeterClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: helloworld_pb.HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: helloworld_pb.HelloReply) => void
  ): grpcWeb.ClientReadableStream<helloworld_pb.HelloReply>;

  sayRepeatHello(
    request: helloworld_pb.RepeatHelloRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<helloworld_pb.HelloReply>;

}

export class GreeterPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: helloworld_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<helloworld_pb.HelloReply>;

  sayRepeatHello(
    request: helloworld_pb.RepeatHelloRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<helloworld_pb.HelloReply>;

}

