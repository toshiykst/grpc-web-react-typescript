# gRPC-Web using react with typescript client

Sample gRPC-Web using react with typescript client

This is based on https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld

# Getting started
1. Install dependencies.
```shell
make init
```

2. Run the Envoy proxy.(in another terminal)
```shell
make run-envoy
```

3. Run the react client.(in another terminal)
```shell
make run-frontend
```

4. Run the NodeJS gRPC Service.(in another terminal)
```shell
make run-server
```

# Note
To run `make gen-proto` command, we need:
- the protoc binary, _and_
- the protoc-gen-grpc-web plugin.

https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld#generate-protobuf-messages-and-client-service-stub
