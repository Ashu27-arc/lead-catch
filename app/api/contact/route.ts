import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ContactLead } from "@/models/ContactLead";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  website?: string;
  message: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  const normalized = phone.replace(/[^\d+]/g, "");
  return /^\+?\d{10,15}$/.test(normalized);
}

function sanitize(input: unknown): string {
  return typeof input === "string" ? input.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      website: sanitize(body.website),
      message: sanitize(body.message),
    };

    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (payload.phone && !isValidPhone(payload.phone)) {
      return NextResponse.json(
        { message: "Please enter a valid phone number." },
        { status: 400 },
      );
    }

    await connectToDatabase();
    await ContactLead.create(payload);

    return NextResponse.json(
      { message: "Thanks! We received your request." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
