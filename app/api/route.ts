import fs from 'fs';
import path from 'path';

export async function GET() {
  const baseDir = path.join(process.cwd(), 'public');
  const brandbooks = ['wegweiser', 'bevry'];
  const result: Record<string, string[]> = {};

  
  for (const brand of brandbooks) {
    const brandbookDir = path.join(baseDir, brand, 'brandbook');
    let filenames: string[] = [];

    if (fs.existsSync(brandbookDir)) {
      filenames = fs.readdirSync(brandbookDir).filter((filename) =>
        filename.endsWith('.webp')
      );
    }

    result[brand] = filenames.map(
      (filename) => `/${brand}/brandbook/${filename}`
    );
  }

  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json' },
  });
}
