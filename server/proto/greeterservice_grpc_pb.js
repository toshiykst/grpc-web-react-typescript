// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var greeterservice_pb = require('./greeterservice_pb.js');

function serialize_greeterservice_HelloRequest(arg) {
  if (!(arg instanceof greeterservice_pb.HelloRequest)) {
    throw new Error('Expected argument of type greeterservice.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeterservice_HelloRequest(buffer_arg) {
  return greeterservice_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeterservice_HelloResponse(arg) {
  if (!(arg instanceof greeterservice_pb.HelloResponse)) {
    throw new Error('Expected argument of type greeterservice.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeterservice_HelloResponse(buffer_arg) {
  return greeterservice_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeterservice_RepeatHelloRequest(arg) {
  if (!(arg instanceof greeterservice_pb.RepeatHelloRequest)) {
    throw new Error('Expected argument of type greeterservice.RepeatHelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeterservice_RepeatHelloRequest(buffer_arg) {
  return greeterservice_pb.RepeatHelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeterservice_RepeatHelloResponse(arg) {
  if (!(arg instanceof greeterservice_pb.RepeatHelloResponse)) {
    throw new Error('Expected argument of type greeterservice.RepeatHelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeterservice_RepeatHelloResponse(buffer_arg) {
  return greeterservice_pb.RepeatHelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterServiceService = exports.GreeterServiceService = {
  // unary call
sayHello: {
    path: '/greeterservice.GreeterService/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: greeterservice_pb.HelloRequest,
    responseType: greeterservice_pb.HelloResponse,
    requestSerialize: serialize_greeterservice_HelloRequest,
    requestDeserialize: deserialize_greeterservice_HelloRequest,
    responseSerialize: serialize_greeterservice_HelloResponse,
    responseDeserialize: deserialize_greeterservice_HelloResponse,
  },
  // server streaming call
sayRepeatHello: {
    path: '/greeterservice.GreeterService/SayRepeatHello',
    requestStream: false,
    responseStream: true,
    requestType: greeterservice_pb.RepeatHelloRequest,
    responseType: greeterservice_pb.RepeatHelloResponse,
    requestSerialize: serialize_greeterservice_RepeatHelloRequest,
    requestDeserialize: deserialize_greeterservice_RepeatHelloRequest,
    responseSerialize: serialize_greeterservice_RepeatHelloResponse,
    responseDeserialize: deserialize_greeterservice_RepeatHelloResponse,
  },
};

exports.GreeterServiceClient = grpc.makeGenericClientConstructor(GreeterServiceService);
