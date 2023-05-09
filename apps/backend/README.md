# Backend

Backend application for MyDungeonBuddy

## Run locally

```bash
# Run the infrastructure
docker-compose up -d
# Run server
nx run backend:serve
# Run database migrations
nx run backend:migration-run
```

## Usefull commands

```bash
# Generate a migration
nx run backend:migration-generate --name CreateUser
# Run local CLI
nx run backend:cli --help
```

### Available CLI commands
| Name          | Description                         |
|---------------|-------------------------------------|
| `user:create` | Will create a user in your database |
