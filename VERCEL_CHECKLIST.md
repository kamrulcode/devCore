# Deploy checklist

1. Vercel -> Project -> Settings -> Environment Variables (Production AND Preview):
   - BETTER_AUTH_SECRET  (32+ random chars; `openssl rand -base64 32`)
   - BETTER_AUTH_DB_URL  (Atlas string; URL-encode special chars in password, e.g. @ -> %40)
   - BETTER_AUTH_URL     (optional; https://your-domain.com, no trailing slash)
   - Do NOT use the VITE_ prefix.
2. MongoDB Atlas -> Network Access -> allow 0.0.0.0/0 (Vercel has no fixed IPs).
3. Framework preset: Vite. Build: `npm run build`. Output: `dist`.
4. Redeploy (env changes only apply to NEW deployments).
5. Open https://YOUR-DOMAIN/api/health -> expect {"ok":true,...}
6. Test /signup then /signin.
