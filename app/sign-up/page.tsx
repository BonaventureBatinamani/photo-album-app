import Link from "next/link";
import SignUpForm from "../forms/sign-up-form";

export default function SignUpPage() {
  return (
    <main className="flex flex-1 flex-col px-4 pt-6 pb-10">
      <div className="mx-auto w-full max-w-[420px]">
        <header className="mb-6">
          <Link
            href="/"
            className="inline-flex h-11 items-center rounded-[6px] px-2 text-sm text-burnt-orange hover:underline focus-visible:outline-[3px] focus-visible:outline-film-orange focus-visible:outline-offset-2"
            aria-label="Back to home"
          >
            ← Back
          </Link>
        </header>

        <section className="mb-6">
          <h1
            className="text-[32px] leading-[1.15] md:text-[36px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Create your account
          </h1>
          <p className="mt-2 text-sm text-muted-text">
            Join your friends and start collecting memories.
          </p>
        </section>

        <SignUpForm />

        <footer className="mt-6 text-center text-sm text-muted-text">
          <span>Already have an account? </span>
          <Link
            href="/login"
            className="text-burnt-orange hover:underline focus-visible:outline-[3px] focus-visible:outline-film-orange focus-visible:outline-offset-2"
          >
            Sign in
          </Link>
        </footer>
      </div>
    </main>
  );
}
