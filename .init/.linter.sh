#!/bin/bash
cd /home/kavia/workspace/code-generation/hello-world-server-336427-336441/express_js_backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

