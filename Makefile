PROTO_PATH := protobuf
FRONTEND_PROTO_PATH := ./frontend/src/proto
SERVER_PROTO_PATH := ./server/proto
PROTOC_GEN_TS_PATH := ./node_modules/.bin/protoc-gen-ts
GRPC_TOOLS_NODE_PROTOC_PATH := ./node_modules/.bin/grpc_tools_node_protoc_plugin


gen-proto:
	mkdir -p $(FRONTEND_PROTO_PATH) $(SERVER_PROTO_PATH) &&\
	protoc -I=$(PROTO_PATH) $(PROTO_PATH)/*.proto \
		--js_out=import_style=commonjs:$(FRONTEND_PROTO_PATH)\
  		--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$(FRONTEND_PROTO_PATH) &&\
    yarn run grpc_tools_node_protoc -I=$(PROTO_PATH) $(PROTO_PATH)/*.proto \
		--js_out=import_style=commonjs,binary:${SERVER_PROTO_PATH} \
		--grpc_out=$(SERVER_PROTO_PATH) \
		--plugin=protoc-gen-grpc=$(GRPC_TOOLS_NODE_PROTOC_PATH) &&\
	yarn run grpc_tools_node_protoc -I=$(PROTO_PATH) $(PROTO_PATH)/*.proto \
		--plugin=protoc-gen-ts=$(PROTOC_GEN_TS_PATH) \
		--ts_out=${SERVER_PROTO_PATH}

clear-proto:
	rm -rf $(FRONTEND_PROTO_PATH)