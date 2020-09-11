/**
 * @fileoverview gRPC-Web generated client stub for greeterservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.greeterservice = require('./greeterservice_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.greeterservice.GreeterServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.greeterservice.GreeterServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greeterservice.HelloRequest,
 *   !proto.greeterservice.HelloResponse>}
 */
const methodDescriptor_GreeterService_SayHello = new grpc.web.MethodDescriptor(
  '/greeterservice.GreeterService/SayHello',
  grpc.web.MethodType.UNARY,
  proto.greeterservice.HelloRequest,
  proto.greeterservice.HelloResponse,
  /**
   * @param {!proto.greeterservice.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greeterservice.HelloResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.greeterservice.HelloRequest,
 *   !proto.greeterservice.HelloResponse>}
 */
const methodInfo_GreeterService_SayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.greeterservice.HelloResponse,
  /**
   * @param {!proto.greeterservice.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greeterservice.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.greeterservice.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.greeterservice.HelloResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greeterservice.HelloResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greeterservice.GreeterServiceClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greeterservice.GreeterService/SayHello',
      request,
      metadata || {},
      methodDescriptor_GreeterService_SayHello,
      callback);
};


/**
 * @param {!proto.greeterservice.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greeterservice.HelloResponse>}
 *     Promise that resolves to the response
 */
proto.greeterservice.GreeterServicePromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greeterservice.GreeterService/SayHello',
      request,
      metadata || {},
      methodDescriptor_GreeterService_SayHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greeterservice.RepeatHelloRequest,
 *   !proto.greeterservice.RepeatHelloResponse>}
 */
const methodDescriptor_GreeterService_SayRepeatHello = new grpc.web.MethodDescriptor(
  '/greeterservice.GreeterService/SayRepeatHello',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.greeterservice.RepeatHelloRequest,
  proto.greeterservice.RepeatHelloResponse,
  /**
   * @param {!proto.greeterservice.RepeatHelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greeterservice.RepeatHelloResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.greeterservice.RepeatHelloRequest,
 *   !proto.greeterservice.RepeatHelloResponse>}
 */
const methodInfo_GreeterService_SayRepeatHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.greeterservice.RepeatHelloResponse,
  /**
   * @param {!proto.greeterservice.RepeatHelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greeterservice.RepeatHelloResponse.deserializeBinary
);


/**
 * @param {!proto.greeterservice.RepeatHelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.greeterservice.RepeatHelloResponse>}
 *     The XHR Node Readable Stream
 */
proto.greeterservice.GreeterServiceClient.prototype.sayRepeatHello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/greeterservice.GreeterService/SayRepeatHello',
      request,
      metadata || {},
      methodDescriptor_GreeterService_SayRepeatHello);
};


/**
 * @param {!proto.greeterservice.RepeatHelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.greeterservice.RepeatHelloResponse>}
 *     The XHR Node Readable Stream
 */
proto.greeterservice.GreeterServicePromiseClient.prototype.sayRepeatHello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/greeterservice.GreeterService/SayRepeatHello',
      request,
      metadata || {},
      methodDescriptor_GreeterService_SayRepeatHello);
};


module.exports = proto.greeterservice;

