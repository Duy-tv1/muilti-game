# Gan Kết Tính Than - Real-time Multiplayer Game

Trò chơi trực tuyến theo thời gian thực với Socket.IO

## Tính năng

- 🎮 Chơi theo nhóm hoặc cá nhân
- 👥 Hỗ trợ nhiều người chơi
- ⏱️ Bộ đếm thời gian cho mỗi câu hỏi
- 🏆 Bảng xếp hạng trực tiếp
- 💾 Lưu tiến độ game
- 🔄 Reconnect tự động

## Cài đặt

```bash
npm install
```

## Chạy

### Development
```bash
npm run dev           # Frontend
npm run dev:server    # Backend server
```

### Production
```bash
npm run start
```

## Cấu trúc Project

```
gankettinhthan/
├── src/
│   ├── components/
│   │   └── MultiplayerGame.tsx    # Main game component
│   └── styles/
│       └── index.css               # Global styles
├── api/
│   └── server/
│       └── index.js                # Socket.IO server
├── index.html
├── index.tsx                       # Entry point
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Biến môi trường

Tạo file `.env`:

```
PORT=3002
VITE_SOCKET_URL=http://localhost:3002
```

## Dữ liệu câu hỏi

Câu hỏi được tải từ Google Sheet. Cập nhật URL trong `api/server/index.js`:

```javascript
const GOOGLE_SHEET_BASE_URL = "...";
```

## Tính năng game

### Chế độ chơi
- **Team Mode**: Chia nhóm, tính điểm theo nhóm
- **Individual Mode**: Chơi riêng, tính điểm cá nhân

### Điểm số
- Câu đúng: 100 + thưởng tốc độ (0-50)
- Câu sai hoặc timeout: 0 điểm

### Reconnect
- Tự động lưu tiến độ game
- Có thể tái kết nối nếu mất kết nối

## Phát triển tiếp

- [ ] Thêm các loại câu hỏi khác
- [ ] Lịch sử game
- [ ] Chat trong game
- [ ] Custom themes
