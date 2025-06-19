# Hồi Ức Tuổi Thơ

Website lưu giữ và chia sẻ những bộ phim hoạt hình, ký ức tuổi thơ của thế hệ 8x, 9x, 2k Việt Nam.

## 🌟 Tính năng nổi bật
- Danh sách phim hoạt hình kinh điển, cập nhật liên tục
- Xem mô tả, thông tin chi tiết từng bộ phim
- Bình luận, chia sẻ cảm xúc về từng bộ phim (không cần đăng nhập)
- Giao diện đẹp, tối ưu cho cả máy tính và điện thoại
- Trang giới thiệu về tác giả Holy_Dev

## 🚀 Khởi động dự án

```bash
npm install
npm run dev
```
Truy cập: http://localhost:4321

## 🛠 Build production
```bash
npm run build
npm run preview
```

## 🌐 Deploy lên GitHub Pages
1. **Cài đặt**: Đảm bảo đã cài [gh-pages](https://www.npmjs.com/package/gh-pages)
```bash
npm install --save-dev gh-pages
```
2. **Cấu hình file `astro.config.mjs`**:
```js
export default defineConfig({
  // ...
  site: 'https://<your-github-username>.github.io/<repo-name>/',
  outDir: './dist',
  // ...
});
```
3. **Thêm script vào `package.json`**:
```json
"scripts": {
  "deploy": "astro build && gh-pages -d dist"
}
```
4. **Deploy:**
```bash
npm run deploy
```
5. **Bật GitHub Pages** trong repo, chọn branch `gh-pages` và thư mục `/`.

## 👤 Tác giả & Liên hệ
- Holy_Dev (Gianguyen1234)
- Facebook: https://www.facebook.com/profile.php?id=61575273337943
- YouTube: https://www.youtube.com/@dev-maniac2349
- Website: https://thaonguyen-portfolio.vercel.app/

## 🤝 Đóng góp
Mọi đóng góp, ý tưởng, PR đều được chào đón!

---
**Hồi Ức Tuổi Thơ** – Nơi lưu giữ những ký ức đẹp về tuổi thơ của bạn!
