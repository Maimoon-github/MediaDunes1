# Royal Step Pages App

## Overview
Location-aware pages app for royalstep.ae backend.

## Models
- Page: Stores content with location metadata.
- Tag: For tagging pages.

## APIs
- GET /api/pages/: List pages with filters (city, area, q, lat/lng/radius).
- GET /api/pages/{slug}/: Page detail.
- Admin CRUD at /api/admin/pages/.

## Caching
Redis-backed; keys like `pages_list_{city}_{area}_{q}`.

## Search
PostgreSQL full-text; prioritize exact location matches.

## Deployment
Enable PostGIS if geo used. Configure Redis and run `python manage.py generate_sitemap`.
