import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { useEffect } from 'react'
import type { UserDTO } from '@/lib/data/users'

export function useUserSync() {
  const { user } = useDynamicContext()

  useEffect(() => {
    if (!user) return

    const syncUser = async () => {
      try {
        const userData = {
          id: user.userId,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
        }

        console.log('Syncing user data:', userData)

        const response = await fetch('/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        })

        if (!response.ok) {
          const errorText = await response.text()
          console.error('Server response:', {
            status: response.status,
            statusText: response.statusText,
            body: errorText
          })
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const responseData = await response.json()
        console.log('User synced successfully:', responseData)
      } catch (error) {
        console.error('Sync error details:', {
          error,
          message: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined
        })
      }
    }

    void syncUser()
  }, [user])

  return user
}