import * as grpcWeb from 'grpc-web';

import * as greeterservice_pb from './greeterservice_pb';


export class GreeterServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: greeterservice_pb.HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: greeterservice_pb.HelloResponse) => void
  ): grpcWeb.ClientReadableStream<greeterservice_pb.HelloResponse>;

  sayRepeatHello(
    request: greeterservice_pb.RepeatHelloRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<greeterservice_pb.RepeatHelloResponse>;

}

export class GreeterServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: greeterservice_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<greeterservice_pb.HelloResponse>;

  sayRepeatHello(
    request: greeterservice_pb.RepeatHelloRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<greeterservice_pb.RepeatHelloResponse>;

}

