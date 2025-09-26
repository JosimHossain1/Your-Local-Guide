import dbConnection from '@/lib/connectDB';
import userModel from '@/model/UserModel';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {
  await dbConnection();
  try {
    const users = await userModel.find();
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

export async function POST(req: NextRequest) {
  await dbConnection();
  try {
    const body = await req.json();
    const user = await userModel.create(body);
    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
