import { NextResponse } from 'next/server';
import dbConnection from '@/lib/connectDB';
import bookingModel from '@/model/BookingModel';

// ✅ GET booking by ID
export async function GET(request, context) {
  await dbConnection();
  const { id } = await context.params;

  try {
    const booking = await bookingModel
      .findById(id)
      .populate('tour')
      .populate('tourist');

    if (!booking) {
      return NextResponse.json(
        { success: false, message: 'Booking not found' },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: booking });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// ✅ UPDATE booking by ID
export async function PUT(request, context) {
  await dbConnection();
  const { id } = await context.params;

  try {
    const body = await request.json();

    const booking = await bookingModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!booking) {
      return NextResponse.json(
        { success: false, message: 'Booking not found' },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: booking });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// ✅ DELETE booking by ID
export async function DELETE(request, context) {
  await dbConnection();
  const { id } = await context.params;

  try {
    const deleted = await bookingModel.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: 'Booking not found' },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Booking deleted successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
