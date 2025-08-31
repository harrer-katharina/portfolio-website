import fs from 'fs';
import path from 'path';

export async function GET() {
  const imagesDirectory = path.join(process.cwd(), 'public/bevry/brandbook');
  const filenames = fs.readdirSync(imagesDirectory);

  const images = filenames.filter((filename) => filename.endsWith('.webp')).map((filename) => `/bevry/brandbook/${filename}`);

  return new Response(JSON.stringify({ images }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
