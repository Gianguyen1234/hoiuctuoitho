import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';
import bcrypt from 'bcryptjs';

export const post: APIRoute = async ({ request }) => {
  try {
    const { username, password } = await request.json();
    
    // Đọc file users.json
    const usersPath = path.join(process.cwd(), 'src/data/users.json');
    const usersData = await fs.readFile(usersPath, 'utf-8');
    const users = JSON.parse(usersData);
    
    // Kiểm tra username đã tồn tại chưa
    if (users.users.some((u: any) => u.username === username)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Tên đăng nhập đã tồn tại',
        }),
        { status: 400 }
      );
    }
    
    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Tạo user mới
    const newUser = {
      id: users.users.length + 1,
      username,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    };
    
    // Thêm user mới vào danh sách
    users.users.push(newUser);
    
    // Lưu vào file
    await fs.writeFile(usersPath, JSON.stringify(users, null, 2));
    
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Đăng ký thành công',
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Có lỗi xảy ra, vui lòng thử lại sau',
      }),
      { status: 500 }
    );
  }
}; 