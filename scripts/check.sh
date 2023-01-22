#!/bin/bash
set -euo pipefail

npx eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore
npx vue-tsc --noEmit
