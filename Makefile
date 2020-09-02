PROTO_PATH := protobuf
FRONTEND_PROTO_PATH := ./frontend/src/proto
SERVER_PROTO_PATH := ./server/proto

gen-proto:
	mkdir -p $(FRONTEND_PROTO_PATH) $(SERVER_PROTO_PATH)
	protoc -I=$(PROTO_PATH) helloworld.proto \
		--js_out=import_style=commonjs:$(FRONTEND_PROTO_PATH)\
		--js_out=import_style=commonjs:$(SERVER_PROTO_PATH)\
  		--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$(FRONTEND_PROTO_PATH)

clear-proto:
	rm -rf $(FRONTEND_PROTO_PATH)
	rm -rf $(SERVER_PROTO_PATH)