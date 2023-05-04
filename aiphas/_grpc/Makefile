# https://github.com/protocolbuffers/protobuf/issues/1491
.PHONY: compile
compile:
	python -m grpc_tools.protoc \
	-I generated=proto \
	--python_out=. \
	--grpc_python_out=. \
	./proto/api.proto

.PHONY: server
server:
	@python server.py

.PHONY: client
client:
	@python client.py
