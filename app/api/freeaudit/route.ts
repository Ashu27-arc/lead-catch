import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { FreeAuditLead } from "@/models/FreeAuditLead";

type FreeAuditPayload = {
  name: string;
  email: string;
  phone: string;
  website?: string;
  message?: string;
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
    const body = (await request.json()) as Partial<FreeAuditPayload>;

    const payload: FreeAuditPayload = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      website: sanitize(body.website),
      message: sanitize(body.message),
    };

    if (!payload.name || !payload.email || !payload.phone) {
      return NextResponse.json(
        { message: "Name, email, and phone are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!isValidPhone(payload.phone)) {
      return NextResponse.json(
        { message: "Please enter a valid phone number." },
        { status: 400 },
      );
    }

    await connectToDatabase();
    await FreeAuditLead.create(payload);

    return NextResponse.json(
      { message: "Thanks! We received your free audit request." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Free audit API error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
