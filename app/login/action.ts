"use server"

import { createClient } from '../lib/superbase/server'
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

    revalidatePath('/test')
  } catch(e){
    if(e instanceof Error && e.message.includes('NEXT_REDIRECT')){
      throw e
    }
    return {
      success: false,
      message: 'Something went wrong. Please try again.'
    }
  }

  redirect('/test')



}