import dbConnection from '@/lib/connectDB';
import guideModel from '@/model/GuideModel';
import { NextRequest, NextResponse } from 'next/server';

// GET all guides
export async function GET(req: NextRequest) {
  await dbConnection();
  try {
    const guides = await guideModel.find().populate('user');
    return NextResponse.json({ success: true, data: guides });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

// POST new guide
export async function POST(req: NextRequest) {
  await dbConnection();
  try {
    const body = await req.json();
    const guide = await guideModel.create(body);
    return NextResponse.json({ success: true, data: guide });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
