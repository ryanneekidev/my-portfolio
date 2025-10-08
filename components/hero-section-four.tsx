import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";
import { ArrowUp, Globe, Plus, Sparkle } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="[--color-primary:var(--color-indigo-500)]">
        <section className="overflow-hidden">
          <div className="py-20 md:py-36">
            <div className="relative z-10 mx-auto max-w-5xl px-6">
              <div className="relative text-center">
                <h1 className="mx-auto max-w-2xl text-balance text-4xl font-bold md:text-5xl">
                  Transforming Ideas into Dynamic Web Applications
                </h1>

                <p className="text-muted-foreground mx-auto my-6 max-w-2xl text-balance text-xl">
                  Hello, I`&apos;`m Rayan Mamhoud. Dedicated to continuous
                  learning and innovation in all fields of tech.
                </p>

                <div className="flex flex-col items-center justify-center gap-3 *:w-full sm:flex-row sm:*:w-auto">
                  <Button asChild size="lg">
                    <Link href="#projects">
                      <span className="text-nowrap">View Projects</span>
                    </Link>
                  </Button>
                  <Button key={2} asChild size="lg" variant="outline">
                    <Link href="#contact-me">
                      <span className="text-nowrap">Contact Me</span>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl bg-black/10 md:mt-20">
                <img
                  src="https://images.unsplash.com/photo-1637055972140-64608c1abe53?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                />

                <div className="bg-background rounded-(--radius) relative m-4 overflow-hidden border border-transparent shadow-xl shadow-black/15 ring-1 ring-black/10 sm:m-8 md:m-12">
                  <Image
                    src="/mist/tailark-2.png"
                    alt="my portrait"
                    width="2880"
                    height="1842"
                    className="object-top-left size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
