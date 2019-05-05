workflow "Check code quality" {
  on = "push"
  resolves = ["lint/tslint", "lint/markdownlint", "test/jest"]
}

workflow "Publish new release" {
  on = "release"
  resolves = ["deploy/npm"]
}

action "dependencies/npm" {
  uses = "docker://node:8.16.0-alpine"
  runs = "npm"
  args = ["install"]
}

action "lint/markdownlint" {
  needs = [
    "dependencies/npm"
  ]
  uses = "docker://node:8.16.0-alpine"
  args = ["node_modules/.bin/markdownlint", "*.md", "docs/*.md"]
}

action "lint/tslint" {
  needs = [
    "dependencies/npm"
  ]
  uses = "docker://node:8.16.0-alpine"
  args = ["node_modules/.bin/tslint", "--project", "."]
}

action "test/jest" {
  needs = [
    "dependencies/npm"
  ]
  uses = "docker://node:8.16.0-alpine"
  runs = ["sh", "-c", "node_modules/.bin/jest --coverage --coverageReporters=text-lcov | node_modules/.bin/coveralls"]
  env = {
    COVERALLS_SERVICE_NAME = "github-actions"
  }
  secrets = ["COVERALLS_REPO_TOKEN"]
}

action "app/build" {
  needs = [
    "dependencies/npm"
  ]
  uses = "docker://node:8.16.0-alpine"
  args = ["node_modules/.bin/tsc"]
}

action "deploy/npm" {
  needs = [
    "dependencies/npm",
    "test/jest",
    "app/build"
  ]
  uses = "docker://node:8.16.0-alpine"
  args = ["node_modules/.bin/npm-publish-git-tag"]
  secrets = ["NPM_TOKEN"]
}


