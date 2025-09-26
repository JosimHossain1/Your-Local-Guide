import dbConnection from '@/lib/connectDB';
import userModel from '@/model/UserModel';
import { NextRequest, NextResponse } from 'next/server';

export async function GET({ params }: { params: { id: string } }) {
  await dbConnection();
  try {
    const user = await userModel.findById(params.id);
    if (!user)
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 },
      );
    return NextResponse.json({ success: true, data: user });
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
    const user = await userModel.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!user)
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 },
      );
    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

export async function DELETE({ params }: { params: { id: string } }) {
  await dbConnection();
  try {
    const deleted = await userModel.findByIdAndDelete(params.id);
    if (!deleted)
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 },
      );
    return NextResponse.json({ success: true, message: 'User deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
