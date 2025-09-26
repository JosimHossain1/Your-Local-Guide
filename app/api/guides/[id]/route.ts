import { NextRequest, NextResponse } from 'next/server';
import dbConnection from '@/lib/connectDB';
import guideModel from '@/model/GuideModel';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnection();
  try {
    const guide = await guideModel.findById(params.id).populate('user');
    if (!guide)
      return NextResponse.json(
        { success: false, message: 'Guide not found' },
        { status: 404 },
      );
    return NextResponse.json({ success: true, data: guide });
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
    const guide = await guideModel.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!guide)
      return NextResponse.json(
        { success: false, message: 'Guide not found' },
        { status: 404 },
      );
    return NextResponse.json({ success: true, data: guide });
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
    const deleted = await guideModel.findByIdAndDelete(params.id);
    if (!deleted)
      return NextResponse.json(
        { success: false, message: 'Guide not found' },
        { status: 404 },
      );
    return NextResponse.json({ success: true, message: 'Guide deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
