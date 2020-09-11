import assert from "assert";
import * as grpc from "grpc";
import { wait } from "./utils";
import {
  IGreeterServiceServer,
  GreeterServiceService,
} from "./proto/greeterservice_grpc_pb";
import { HelloResponse, RepeatHelloResponse } from "./proto/greeterservice_pb";

export const getServer = () => {
  const server = new grpc.Server();
  server.addService<IGreeterServiceServer>(GreeterServiceService, {
    sayHello: (call, callback) => {
      const params = call.request.toObject();
      const res = new HelloResponse();
      res.setMessage("Hello! " + params.name);
      callback(null, res);
    },
    sayRepeatHello: async (call) => {
      const params = call.request.toObject();
      const task = async (name: typeof params["name"], index: number) => {
        await wait(500);
        const res = new RepeatHelloResponse();
        res.setMessage(`Hey!${name}${index}`);
        call.write(res);
      };
      for (let i = 0; i < params.count; i++) {
        await task(params.name, i);
      }
      call.end();
    },
  });
  return server;
};

if (require.main === module) {
  const server = getServer();
  server.bindAsync(
    "0.0.0.0:9090",
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      assert.ifError(err);
      server.start();
    }
  );
}
