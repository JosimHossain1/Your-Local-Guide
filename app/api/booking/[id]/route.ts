import { NextRequest, NextResponse } from 'next/server';
import dbConnection from '@/lib/connectDB';
import bookingModel from '@/model/BookingModel';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnection();
  try {
    const booking = await bookingModel
      .findById(params.id)
      .populate('tour')
      .populate('tourist');
    if (!booking)
      return NextResponse.json(
        { success: false, message: 'Booking not found' },
        { status: 404 },
      );
    return NextResponse.json({ success: true, data: booking });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnection();
  try {
    const body = await req.json();
    const booking = await bookingModel.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!booking)
      return NextResponse.json(
        { success: false, message: 'Booking not found' },
        { status: 404 },
      );
    return NextResponse.json({ success: true, data: booking });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnection();
  try {
    const deleted = await bookingModel.findByIdAndDelete(params.id);
    if (!deleted)
      return NextResponse.json(
        { success: false, message: 'Booking not found' },
        { status: 404 },
      );
    return NextResponse.json({ success: true, message: 'Booking deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
