import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { cartoonId, username, content, createdAt } = data;

    // Đọc file comments.json
    const commentsPath = path.join(process.cwd(), 'src/data/comments.json');
    const commentsData = await fs.readFile(commentsPath, 'utf-8');
    const comments = JSON.parse(commentsData);

    // Tạo comment mới
    const newComment = {
      id: comments.comments.length + 1,
      cartoonId,
      username,
      content,
      createdAt
    };

    // Thêm comment mới vào danh sách
    comments.comments.push(newComment);

    // Lưu vào file
    await fs.writeFile(commentsPath, JSON.stringify(comments, null, 2));

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 