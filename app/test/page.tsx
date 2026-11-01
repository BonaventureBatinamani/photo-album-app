import { redirect } from 'next/navigation'
import { createClient } from '../lib/superbase/server'

export default async function Test() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data.user) {
    redirect('/login')
  }

  return <h3>Successful sign in</h3>
}
