import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const settings = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
  
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        if (account.provider === 'github') {
          try {
            const response = await axios.post(
              'http://127.0.0.1:8000/api/github/',
              {
                access_token: account.access_token,
                id_token: profile.id,
              }
            )
  
            const { access_token } = response.data
            user.accessToken = access_token
            
            return true
          } catch (error) {
            return false
          }
        }
        return true
      } else {
        return false
      }
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token
        token.id = profile.id
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      session.user.id = token.id
      
      return session
    },
  }
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, settings)
