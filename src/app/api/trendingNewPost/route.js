
import db from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch the latest 10 news items
    const [results] = await db.query("SELECT * FROM news ORDER BY news_id DESC LIMIT 6 OFFSET 6");

    // Return the results as JSON
    return NextResponse.json(results);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
