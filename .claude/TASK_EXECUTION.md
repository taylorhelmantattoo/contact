# Task Execution System

Claude should use docs/TASKS.md as the task queue.

Workflow:

1. Read docs/TASKS.md
2. Select next incomplete task
3. Explain the task
4. Propose code changes
5. Provide git commands

Example workflow:

git checkout -b feature/task-name

Make changes.

git add .
git commit -m "Implement task"

git push

Then create a PR.
