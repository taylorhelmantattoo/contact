# Claude Repository Operating Rules

Environment model:

1. Real local repo
/c/TaylorHelmanTattoo
Source of truth.

2. GitHub remote
Used for PRs and commits.

3. MCP workspace
/home/user/...
NOT authoritative.

Claude must never rely on MCP Git state.

Allowed actions:

- read files
- propose edits
- review architecture
- generate patches
- write commit messages
- generate PR descriptions

Forbidden actions:

Claude must never claim:

- branch exists
- commit pushed
- working tree clean
- PR empty

unless verified from the real repo.

Required response format:

Source of truth used:
Confidence level:
