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
    
    // Tìm user
    const user = users.users.find((u: any) => u.username === username);
    
    if (!user) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Tên đăng nhập không tồn tại',
        }),
        { status: 401 }
      );
    }
    
    // Kiểm tra mật khẩu
    const isValid = await bcrypt.compare(password, user.password);
    
    if (!isValid) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Mật khẩu không chính xác',
        }),
        { status: 401 }
      );
    }
    
    // Tạo session đơn giản
    const session = {
      id: user.id,
      username: user.username,
      createdAt: new Date().toISOString(),
    };
    
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Đăng nhập thành công',
        user: session,
      }),
      { 
        status: 200,
        headers: {
          'Set-Cookie': `session=${JSON.stringify(session)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`
        }
      }
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