#!/usr/bin/env bash

source scripts/config_vars.sh

docker build . -t ${BASE_IMAGE}
