# Editing the latest commit
```git
git add .
git commit --amend --no-edit
```

if you wanted to change the message:
```git
git add .
git commit --amend -m "new message"
```

# Aggregating the last N commits into one
```git
git reset --soft HEAD~N

git add .
git commit -m "combined message"
```
