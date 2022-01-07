---
title: SOPs
---

[SOPs](https://github.com/mozilla/sops) is a tool for checking in secrets / password into version control system (eg. GitHub). We need to agree on only one thing, which is an AWS profile (with key and secret) that can decrypt the messages.


## Usage
Clone this [repo](https://github.com/baania/dagster) to try

```bash
$ cd environments

# Decrypt
$ sops -d secrets.sops.json

# Edit encrypted file in place
$ sops secrets.sops.json
```

### New repo
Copy `.sops.yaml` from [baania/dagster](https://github.com/baania/dagster) in the root project of any project.
