---
title: Trunk-based Development
---

https://trunkbaseddevelopment.com

| Order | Description                              | Command                                       |
| ----- | ---------------------------------------- | --------------------------------------------- |
| 1     | Fork repo from upstream                  | -                                             |
| 2     | Create new branch from `upstream/master` | git checkout -b $BRANCH_NAME upstream/master  |
| 3     | Add commits                              | git add * && git commit -m "$COMMIT_MESSAGE"  |
| 4     | Make a pull request                      | `gh pr create`, then follow on-screen prompts |
| 5     | Wait for approvals then merge the PR     | -                                             |

Repeat 2-5 for every new PR.
