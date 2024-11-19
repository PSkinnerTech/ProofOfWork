import { prisma } from '@/lib/prisma'

export type UserDTO = {
  id: string
  email: string
  firstName: string | null
  lastName: string | null
  avatar: string | null
  username: string | null
}

export async function createOrUpdateUser(userData: UserDTO): Promise<UserDTO> {
  try {
    const user = await prisma.user.upsert({
      where: { id: userData.id },
      update: {
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        username: userData.username,
        avatar: userData.avatar,
      },
      create: {
        id: userData.id,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        username: userData.username,
        avatar: userData.avatar,
      },
    })
    return user
  } catch (error) {
    console.error('Database error:', error)
    throw new Error('Failed to create or update user')
  }
}

export async function getUserById(id: string): Promise<UserDTO | null> {
  return prisma.user.findUnique({
    where: { id }
  })
}