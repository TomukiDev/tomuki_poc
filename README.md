# tomuki_poc

## Avviare Postgres con Docker Compose

Questo progetto include un `docker-compose.yml` con un servizio Postgres pronto all'uso.

### Variabili d'ambiente supportate

- `POSTGRES_DB` (default: `tomuki`)
- `POSTGRES_USER` (default: `tomuki`)
- `POSTGRES_PASSWORD` (default: `tomuki`)
- `POSTGRES_PORT` (default: `5432`)

Puoi definire queste variabili in un tuo `.env` locale (non incluso nel repo) oppure esportarle nel terminale prima dell'avvio.

### Comandi principali

```bash
# Avvio in background
docker compose up -d

# Verifica stato (health: healthy)
docker compose ps

# Log del servizio
docker compose logs -f postgres

# Stop e rimozione (mantiene i dati nel volume)
docker compose down

# Stop, rimozione e pulizia dei volumi (DISTRUTTIVO)
docker compose down -v
```

### Connessione al database

- URL standard: `postgres://POSTGRES_USER:POSTGRES_PASSWORD@localhost:POSTGRES_PORT/POSTGRES_DB`
- Con i default: `postgres://tomuki:tomuki@localhost:5432/tomuki`

Esempi:

```bash
# psql (richiede il client installato)
psql postgres://tomuki:tomuki@localhost:5432/tomuki

# Node.js (pg)
# const client = new Client({ connectionString: 'postgres://tomuki:tomuki@localhost:5432/tomuki' });
```

### Dati persistenti

I dati sono persistenti nel volume Docker `postgres_data`. Eliminando con `docker compose down -v` il volume e i dati verranno rimossi.

## Mastra

per esuguire mastra in modalità dev

```bash
npm run dev
```
