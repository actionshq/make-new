#!/bin/bash
set -euo pipefail

npm ci
gh auth token | docker login ghcr.io -u oauth --password-stdin
