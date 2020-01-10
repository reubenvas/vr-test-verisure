# JS Development Environment

README will be updated every now and then and is in progress...

## Heroku

### To kill a build process

Run in bash:

```bash
heroku plugins:install heroku-builds
heroku builds:cancel -a YOUR_HEROKU_APP_NAME
```

### To add environment variables to Heroku (those in the .env.prod file)

Run in bash:

```bash
heroku config:set $(cat config/.env.prod | sed '/^$/d; /#[[:print:]]*$/d')
```
