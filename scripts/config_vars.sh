#!/usr/bin/env bash

SERVICE_NAME=clojure-nyc-website
SERVICE_VERSION=v0.5
IMAGE_REPO=gcr.io/luchini-nyc

# --------

BASE_IMAGE=${IMAGE_REPO}/${SERVICE_NAME}
