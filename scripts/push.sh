#!/usr/bin/env bash

source scripts/config_vars.sh

docker push ${BASE_IMAGE}:latest
docker tag ${BASE_IMAGE} ${BASE_IMAGE}:${SERVICE_VERSION}
docker push ${BASE_IMAGE}:${SERVICE_VERSION}