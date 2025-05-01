
import { SiteLayout } from "@/components/layout/site-layout"

export default function Home() {
  return (
    <SiteLayout>
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Welcome to Aape</h1>
        <p className="text-muted-foreground mb-8">Discover the latest fashion trends and styles.</p>

        {/* Featured products or categories can be added here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Featured Collection {item}</h2>
              <p className="text-sm text-muted-foreground mb-4">Explore our latest collection of premium products.</p>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
