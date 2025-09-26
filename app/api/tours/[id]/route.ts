import { NextRequest, NextResponse } from 'next/server';
import dbConnection from '@/lib/connectDB';
import tourModel from '@/model/TourModel';

export async function GET(
  { params }: { params: { id: string } },
) {
  await dbConnection();
  try {
    const tour = await tourModel.findById(params.id).populate('guide');
    if (!tour)
      return NextResponse.json(
        { success: false, message: 'Tour not found' },
        { status: 404 },
      );
    return NextResponse.json({ success: true, data: tour });
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
    const tour = await tourModel.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!tour)
      return NextResponse.json(
        { success: false, message: 'Tour not found' },
        { status: 404 },
      );
    return NextResponse.json({ success: true, data: tour });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

export async function DELETE(
  { params }: { params: { id: string } },
) {
  await dbConnection();
  try {
    const deleted = await tourModel.findByIdAndDelete(params.id);
    if (!deleted)
      return NextResponse.json(
        { success: false, message: 'Tour not found' },
        { status: 404 },
      );
    return NextResponse.json({ success: true, message: 'Tour deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
