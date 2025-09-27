import { NextResponse } from 'next/server';
import dbConnection from '@/lib/connectDB';
import guideModel from '@/model/GuideModel';

// ✅ GET guide by ID
export async function GET(req, context) {
  await dbConnection();
  const { id } = await context.params;

  try {
    const guide = await guideModel.findById(id).populate('user');

    if (!guide) {
      return NextResponse.json(
        { success: false, message: 'Guide not found' },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: guide });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

// ✅ UPDATE guide by ID
export async function PUT(req, context) {
  await dbConnection();
  const { id } = await context.params;

  try {
    const body = await req.json();
    const guide = await guideModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!guide) {
      return NextResponse.json(
        { success: false, message: 'Guide not found' },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: guide });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

// ✅ DELETE guide by ID
export async function DELETE(req, context) {
  await dbConnection();
  const { id } = await context.params;

  try {
    const deleted = await guideModel.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: 'Guide not found' },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, message: 'Guide deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
