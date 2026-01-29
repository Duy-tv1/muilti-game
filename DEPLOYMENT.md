# Gan Kết Tính Than - Deployment Guides

## Deployment trên Railway

### 1. Chuẩn bị

```bash
# Login vào Railway
railway login

# Liên kết project
railway link
```

### 2. Variables
```
PORT=3002
VITE_SOCKET_URL=https://your-railway-url.up.railway.app
```

### 3. Build & Deploy

```bash
npm run build
railway up
```

## Deployment trên Vercel (Frontend only)

```bash
vercel --prod
```

Và chỉ định backend URL ở `.env.production`:
```
VITE_SOCKET_URL=https://your-backend-url
```
