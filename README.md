## Burchard Galleries — Modern Auction Website

Next.js 16 (App Router) site for Burchard Galleries, featuring a modern, clean layout for auctions, departments, services, bidder resources, and consignment.

### Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 (configless)
- ESLint (core-web-vitals)

### Run locally
```bash
npm install
npm run dev
# visit http://localhost:3000
```

### Lint & production build
```bash
npm run lint
npm run build
```

### Content & structure
- Primary page: `src/app/page.tsx`
- Shared data (navigation, auctions, departments, services, contact): `src/data/content.ts`
- Global styles: `src/app/globals.css`

### Deployment (Railway)
1. Ensure the project is committed to GitHub.
2. In Railway, create a new service from the GitHub repo.
3. Set `NODE_ENV=production` and `PORT=3000` (Railway usually sets the port automatically; read the `PORT` env variable in custom configs if added later).
4. Build command: `npm run build`
5. Start command: `npm start`
6. Enable a persistent volume only if you later add uploads or caching; not required for this static Next.js build.

### Reference links
- Legacy auction calendar/catalogues: https://www.burchardgalleries.com/fcalend.htm
- Mailing list signup: http://www.burchardgalleries.com/femail.htm
- Auction archives: http://www.burchardgalleries.com/fcatalog.htm
