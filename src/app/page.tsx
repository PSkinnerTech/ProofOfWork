import { Navbar } from "@/components/home/Navbar";
import { Button } from "@/components/ui/button"; // Assuming you're using Shadcn for components

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-6">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100">
            Proof of Work
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Showcase and verify your work history onchain. Empower engineers and
            companies to build trust in the decentralized world.
          </p>
          <div className="flex space-x-4">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Onchain Proof",
              description:
                "Store your work history immutably on the blockchain.",
              icon: "shield-check",
            },
            {
              title: "DAO Ready",
              description: "Designed for freelancers and DAO contributors.",
              icon: "users",
            },
            {
              title: "Easy Integration",
              description: "Connect effortlessly to your portfolio.",
              icon: "plug",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="text-gray-800 dark:text-gray-100 mb-4">
                {/* <Icon name={feature.icon} className="w-10 h-10" /> */}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-semibold">Ready to prove your work?</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Create your account today and start building trust onchain.
          </p>
          <div className="mt-6">
            <Button variant="primary" size="lg">
              Sign Up Now
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
