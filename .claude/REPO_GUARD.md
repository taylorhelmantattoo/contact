# REPO GUARD

Authoritative repo location:

C:\TaylorHelmanTattoo

Git Bash path:

/c/TaylorHelmanTattoo

Claude must never trust Git state from MCP workspace.

Before making any Git claim Claude must run:

pwd
git rev-parse --show-toplevel
git branch --show-current
git remote -v
git status

Expected remote:

https://github.com/taylorhelmantattoo/taylorhelmantattoo.github.io.git

If the repo path is not `/c/TaylorHelmanTattoo`, stop and ask the user.
