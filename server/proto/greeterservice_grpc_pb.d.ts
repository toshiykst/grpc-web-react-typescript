// package: greeterservice
// file: greeterservice.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as greeterservice_pb from "./greeterservice_pb";

interface IGreeterServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterServiceService_ISayHello;
    sayRepeatHello: IGreeterServiceService_ISayRepeatHello;
}

interface IGreeterServiceService_ISayHello extends grpc.MethodDefinition<greeterservice_pb.HelloRequest, greeterservice_pb.HelloResponse> {
    path: string; // "/greeterservice.GreeterService/SayHello"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<greeterservice_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<greeterservice_pb.HelloRequest>;
    responseSerialize: grpc.serialize<greeterservice_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<greeterservice_pb.HelloResponse>;
}
interface IGreeterServiceService_ISayRepeatHello extends grpc.MethodDefinition<greeterservice_pb.RepeatHelloRequest, greeterservice_pb.RepeatHelloResponse> {
    path: string; // "/greeterservice.GreeterService/SayRepeatHello"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<greeterservice_pb.RepeatHelloRequest>;
    requestDeserialize: grpc.deserialize<greeterservice_pb.RepeatHelloRequest>;
    responseSerialize: grpc.serialize<greeterservice_pb.RepeatHelloResponse>;
    responseDeserialize: grpc.deserialize<greeterservice_pb.RepeatHelloResponse>;
}

export const GreeterServiceService: IGreeterServiceService;

export interface IGreeterServiceServer {
    sayHello: grpc.handleUnaryCall<greeterservice_pb.HelloRequest, greeterservice_pb.HelloResponse>;
    sayRepeatHello: grpc.handleServerStreamingCall<greeterservice_pb.RepeatHelloRequest, greeterservice_pb.RepeatHelloResponse>;
}

export interface IGreeterServiceClient {
    sayHello(request: greeterservice_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: greeterservice_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: greeterservice_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeterservice_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: greeterservice_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeterservice_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayRepeatHello(request: greeterservice_pb.RepeatHelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeterservice_pb.RepeatHelloResponse>;
    sayRepeatHello(request: greeterservice_pb.RepeatHelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeterservice_pb.RepeatHelloResponse>;
}

export class GreeterServiceClient extends grpc.Client implements IGreeterServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: greeterservice_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: greeterservice_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: greeterservice_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeterservice_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: greeterservice_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeterservice_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayRepeatHello(request: greeterservice_pb.RepeatHelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeterservice_pb.RepeatHelloResponse>;
    public sayRepeatHello(request: greeterservice_pb.RepeatHelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeterservice_pb.RepeatHelloResponse>;
}
