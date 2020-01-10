# JS Development Environment

README will be updated every now and then and is in progress...

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
