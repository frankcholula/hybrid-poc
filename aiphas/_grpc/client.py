import grpc
import logging
from generated import api_pb2
from generated.api_pb2_grpc import AiphasApiStub


def unary_call(stub: AiphasApiStub, echo: str):
    response = stub.Ping(api_pb2.PingRequest(echo=echo), timeout= 3)

    print(f"client received: {response.echo}")

def run():
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = AiphasApiStub(channel)
        unary_call(stub, 'hello!')

if __name__ == '__main__':
    logging.basicConfig()
    run()