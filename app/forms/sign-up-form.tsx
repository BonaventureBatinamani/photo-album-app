"use client";
import { useActionState } from "react";
import { signUp, type SignupState } from "../sign-up/action";

const initialState: SignupState = {
  success: false,
  message: "",
};

export default function SignUpForm() {
  const [state, formAction, pending] = useActionState(signUp, initialState);

  if (state.success && state.message) {
    return (
      <div
        className="flex flex-col items-center gap-3 rounded-[6px] border border-border-strong bg-deep-brown/40 p-6 text-center"
        role="status"
        aria-live="polite"
      >
        <svg
          aria-hidden="true"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="var(--color-film-orange)" strokeWidth="2" />
          <path d="M8 12.5L10.5 15L16 9.5" stroke="var(--color-warm-white)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="text-xl" style={{ fontFamily: "var(--font-display)" }}>
          Check your email
        </h2>
        <p className="text-sm text-muted-text">{state.message}</p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" action={formAction} noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor="signup-username" className="text-sm text-warm-white">
          Username
        </label>
        <input
          id="signup-username"
          type="text"
          name="username"
          autoComplete="username"
          placeholder="Your username"
          className="h-12 rounded-[6px] border border-border-strong bg-deep-brown px-3 text-base text-warm-white placeholder:text-muted-text focus-visible:outline-[3px] focus-visible:outline-film-orange focus-visible:outline-offset-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="signup-email" className="text-sm text-warm-white">
          Email
        </label>
        <input
          id="signup-email"
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
        <label htmlFor="signup-password" className="text-sm text-warm-white">
          Password
        </label>
        <input
          id="signup-password"
          type="password"
          name="password"
          minLength={8}
          required
          autoComplete="new-password"
          placeholder="At least 8 characters"
          className="h-12 rounded-[6px] border border-border-strong bg-deep-brown px-3 text-base text-warm-white placeholder:text-muted-text focus-visible:outline-[3px] focus-visible:outline-film-orange focus-visible:outline-offset-2"
        />
      </div>

      {state.message && !state.success && (
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
        {pending ? "Creating account..." : "Create an account"}
      </button>
    </form>
  );
}
