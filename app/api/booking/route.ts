import dbConnection from "@/lib/connectDB";
import bookingModel from "@/model/BookingModel";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnection();
  try {
    const bookings = await bookingModel.find().populate("tour").populate("tourist");
    return NextResponse.json({ success: true, data: bookings });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

export async function POST() {
  await dbConnection();
  try {
    const body = await req.json();
    const booking = await bookingModel.create(body);
    return NextResponse.json({ success: true, data: booking });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
