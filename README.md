## Burchard Galleries — Legacy Static Site

This repository now contains only the legacy static website preserved under `Internet/`.

### Structure
- Legacy HTML/CSS/JS: `Internet/`
- Dockerfile: serves the legacy site via nginx.
- railway.toml: tells Railway to build from the Dockerfile.

### Run locally (Docker)
```bash
docker build -t burchardgalleries-legacy .
docker run --rm -p 8080:80 burchardgalleries-legacy
# open http://localhost:8080
```

### Deploy to Railway
1) Push this repo to GitHub (Dockerfile present).
2) In Railway, create a new service from the repo; it will build with the Dockerfile.
3) Healthcheck is `/` by default (set in `railway.toml`). No extra env vars needed.

### Notes
- All modern Next.js code has been removed; this is the original static site only.
- If you need to change the document root, adjust the `COPY Internet/ /usr/share/nginx/html/` line in `Dockerfile`.
