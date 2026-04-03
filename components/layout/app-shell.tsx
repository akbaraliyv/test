import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-[256px_1fr] gap-6 p-6">
      <Sidebar />
      <main className="space-y-6">
        <Header />
        {children}
      </main>
    </div>
  );
}
