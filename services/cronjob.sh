#!/bin/bash



curl -X GET -H "Content-Type: application/json" http://localhost:8000/cron/find/jobs

echo "ok"