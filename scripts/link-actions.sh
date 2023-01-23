#!/bin/bash
set -euo pipefail

cd /workspaces/actions
npm link
cd /workspaces/make-new
npm link @actionshq/actions
