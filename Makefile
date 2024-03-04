DOCKER_TAG := seiryo24
GAR_LOCATION := asia-northeast1-docker.pkg.dev/ynufes-hp-cloudrun/frontend-service/stg-seiryo24

.PHONY: build

build:
	docker build -t $(DOCKER_TAG) -f ./cloudrun/Dockerfile .
	docker tag $(DOCKER_TAG):latest $(GAR_LOCATION)

.PHONY: push

push:
	docker push $(GAR_LOCATION)