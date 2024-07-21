import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const geminiAPIKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;
  const genAI = new GoogleGenerativeAI(geminiAPIKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `"I am planning a trip to Paris, France. I am interested in art, history, and good food. Can you recommend some places to visit, including popular attractions, museums, restaurants, and hidden gems? Please provide a brief description of each place."`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);

  return new NextResponse(JSON.stringify({ response: text }), {
    status: 200,
  });
}