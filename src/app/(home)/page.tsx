import { Icons } from "@/components/ui/icon";
import { NumberTicker } from "@/components/ui/number-ticker";
import Link from "next/link";

export const dynamic = "force-dynamic";

const getGithubData = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/brijeshkumaryadav16/reactusekit"
    );
    const data = await response.json();
    const star = data.stargazers_count;
    return star;
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return 0;
  }
};

export default async function HomePage() {
  const star = await getGithubData();

  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] flex items-center">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center">
          <div className="mb-12 space-y-5">
            <h1 className="text-base md:text-2xl lg:text-4xl font-bold">
              React Hooks & Helpers Collection <br />
              Copy, Paste, or Install with shadcn CLI
            </h1>

            <p className="text-sm md:text-base text-fd-muted-foreground leading-relaxed">
              A collection of reusable React hooks and helpers that you can
              easily copy and paste into your apps or add directly through the
              shadcn CLI. Built with TypeScript and modern best practices.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex md:flex-row flex-col gap-5 items-center">
            <Link
              href="/docs/installation"
              className="px-6 py-3 text-sm font-semibold bg-fd-foreground text-fd-background border rounded-full"
            >
              Get Started
            </Link>
            <Link
              href="https://github.com/brijeshkumaryadav16/reactusekit"
              target="_blank"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold border rounded-full gap-1"
            >
              <Icons.gitHub className="w-4 h-4" /> Star on GitHub
              <span>
                🌟 <NumberTicker value={star} className="font-display" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
