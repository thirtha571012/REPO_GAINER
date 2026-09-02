import Link from "next/link";
import { ArrowRight, FolderGit2, MessageSquareCode, Sparkles } from "lucide-react";

import { DevPilotIcon } from "@/components/icons/repogainer-icon";
import { BrandMark } from "@/components/layout/app-shell";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { getGithubLoginUrl } from "@/lib/api";

export default function HomePage() {
  return (
    <div className="relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-background to-muted/20" />
      
      <header className="relative z-10 mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        <BrandMark />
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            Sign in
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-4 pt-24 pb-16 text-center sm:pt-32">
        <div className="flex flex-col items-center justify-center space-y-6">
          <DevPilotIcon className="size-14 rounded-2xl" />
          
          <div className="space-y-3">
            <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              DevPilot
            </h1>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Connect GitHub, index any repository, and chat with your codebase
              using retrieval-augmented answers and citations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={getGithubLoginUrl()}
              className={cn(
                buttonVariants({ size: "lg" }),
                "inline-flex items-center gap-1.5"
              )}
            >
              <FolderGit2 className="size-4" />
              Continue with GitHub
              <ArrowRight className="size-4" />
            </a>
            <Link 
              href="#features" 
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              See how it works
            </Link>
          </div>
        </div>

        <section id="features" className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3 text-left w-full max-w-5xl mx-auto">
          {[
            {
              title: "Connect GitHub",
              body: "OAuth with repo scope for public and private repositories.",
              icon: FolderGit2,
            },
            {
              title: "Intelligent Indexing",
              body: "Automatically parse and index your codebase for deep semantic understanding.",
              icon: Sparkles,
            },
            {
              title: "Ask anything",
              body: "Get grounded answers with clickable source citations.",
              icon: MessageSquareCode,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-card/80 p-5 shadow-xs backdrop-blur"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-muted">
                <item.icon className="size-5 text-foreground" />
              </div>
              <h2 className="font-medium">{item.title}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}