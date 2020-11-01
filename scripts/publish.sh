#!/bin/bash

# Preload info, success, and error function from the base.sh file.
source scripts/base.sh

# The script will quit/abort after the first failed command.
set -e

VERSION_CHANGE=$1
info "Requested version change: '$VERSION_CHANGE'."


# Check if $VERSION_CHANGE adjusts to the semantic versioning scheme: https://semver.org/.
if [[ $VERSION_CHANGE != "major" && $VERSION_CHANGE != "minor" && $VERSION_CHANGE != "patch" ]]; then
  error "Incorrect requested version, must be one of: major, minor, or patch."
  error "Quitting..."
  exit 1
else
  success "Correct version change, proceeding."
fi

info "Applying npm package version change."
npm version $1

info "Pushing version change commit and git tag."
git push
git push --tags

info "Logging into npm account."
npm login

info "Dry-running the npm publish script."
npm publish --dry-run

info "You have 10 seconds to cancel the publication of the packge..."
sleep 10s

info "You have decided to continue the publication, publishing..."
npm publish

success "Package seems to be successfully published!"
