# Usage

```
docker compose up -d --build

docker compose run --rm -it client-proxy-acha -p simple    # Simple
docker compose run --rm -it client-proxy-acha -p auditoria # Auditable
```

# Acceder a la db

```
docker exec -it proxy-db psql -U acha -d proxy
```