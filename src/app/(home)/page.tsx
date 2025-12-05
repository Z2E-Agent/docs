import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-fd-background text-fd-foreground">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col justify-center py-20 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-normal font-[family-name:var(--font-eb-garamond)] leading-tight">
            Redefining pentesting through autonomous intelligence.
          </h1>
          <p className="text-lg md:text-xl text-fd-muted-foreground max-w-2xl mb-10">
            The fully autonomous penetration testing tool that leverages advanced LLMs to identify vulnerabilities, generate reports, and streamline your security assessments.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-3 bg-fd-foreground text-fd-background font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Read Documentation
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-fd-border text-fd-foreground font-medium rounded-full hover:bg-fd-accent transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      </section>

      {/* Video/Preview Section */}
      <section className="pb-20 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-fd-card rounded-lg border border-fd-border flex items-center justify-center">
            <span className="text-fd-muted-foreground">Preview Coming Soon</span>
          </div>
        </div>
      </section>
    </main>
  );
}
