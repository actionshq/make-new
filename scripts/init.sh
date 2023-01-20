#!/bin/bash
set -euo pipefail

GITHUB_TOKEN=$(gh auth token) npm ci
gh auth token | docker login ghcr.io -u oauth --password-stdin
