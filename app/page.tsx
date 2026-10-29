import Link from "next/link";
import { APP_NAME } from "@/lib/config";
import { PhotoCard } from "@/components/ui/PhotoCard";
import "./landing.css";

const photoRotations = [-3, -1.5, 0, 1.5, 3];
const photoSlots = [0, 1, 2, 3, 4];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col px-4 pt-6 pb-10 md:items-center md:px-6">
      <div className="w-full max-w-[480px] md:max-w-[640px]">
        <header className="mb-6">
          <div
            className="text-lg tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {APP_NAME}
          </div>
        </header>

        <section className="relative mb-8 h-[220px] xs:h-[240px] sm:h-[280px] md:h-[320px]">
          <div className="absolute inset-x-0 top-0 flex justify-center">
            {photoSlots.map((i, idx) => {
              const rotation = photoRotations[idx % photoRotations.length];
              const offsets = [
                "-translate-x-[42%] -translate-y-[4%]",
                "-translate-x-[18%] translate-y-[2%]",
                "translate-x-0 translate-y-[6%]",
                "translate-x-[18%] translate-y-[2%]",
                "translate-x-[42%] -translate-y-[4%]",
              ];
              const z = [5, 10, 15, 10, 5][idx];
              const sizes = [
                "w-[110px] sm:w-[130px] md:w-[150px]",
                "w-[118px] sm:w-[140px] md:w-[160px]",
                "w-[126px] sm:w-[150px] md:w-[170px]",
                "w-[118px] sm:w-[140px] md:w-[160px]",
                "w-[110px] sm:w-[130px] md:w-[150px]",
              ];
              return (
                <div
                  key={i}
                  className={`absolute ${sizes[idx]} ${offsets[idx]} photo-enter`}
                  style={{
                    zIndex: z,
                    animationDelay: `${idx * 80}ms`,
                  }}
                >
                  <PhotoCard rotation={rotation} />
                </div>
              );
            })}
          </div>
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[58%] -translate-x-[10%] rotate-[-12deg] text-sm text-ink/80"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            Good times / Better memories
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h1
            className="text-[40px] leading-[1.1] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A shared album for your next chapter.
          </h1>
          <p className="text-base leading-[1.5] text-muted-text">
            Collect photos with your friends. Relive the moments that matter.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/sign-up"
              className="inline-flex h-12 w-full items-center justify-center rounded-[6px] bg-button-primary px-4 text-base font-medium text-white transition-colors hover:bg-button-primary-hover focus-visible:outline-[3px] focus-visible:outline-film-orange focus-visible:outline-offset-2 active:scale-[0.98]"
            >
              Create an account
            </Link>
            <Link
              href="/login"
              className="inline-flex h-12 w-full items-center justify-center rounded-[6px] border border-border-strong bg-transparent px-4 text-base font-medium text-warm-white transition-colors hover:bg-deep-brown/60 focus-visible:outline-[3px] focus-visible:outline-film-orange focus-visible:outline-offset-2"
            >
              Sign in
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
