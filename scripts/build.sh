#!/bin/bash
set -euo pipefail

TAG=$(git describe --tags --dirty --always)
BASE_IMAGE="ghcr.io/actionshq/make-new/app"

docker build . -t "${BASE_IMAGE}:${TAG}"
