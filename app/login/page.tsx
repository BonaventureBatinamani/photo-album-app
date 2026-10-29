import Link from "next/link";
import LoginForm from "../forms/login-form";

export default function LoginPage() {
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
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-muted-text">
            Sign in to get back to your albums.
          </p>
        </section>

        <LoginForm />

        <footer className="mt-6 text-center text-sm text-muted-text">
          <span>New here? </span>
          <Link
            href="/sign-up"
            className="text-burnt-orange hover:underline focus-visible:outline-[3px] focus-visible:outline-film-orange focus-visible:outline-offset-2"
          >
            Create an account
          </Link>
        </footer>
      </div>
    </main>
  );
}
