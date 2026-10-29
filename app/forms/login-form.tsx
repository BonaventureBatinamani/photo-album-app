'use client'

import { LoginState } from "../login/action";
import { login } from "../login/action";
import { useActionState } from "react";


export default function LoginForm() {
    const initiatState: LoginState = {
        success: false,
        message: ""
    }

    const [state, formAction, pending] = useActionState(login, initiatState);
    return (
        <form className="flex flex-col gap-4" action={formAction} noValidate>
            <div className="flex flex-col gap-2">
                <label htmlFor="login-email" className="text-sm text-warm-white">
                    Email
                </label>
                <input
                    id="login-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@example.com"
                    className="h-12 rounded-[6px] border border-border-strong bg-deep-brown px-3 text-base text-warm-white placeholder:text-muted-text focus-visible:outline-[3px] focus-visible:outline-film-orange focus-visible:outline-offset-2"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="login-password" className="text-sm text-warm-white">
                    Password
                </label>
                <input
                    id="login-password"
                    type="password"
                    name="password"
                    required
                    autoComplete="current-password"
                    placeholder="Your password"
                    className="h-12 rounded-[6px] border border-border-strong bg-deep-brown px-3 text-base text-warm-white placeholder:text-muted-text focus-visible:outline-[3px] focus-visible:outline-film-orange focus-visible:outline-offset-2"
                />
            </div>

            {state.message && (
                <div className="flex items-start gap-2 text-error-text" role="alert">
                    <svg
                        aria-hidden="true"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-0.5 flex-shrink-0"
                    >
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <line x1="12" y1="7" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="12" cy="17" r="1" fill="currentColor" />
                    </svg>
                    <p className="text-sm leading-[1.5]">{state.message}</p>
                </div>
            )}

            <button
                type="submit"
                disabled={pending}
                className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-[6px] bg-button-primary px-4 text-base font-medium text-white transition-colors hover:bg-button-primary-hover focus-visible:outline-[3px] focus-visible:outline-film-orange focus-visible:outline-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-[#6f4a2f] disabled:text-muted-text"
            >
                {pending ? "Signing in..." : "Sign in"}
            </button>
        </form>
    );
}
