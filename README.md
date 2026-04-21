# NEUSHOP - Website ban hang giao dien hien dai

Du an **NEUSHOP** la website thuong mai dien tu xay dung bang HTML, CSS, JavaScript thuan. Web hoat dong o phia client, giao dien responsive, de mo rong va de trien khai.

## 1) Cach truy cap website

### Cach 1: Mo truc tiep (nhanh nhat)
1. Mo thu muc du an.
2. Chay file `NEUSHOP.html` bang trinh duyet (Chrome, Edge, Firefox...).

### Cach 2: Dung Live Server (khuyen nghi khi chinh sua code)
1. Mo thu muc du an trong VS Code.
2. Cai extension **Live Server**.
3. Chuot phai file `NEUSHOP.html` -> chon **Open with Live Server**.
4. Trinh duyet se mo dia chi localhost (vi du: `http://127.0.0.1:5500/NEUSHOP.html`).

## 2) Huong dan su dung web cho nguoi dung

1. **Vao trang chu:** Mo `NEUSHOP.html` de xem banner, danh muc va san pham noi bat.
2. **Xem danh sach san pham:** Bam vao menu/duong dan sang trang `products.html`.
3. **Loc theo danh muc:** Chon danh muc de loc nhanh san pham theo nhu cau.
4. **Tim kiem san pham:** Nhap tu khoa tren thanh tim kiem de hien ket qua phu hop.
5. **Xem chi tiet san pham:** Bam vao tung san pham de vao trang `product-detail.html`.
6. **Them vao gio hang:** Bam nut "Them vao gio" o the san pham hoac trong trang chi tiet.
7. **Quan ly gio hang:** Mo khu vuc gio hang de tang/giam so luong, xoa san pham va xem tong tien.

## 3) Chuc nang chinh cua website

- **Trang chu hien dai:** Banner, danh muc noi bat, bo cuc than thien tren desktop va mobile.
- **Danh sach san pham dong:** Render du lieu bang JavaScript, ho tro loc va tim kiem.
- **Trang chi tiet san pham:** Hien thi thong tin day du cua tung san pham.
- **Gio hang tuong tac:** Them, cap nhat so luong, xoa san pham, tinh tong tien theo thoi gian thuc.
- **Dieu huong giua cac trang:** Home, category, products, product detail lien ket ro rang.
- **Icon/Favicon day du:** Hien thi bieu tuong website tren tab trinh duyet.

## 4) Cau truc file chinh

- `NEUSHOP.html`: Trang chu.
- `products.html`: Trang danh sach san pham.
- `product-detail.html`: Trang chi tiet san pham.
- `category.html`: Trang danh muc.
- `script.js`: Xu ly du lieu, render san pham, tim kiem, loc, gio hang.
- `style.css`: Toan bo giao dien va responsive.

## 5) Luu y khi tuy chinh

- Du lieu san pham hien tai dang la du lieu mau trong `script.js`.
- Co the thay the bang API that (fetch tu backend) de dua vao he thong san xuat.
- Neu thay doi ten thuong hieu, can dong bo trong HTML va cac doan `document.title` trong JavaScript.
