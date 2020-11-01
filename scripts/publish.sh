#!/bin/bash

# The script will quit/abort after the first failed command.
set -e

VERSION_CHANGE=$1
echo "[info]      Requested version change: '$VERSION_CHANGE'."


# Check if $VERSION_CHANGE adjusts to the semantic versioning scheme: https://semver.org/.
if [[ $VERSION_CHANGE != "major" && $VERSION_CHANGE != "minor" && $VERSION_CHANGE != "patch" ]]; then
  echo "[error]     Incorrect requested version, must be one of: major, minor, or patch."
  echo "[error]     Quitting..."
  exit 1
else
  echo "[success]   Correct version change, proceeding."
fi

echo "[info]      Applying npm package version change."
npm version $1

echo "[info]      Pushing version change commit and git tag."
git push
git push --tags

echo "[info]      Logging into npm account."
npm login

echo "[info]      Dry-running the npm publish script."
npm publish --dry-run

echo "[info]      You have 10 seconds to cancel the publication of the packge..."
sleep 10s

echo "[info]      You have decided to continue the publication, publishing..."
npm publish

echo "[success]   Package seems to be successfully published!"
