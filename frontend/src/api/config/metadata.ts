import * as grpcWeb from "grpc-web";

const TIMEOUT_SECONDS = 1;

const getDeadLine = () => {
  const deadline = new Date();
  deadline.setSeconds(deadline.getSeconds() + TIMEOUT_SECONDS);
  return `${deadline.getTime()}`;
};

export const unaryMetadata: grpcWeb.Metadata = { deadline: getDeadLine() };
