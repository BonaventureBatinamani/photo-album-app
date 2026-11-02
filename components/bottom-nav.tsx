'use client'

import {useActionState }from 'react'
import { signOut } from '@/app/sign-out/action'
import type { SignOutState } from '@/app/sign-out/action'

export default function BottomNav() {
    const initialState: SignOutState = {
        success: false,
        message: ''
    }

    const [, formAction, pending] = useActionState(signOut, initialState);

  return (
    <nav
      aria-label="Home"
      className="fixed inset-x-0 bottom-0 z-20 border-t border-border-strong/60 bg-deep-brown/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex w-full max-w-[480px] items-stretch px-2 pb-[env(safe-area-inset-bottom)]">
        <button
          type="button"
          aria-current="page"
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-[6px] py-3 text-film-orange transition-colors hover:text-film-orange active:scale-[0.97]"
        >
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 10.5L12 4L20 10.5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V10.5Z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 20V14.5H14.5V20"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs font-medium">Groups</span>
        </button>

        <button
          type="button"
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-[6px] py-3 text-muted-text transition-colors hover:text-warm-white active:scale-[0.97]"
        >
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.75"
            />
            <circle cx="8.5" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.75" />
            <path
              d="M4 16.5L9 12L13 15L16 12.5L20 16"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs font-medium">Add photos</span>
        </button>

        <button
          type="button"
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-[6px] py-3 text-muted-text transition-colors hover:text-warm-white active:scale-[0.97]"
        >
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.75" />
            <path
              d="M5 19C5.6 16.2 8.4 14.5 12 14.5C15.6 14.5 18.4 16.2 19 19"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xs font-medium">Account</span>
        </button>

        <form action={formAction} className="flex flex-1">
          <button
            type="submit"
            disabled={pending}
            className="flex w-full flex-col items-center justify-center gap-1 rounded-[6px] py-3 text-muted-text transition-colors hover:text-warm-white active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3V11"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
              <path
                d="M7.5 6.25C5.35 7.85 4 10.25 4 13C4 17.4 7.6 21 12 21C16.4 21 20 17.4 20 13C20 10.25 18.65 7.85 16.5 6.25"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-xs font-medium">
              {pending ? "Signing out..." : "Sign out"}
            </span>
          </button>
        </form>
      </div>
    </nav>
  );
}
