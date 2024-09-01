
import db from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch the latest 10 news items
    const [results] = await db.query(`
      SELECT * FROM news 
      WHERE news_created_date >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
      ORDER BY news_visit DESC 
      LIMIT 18
    `);

    // Return the results as JSON
    return NextResponse.json(results);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
