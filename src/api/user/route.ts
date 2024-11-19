import { createOrUpdateUser, getUserById } from '@/lib/data/users'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    console.log('Received user data:', data)
    
    const user = await createOrUpdateUser(data)
    console.log('User saved:', user)
    
    return NextResponse.json(user)
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Failed to save user' }, 
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
    }

    const user = await getUserById(id)
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 })
  }
}