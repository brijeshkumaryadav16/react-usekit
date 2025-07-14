import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import {
  Code2,
  Eye,
  FileCode,
  Package,
  Puzzle,
  Rocket,
  ShieldCheck,
  TerminalSquare,
  Wrench,
} from "lucide-react";
import Link from "next/link";

function AnimatedTerminal() {
  return (
    <Terminal className="w-full max-w-lg">
      <TypingAnimation delay={0} duration={40}>
        $ npx react-usekit@latest init
      </TypingAnimation>

      <AnimatedSpan delay={1500} className="text-cyan-400">
        🚀 React UseKit CLI - Hooks and Utils Generator
      </AnimatedSpan>

      <AnimatedSpan delay={2200} className="text-gray-400">
        ? What would you like to add? › 🪝 hooks
      </AnimatedSpan>

      <AnimatedSpan delay={2900} className="text-gray-400">
        ? Choose language: › TypeScript
      </AnimatedSpan>

      <AnimatedSpan delay={3600} className="text-gray-400">
        ? Select hooks to add:
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="ml-2 text-green-400">
        ◉ useBoolean
      </AnimatedSpan>
      <AnimatedSpan delay={4150} className="ml-2 text-green-400">
        ◉ useLocalStorage
      </AnimatedSpan>
      <AnimatedSpan delay={4300} className="ml-2 text-gray-600">
        ◯ useClickOutside
      </AnimatedSpan>

      <AnimatedSpan delay={5000} className="text-yellow-400">
        🔄 Installing templates...
      </AnimatedSpan>

      <AnimatedSpan delay={5800} className="text-green-400">
        ✓ useBoolean → src/hooks/useBoolean.ts
      </AnimatedSpan>

      <AnimatedSpan delay={6200} className="text-green-400">
        ✓ useLocalStorage → src/hooks/useLocalStorage.ts
      </AnimatedSpan>

      <AnimatedSpan delay={6800} className="text-green-400 font-semibold">
        🎉 Operation completed successfully!
      </AnimatedSpan>
    </Terminal>
  );
}

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen flex items-center">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl text-fd-primary md:text-6xl font-bold tracking-tight mb-6">
                ReactUsekit
              </h1>
              <h1 className="text-3xl md:text-6xl font-bold tracking-tight mb-6 text-black dark:text-white">
                Save time writing common logic.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Build and install reusable React hooks and utilities with a
                single command. Open Source. Open Code.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-4">
                <Link
                  href="/docs"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-black dark:bg-fd-primary dark:text-black border rounded-full"
                >
                  Get Started
                </Link>
                <Link
                  href="https://github.com/brijeshkumaryadav16/react-usekit"
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-black dark:text-white border rounded-full"
                >
                  View on Github
                </Link>
              </div>
            </div>
            <div className="justify-center items-center flex">
              <AnimatedTerminal />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Why react-usekit?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for developers who value productivity, performance, and clean
            code
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {/* Feature Card 1 */}
          <div className="group bg-transparent border border-border/50 rounded-xl p-8 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl mb-6">
              <Puzzle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Modular by Design
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Pick only what you need — 10+ hooks and 9+ utilities, individually
              installable via CLI.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="group bg-transparent border border-border/50 rounded-xl p-8 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl mb-6">
              <Package className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Built for Modern React
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Crafted for React 18+. Fully functional-component and hooks
              compatible.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="group bg-transparent border border-border/50 rounded-xl p-8 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl mb-6">
              <FileCode className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Fully Tree Shakeable
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Install only the logic you use — keep your bundle lean and fast.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="group bg-transparent border border-border/50 rounded-xl p-8 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl mb-6">
              <Code2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              TypeScript or JavaScript Support
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Get TypeScript or JavaScript code based on your project setup — no
              extra configuration needed.
            </p>
          </div>

          {/* Feature Card 5 */}
          <div className="group bg-transparent border border-border/50 rounded-xl p-8 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl mb-6">
              <ShieldCheck className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Zero Dependencies
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              No runtime dependencies. Clean, dependency-free code you can trust
              and maintain.
            </p>
          </div>

          {/* Feature Card 6 */}
          <div className="group bg-transparent border border-border/50 rounded-xl p-8 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl mb-6">
              <Wrench className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Customizable & Extendable
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Hooks are copied directly into your project — inspect, modify, and
              own them fully.
            </p>
          </div>
          {/* Feature Card 7 */}
          <div className="group bg-transparent border border-border/50 rounded-xl p-8 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl mb-6">
              <Rocket className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Production Ready
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Manually tested and optimized hooks and utilities — built for real
              apps.
            </p>
          </div>
          {/* Feature Card 8 */}
          <div className="group bg-transparent border border-border/50 rounded-xl p-8 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl mb-6">
              <TerminalSquare className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              CLI Powered Developer Experience
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Scaffold any hook or utility using npx react-usekit. No
              boilerplate. No setup.
            </p>
          </div>
          {/* Feature Card 9 */}
          <div className="group bg-transparent border border-border/50 rounded-xl p-8 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl mb-6">
              <Eye className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Self-Contained & Readable
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every function is fully self-contained. Easily understand, extend,
              or debug any hook.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
