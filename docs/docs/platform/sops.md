---
title: SOPs
---

[SOPs](https://github.com/mozilla/sops) is a tool for checking in secrets / password into version control system (eg. GitHub). We need to agree on only one thing, which is an AWS profile (with key and secret) that can decrypt the messages.

## Usage

```bash
$ cd environments

# Encrypt
$ sops -e secrets.json > secrets.sops.json

# Decrypt
$ sops -d secrets.sops.json > secrets.json

# Edit encrypted file in place
$ sops secrets.sops.json
```
