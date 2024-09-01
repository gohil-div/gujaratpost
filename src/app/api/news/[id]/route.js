import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = params;  // Extract the id from the URL

  try {
    // Fetch the news item with the given NEWS_ID
    const [results] = await db.query('SELECT * FROM news WHERE NEWS_ID = ?', [id]);

    if (results.length === 0) {
      return NextResponse.json({ message: 'News item not found' }, { status: 404 });
    }

    return NextResponse.json(results[0]);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}