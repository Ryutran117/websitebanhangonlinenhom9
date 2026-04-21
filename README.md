# NEUSHOP - Website bán hàng giao diện hiện đại

Dự án **NEUSHOP** là website thương mại điện tử xây dựng bằng HTML, CSS, JavaScript thuần. Web hoạt động ở phía client, giao diện responsive, để mở rộng và để triển khai.

## 1) Cách truy cập website

### Cách 1: Mở trực tiếp (nhanh nhat)
1. Mở thư mục dự án.
2. Chạy file `NEUSHOP.html` bằng trình duyệt (Chrome, Edge, Firefox…).

### Cách 2: Dùng Live Server (khuyến nghị khi chỉnh sửa code)
1. Mở thư mục dự án trong VS Code.
2. Cài extension **Live Server**.
3. Chuột phải vào file `NEUSHOP.html` → chọn **Open with Live Server**.
4. Trình duyệt sẽ mở địa chỉ localhost (ví dụ: `http://127.0.0.1:5500/NEUSHOP.html`).

## 2) Hướng dẫn sử dụng web cho người dùng

1. **Vào trang chủ:** Mở `NEUSHOP.html` để xem banner, danh mục và sản phẩm nổi bật.
2. **Xem danh sách sản phẩm:** Bấm vào menu hoặc đường dẫn để sang trang `products.html`.
3. **Lọc theo danh mục:** Chọn danh mục để lọc nhanh sản phẩm theo nhu cầu.
4. **Tìm kiếm sản phẩm:** Nhập từ khóa trên thanh tìm kiếm để hiển thị kết quả phù hợp.
5. **Xem chi tiết sản phẩm:** Bấm vào từng sản phẩm để vào trang `product-detail.html`.
6. **Thêm vào giỏ hàng:** Bấm nút "Thêm vào giỏ" ở thẻ sản phẩm hoặc trong trang chi tiết.
7. **Quản lý giỏ hàng:** Mở khu vực giỏ hàng để tăng/giảm số lượng, xóa sản phẩm và xem tổng tiền.

## 3) Chức năng chính của website

- **Trang chủ hiện đại:** Banner, danh mục nổi bật, bố cục thân thiện trên desktop và mobile.
- **Danh sách sản phẩm dòng:** Render dữ liệu bằng JavaScript, hỗ trợ lọc và tìm kiếm.
- **Trang chi tiết sản phẩm:** Hiển thị đầy đủ thông tin của từng sản phẩm.
- **Gio hang tuong tac:** Thêm, cập nhật số lượng, xóa sản phẩm, tính tổng tiền theo thời gian thực.
- **Điều hướng giữa các trang:** Home, category, products, product detail liên kết rõ ràng. 
- **Icon/Favicon đầy đủ:** Hiển thị biểu tượng website trên tab trình duyệt.

## 4) Cấu trúc file chính

- `NEUSHOP.html`: Trang chủ.
- `products.html`: Trang danh sách sản phẩm.
- `product-detail.html`: Trang chi tiết sản phẩm.
- `category.html`: Trang danh mục.
- `script.js`: Xử lý dữ liệu, render sản phẩm, tìm kiếm, lọc, giỏ hàng.
- `style.css`: Toàn bộ giao diện và responsive.

## 5) Lưu ý khi tùy chỉnh

- Dữ liệu sản phẩm hiện tại là dữ liệu mẫu trong `script.js`.
- Có thể thay thế bằng API thật (fetch từ backend) để đưa vào hệ thống sản xuất.
- Nếu thay đổi tên thương hiệu, cần đồng bộ trong HTML và các đoạn `document.title` trong JavaScript.****
