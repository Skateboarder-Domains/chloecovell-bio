# Chloe Covell - Official Biography

This is the official biography website for professional skateboarder Chloe Covell, featuring a custom purple/pink themed design.

## Features

- **Custom Purple/Pink Theme**: Unique gradient design different from skateboard.bio
- **Personal Biography Layout**: Single-page design focused on Chloe's story
- **Shared Database**: Queries the same Neon PostgreSQL database as skateboard.bio
- **Sponsor Showcase**: Dynamic display of current sponsors
- **Social Integration**: Links to Instagram, TikTok, and other platforms

## Architecture

This site demonstrates a **hybrid architecture** where:
- Each skater can have their own repository with a unique design
- All sites query the same centralized Neon database
- Content is managed in one place, designs are customized per skater

## Deployment

This site is deployed on Cloudflare Pages and uses:
- **Cloudflare Pages Functions** for serverless API routes
- **Neon PostgreSQL** (empty-cherry-02878215) for shared database
- **Custom Domain**: chloecovell.bio

### Environment Variables

The following environment variable must be configured in Cloudflare Pages:
- `NEON_DATABASE_URL` - Connection string to the shared skateboard.bio database

## Development

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Deploy to Cloudflare Pages
npm run deploy
```

## Database Schema

The site queries the `skaters` table which includes:
- `full_name`, `nickname`, `bio`
- `birth_date`, `birthplace`, `hometown`
- `stance`, `turned_pro_year`
- `sponsors` (array)
- `social_links` (JSONB)
- `profile_image_url`, `header_image_url`

## Comparison with skateboard.bio

| Feature | skateboard.bio | chloecovell.bio |
|---------|---------------|-----------------|
| **Design** | Neutral SaaS dashboard | Purple/pink personal biography |
| **Layout** | Multi-page, data-focused | Single-page, story-focused |
| **Content** | All skaters | Chloe Covell only |
| **Database** | Shared Neon PostgreSQL | Shared Neon PostgreSQL |
| **Repository** | skateboard-bio | chloecovell-bio |
| **Customization** | Standardized | Fully customized |

This hybrid approach allows each skater to have their own branded presence while maintaining centralized data management.
