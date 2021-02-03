# gRPC-Web using react with typescript client

Sample gRPC-Web using react with typescript client

This is based on https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld


# Getting started
1. Install dependencies.
```shell
make init
```

2. Run the Envoy proxy.(in another shell)
```shell
make run-envoy
```

3. Run the react client.(in another shell)
```shell
make run-frontend
```

4. Run Run the NodeJS gRPC Service.(in another shell)
```shell
make run-server
```
