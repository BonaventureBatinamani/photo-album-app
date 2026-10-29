'use server'

import { createClient } from '../lib/superbase/server'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type SignupState = {
  success: boolean
  message: string
} 

export async function signUp(
  _previousState: SignupState,
  formData: FormData
): Promise<SignupState> {
  const email = String(formData.get('email') ?? '').trim()
  const password = String(formData.get('password') ?? '')

  // Basic server-side validation
  if (!email || !email.includes('@')) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
    }
  }

  if (password.length < 8) {
    return {
      success: false,
      message: 'Your password must contain at least 8 characters.',
    }
  }

  const supabase = await createClient()

  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      return {
        success: false,
        message: error.message,
      }
    }

    revalidatePath('/test')
  } catch (e) {
    if (e instanceof Error && e.message.includes('NEXT_REDIRECT')) {
      throw e
    }
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    }
  }

  redirect('/test')
}
    
