import { Navbar } from "@/components/home/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-4xl font-bold">hello world</div>
      </main>
    </>
  );
}