"use server"

import { createClient } from '../lib/supabase/server'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type LoginState = {
  success: boolean,
  message: string
}

export async function login(
  _previousState: LoginState,
  formData: FormData
): Promise<LoginState> {
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

  try{
    const {error} = await supabase.auth.signInWithPassword({
      email,
      password 
    })

    if(error){
      return {
        success: false,
        message: error.message
      }
    }

    revalidatePath('/home')
  } catch(e){
    if(e instanceof Error && e.message.includes('NEXT_REDIRECT')){
      throw e
    }
    return {
      success: false,
      message: 'Something went wrong. Please try again.'
    }
  }

  redirect('/home')



}