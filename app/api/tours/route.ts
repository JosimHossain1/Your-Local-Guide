import dbConnection from '@/lib/connectDB';
import tourModel from '@/model/TourModel';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {
  await dbConnection();
  try {
    const tours = await tourModel.find().populate('guide');
    return NextResponse.json({ success: true, data: tours });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

export async function POST(req: NextRequest) {
  await dbConnection();
  try {
    const body = await req.json();
    const tour = await tourModel.create(body);
    return NextResponse.json({ success: true, data: tour });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
