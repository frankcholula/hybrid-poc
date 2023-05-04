.PHONY: all
all: build run

# for running stuff locally
.PHONY: run.dev
run.dev:
	npm run dev

.PHONY: run.dev.backend
run.dev.backend:
	npm run server

.PHONY: run.dev.frontend
run.dev.frontend:
	npm run client


# for building docker images
.PHONY: build
build: build.backend build.frontend

.PHONY: build.frontend
build.frontend:
	docker-compose build frontend

.PHONY: build.backend
build.backend:
	docker-compose build backend


# for running dockerized images
.PHONY: run
run:
	docker-compose up

.PHONY: run.frontend
run.frontend:
	docker-compose up frontend

.PHONY: run.backend
run.backend:
	docker-compose up backend


.PHONY: clean
clean:
	docker-compose down
	docker system prune