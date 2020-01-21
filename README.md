# JS Development Environment

README will be updated every now and then and is in progress...

Check this out if this repo will be used as a starterkit/template for other repos... <https://stackoverflow.com/questions/9257533/what-is-the-difference-between-origin-and-upstream-on-github/9257901#9257901> Add this repo in the new repo as remote upstream, then get new changes from here with `git fetch`

## Git

### Download project

Run in bash:

```bash
git clone [git-web-repo-url]
```

### Create branch (and switch to that branch)

Run in bash:

```bash
git checkout -b [new-branch-name]
```

### Delete branch (locally and remotely)

**Locally** - Run in bash:

```bash
git branch [-d or -D] [name-of-branch]
```

**Remotely** - Run in bash:

```bash
git push origin --delete [name-of-branch]
```

### View all branches

Run in bash:

```bash
git branch -a
```

## Heroku

### Initial creation of app

Run in bash:

```bash
heroku create [NAME-OF-APP]
```

### Deploy code to app

Run in bash after commiting:

```bash
git push heroku master
```

The application is now deployed. Ensure that at least one instance of the app is running: (I think this tells Heroku to run what's in "web" in Procfile):

```bash
heroku ps:scale web=1
```

Open the website:

```bash
herokou open
```

### Listen and see logs from app

Run in bash:

```bash
heroku logs --tail
```

### Kill a build process

Run in bash:

```bash
heroku plugins:install heroku-builds
heroku builds:cancel -a YOUR_HEROKU_APP_NAME
```

### Add environment variables to Heroku (those in the .env.prod file)

Run in bash:

```bash
heroku config:set $(cat config/.env.prod | sed '/^$/d; /#[[:print:]]*$/d')
```

#### See more info on <https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app>

## Bash scripts

Add bash scripts in the folder `scripts` and link to it in Npmscripts (in scripts in `package.json`) like so:

```json
"scripts": {
   "build": "./build.sh"
},
````

Also, make sure you put a hash bang at the top of your bash file `#!/usr/bin/env bash`.
Additionally, make sure you have permissions to execute the file. Run:

```bash
chmod +x ./build.sh
```

Finally, to execute the newly created bash script, run:

```bash
npm run build
```
