import { NextRequest, NextResponse } from "next/server";
import { generateResponse } from "./actions";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const prompt = url.searchParams.get("prompt") as string;
    if (!prompt) throw new Error("Missing prompt parameter");

    const message = await generateResponse(prompt);
    // if (message.refusal) throw new Error(message.refusal);

    return NextResponse.json({ response: message.refusal ?? message.content }, { status: 200 });
  } catch(err: unknown) {
    return NextResponse.json({
      message: err instanceof Error ? err.message : "Invalid request"
    }, { status: 400 });
  }
}