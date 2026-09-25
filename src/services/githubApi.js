const GITHUB_API_URL = 'https://api.github.com'

export async function getGitHubProfile(username, signal) {
  const response = await fetch(`${GITHUB_API_URL}/users/${username}`, {
    headers: { Accept: 'application/vnd.github+json' },
    signal,
  })

  if (!response.ok) {
    throw new Error(`Não foi possível carregar o perfil @${username}.`)
  }

  const profile = await response.json()

  return {
    username: profile.login,
    avatarUrl: profile.avatar_url,
    profileUrl: profile.html_url,
    publicRepos: profile.public_repos,
    followers: profile.followers,
  }
}
