#!/bin/env zsh

set -e

npm version $1

git push
git push --tags

npm login

npm publish --dry-run

echo "You have 10 seconds to cancel the publication of the packge..."
sleep 10s

npm publish
