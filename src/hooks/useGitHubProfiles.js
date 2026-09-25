import { useEffect, useState } from 'react'
import { getGitHubProfile } from '../services/githubApi'

export function useGitHubProfiles(usernames) {
  const [state, setState] = useState({ profiles: {}, loading: true, error: '' })
  const usernamesKey = usernames.filter(Boolean).join(',')

  useEffect(() => {
    const controller = new AbortController()
    const requestedUsernames = usernamesKey ? usernamesKey.split(',') : []

    async function loadProfiles() {
      if (!requestedUsernames.length) {
        setState({ profiles: {}, loading: false, error: '' })
        return
      }

      setState((current) => ({ ...current, loading: true, error: '' }))

      try {
        const profiles = await Promise.all(
          requestedUsernames.map((username) => getGitHubProfile(username, controller.signal)),
        )
        const profilesByUsername = Object.fromEntries(
          profiles.map((profile) => [profile.username.toLowerCase(), profile]),
        )
        setState({ profiles: profilesByUsername, loading: false, error: '' })
      } catch (error) {
        if (error.name !== 'AbortError') {
          setState({ profiles: {}, loading: false, error: 'Os dados do GitHub estão temporariamente indisponíveis.' })
        }
      }
    }

    loadProfiles()
    return () => controller.abort()
  }, [usernamesKey])

  return state
}
