.PHONY: up
up:
	@make build
	docker-compose up

.PHONY: build
build:
	docker-compose build

.PHONY: down
down:
	docker-compose down

.PHONY: exec
exec:
	docker exec -it fb22-web /bin/sh
