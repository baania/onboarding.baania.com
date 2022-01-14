---
title: pre-commit
---

https://pre-commit.com/

Base config: https://github.com/baania/dagster/blob/master/.pre-commit-config.yaml

## Usage
```bash
# init for newly cloned repo / pre-commit config update
$ pre-commit install

# run pre-commit hooks for all files in folder
$ pre-commit run --files **/*.*

# run pre-commit hooks for all files in the repo
$ pre-commit run --all-files

# enable for downloaded repo
$ git config --global init.templateDir ~/.git-template
$ pre-commit init-templatedir ~/.git-template
```
