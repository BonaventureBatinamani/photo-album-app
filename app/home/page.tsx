import { createClient } from "@/app/lib/superbase/server";
import { redirect } from "next/navigation";
export default async function HomePage() {
    const supabase = await createClient()
      const { data, error } = await supabase.auth.getUser()
    
      if (error || !data.user) {
        redirect('/login')
      }
  return (
    <main className="flex flex-1 flex-col px-4 pt-6 pb-28">
      <div className="mx-auto flex w-full max-w-120 flex-1 flex-col">
        <header className="mb-6 flex items-center justify-between gap-3">
          <h1
            className="text-[32px] leading-[1.15] md:text-[36px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Groups
          </h1>
          <button
            type="button"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-button-primary px-4 text-sm font-medium text-white transition-colors hover:bg-button-primary-hover focus-visible:outline-[3px] focus-visible:outline-film-orange focus-visible:outline-offset-2 active:scale-[0.98]"
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3V13M3 8H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            New Group
          </button>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center rounded-md border border-dashed border-border-strong bg-deep-brown/30 px-6 py-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border-strong/60 bg-deep-brown/60 text-muted-text">
            <svg
              aria-hidden="true"
              width="28"
              height="28"
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
          </div>
          <p className="mt-4 text-sm text-muted-text">
            New groups will appear here.
          </p>
          <p className="mt-1 max-w-65 text-xs leading-normal text-muted-text/80">
            Create a group to start collecting photos with your friends.
          </p>
        </section>
      </div>
    </main>
  );
}
