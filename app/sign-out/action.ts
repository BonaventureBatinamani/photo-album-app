"use server"

import { createClient } from '../lib/superbase/server'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type SignOutState = {
  success: boolean,
  message: string
}


export async function signOut(
    _previousState: SignOutState,
) : Promise<SignOutState> {

  const supabase = await createClient()

  try {
    const { error } = await supabase.auth.signOut()
    

    if (error) {
      throw new Error(error.message)
    } 
    revalidatePath('/');
    } catch (e) {
        if (e instanceof Error && e.message.includes('NEXT_REDIRECT')) {
        throw e
        }
    }
    redirect('/')
}