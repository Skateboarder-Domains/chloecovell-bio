# chloecovell.bio

This domain is part of the **Skateboarders** project and uses shared infrastructure for efficient resource management.

## Shared Resources

### R2 Object Storage
- **Bucket:** `skateboarders`
- **Domain Prefix:** `chloecovell.bio/`
- All images and assets for this domain are stored under the `chloecovell.bio/` prefix

**Upload files:** Use the included `upload.js` script
```bash
node upload.js ./my-image.jpg images
```

### Shared Database
This domain shares a PostgreSQL database with other domains in the Skateboarders project.
- **Connection:** See `DATABASE_URL` in `.env`
- **Multi-tenant isolation:** Implement row-level security or application-level filtering using domain name

## Environment Variables
Copy `.env.example` to `.env` and fill in the values:
```bash
cp .env.example .env
```

## Development
```bash
# Install dependencies (if adding frameworks)
npm install

# Serve locally
npx http-server

# Upload assets
node upload.js ./images/logo.png images
```

## Analytics
- Google Analytics: Not configured
- Search Console: Verification meta tag included in index.html

## Deployment
This site is automatically deployed via Cloudflare Pages. Push to the `main` branch to trigger a new deployment.
