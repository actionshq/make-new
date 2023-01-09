#!/bin/bash
set -euo pipefail

TAG=$(git describe --tags --dirty --always)
BASE_IMAGE="ghcr.io/actionshq/make-new/app"

docker tag "${BASE_IMAGE}:${TAG}" "${BASE_IMAGE}:main"
docker push "${BASE_IMAGE}:main"
