from generated import api_pb2
from generated.api_pb2_grpc import AiphasApiServicer, add_AiphasApiServicer_to_server

import grpc
import logging
from concurrent import futures

class AiphasApiServer(AiphasApiServicer):
    def Ping(self, request, context) -> api_pb2.PingReply:
        echo = request.echo
        return api_pb2.PingReply(echo=echo)

def serve():
    port = '50051'
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    add_AiphasApiServicer_to_server(AiphasApiServer(),server)
    server.add_insecure_port('[::]:' + port)
    server.start()
    print("Server started, listening on " + port)
    server.wait_for_termination()

if __name__ == '__main__':
    logging.basicConfig()
    serve()
