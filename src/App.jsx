import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "./components/global/Navbar";
import {
  Blocks,
  BriefcaseIcon,
  CalendarIcon,
  ClipboardIcon,
  Cog,
  DatabaseIcon,
  EyeOff,
  Gauge,
  GraduationCapIcon,
  HandCoins,
  InboxIcon,
  MountainSnowIcon,
  Notebook,
  NotebookPenIcon,
  ServerCrash,
  SettingsIcon,
  Snail,
  Telescope,
  TreePalm,
  TrendingUpIcon,
  UmbrellaOff,
  UsersIcon,
  Wallet2Icon,
} from "lucide-react";
import { Card } from "./components/ui/card";

export default function App() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />

      {/* 1st section */}
      <main className="flex-1">
        <section id="hero" className="bg-muted py-6 md:py-12 lg:py-20">
          <div className="container grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                ClimaChampions by{" "}
                <span className="text-green-700 ">EcoStart</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Integrating discovery, skills, climate technologies &
                monetization at scale through a unique combination of data,
                economy & marketplace.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="w-full min-[400px]:w-auto bg-green-700 hover:bg-green-500">
                  Get Started
                </Button>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              src="/herosection.jpg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </section>
        <div className="flex justify-center ">
          <p className="font-bold mt-10 text-4xl text-green-700">
            Core Features
          </p>
        </div>
        <section id="features" className="py-6 md:py-12 lg:py-20">
          <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-3">
            <div className="space-y-4 text-center">
              <NotebookPenIcon className="mx-auto h-12 w-12" />
              <h3 className="text-xl font-bold">
                Project discovery and prioritization
              </h3>
              <p className="text-muted-foreground">
                Helps businesses find and prioritize sustainability projects
                that create the most impact.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <GraduationCapIcon className="mx-auto h-12 w-12" />
              <h3 className="text-xl font-bold">Education on sustainability</h3>
              <p className="text-muted-foreground">
                Provides information on sustainability issues and solutions.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <MountainSnowIcon className="mx-auto h-12 w-12" />
              <h3 className="text-xl font-bold">
                Finding climate tech experts
              </h3>
              <p className="text-muted-foreground">
                Connects businesses with climate tech companies and
                professionals.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <Blocks className="mx-auto h-12 w-12" />
              <h3 className="text-xl font-bold">Project building</h3>
              <p className="text-muted-foreground">
                Helps businesses build their own sustainability projects and
                create an execution strategy with marketplace access.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <TrendingUpIcon className="mx-auto h-12 w-12" />
              <h3 className="text-xl font-bold">Project improvement</h3>
              <p className="text-muted-foreground">
                Provides recommendations to improve project quality and
                readiness for approval.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <Wallet2Icon className="mx-auto h-12 w-12" />
              <h3 className="text-xl font-bold">Monetization</h3>
              <p className="text-muted-foreground">
                Helps businesses monetize their projects through carbon markets.
              </p>
            </div>
          </div>
        </section>
        <div className="flex justify-center bg-muted">
          <p className="font-bold my-10 text-4xl">
            Challenges Faced by Businesses
          </p>
        </div>
        <section className="bg-muted grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <Card className="flex flex-col cursor-pointer items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-muted p-3 text-muted-foreground">
                <Telescope className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">
                Discoverability of Executed Projects
              </h3>
            </div>
            <p className="text-muted-foreground">
              Difficulty in finding examples of successful decarbonization
              projects within their industry.
            </p>
          </Card>
          <Card className="flex flex-col cursor-pointer items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-secondary p-3 text-secondary-foreground">
                <ServerCrash className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">
                Industry-Specific Problem Statements and Solutions
              </h3>
            </div>
            <p className="text-muted-foreground">
              Need for broader focus on Cleantech 2.0 tackling industry-specific
              challenges.
            </p>
          </Card>
          <Card className="flex flex-col cursor-pointer items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-muted p-3 text-muted-foreground">
                <UmbrellaOff className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">
                Uncertainty and Risk Aversion
              </h3>
            </div>
            <p className="text-muted-foreground">
              Hesitance to invest in new technologies without concrete examples
              of successful implementation.
            </p>
          </Card>
          <Card className="flex flex-col cursor-pointer items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-accent p-3 text-accent-foreground">
                <Cog className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Reinventing the Wheel</h3>
            </div>
            <p className="text-muted-foreground">
              Companies might spend time and resources researching solutions
              that already exist within their industry.
            </p>
          </Card>
          <Card className="flex flex-col cursor-pointer items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-primary p-3 text-primary-foreground">
                <EyeOff className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Limited Visibility</h3>
            </div>
            <p className="text-muted-foreground">
              Lack of awareness of existing cross-industry consortiums for
              collaborative efforts.
            </p>
          </Card>
          <Card className="flex flex-col cursor-pointer items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-secondary p-3 text-secondary-foreground">
                <TreePalm className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Fragmented Landscape</h3>
            </div>
            <p className="text-muted-foreground">
              Current decarbonization approaches are fragmented, leading to
              duplication of efforts.
            </p>
          </Card>
          <Card className="flex flex-col cursor-pointer col-span-1 lg:col-span-3 xl:col-span-3 mx-auto items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-muted p-3 text-muted-foreground">
                <Notebook className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">
                Difficulty in Organizing
              </h3>
            </div>
            <p className="text-muted-foreground">
              Challenges in forming a LOB/BU level team to deliver projects.
            </p>
          </Card>
        </section>
        <section id="features" className="py-6 md:py-12 lg:py-16">
          <div className="flex justify-center ">
            <p className="font-bold mb-20  text-4xl text-green-700">
              Consequences of the Challenges
            </p>
          </div>
          <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-3">
            <div className="space-y-4 text-center">
              <Snail className="mx-auto h-12 w-12" />
              <h3 className="text-xl font-bold">Slower Progress</h3>
              <p className="text-muted-foreground">
                The absence of cross-industry collaboration slows down
                innovation and implementation of standardized decarbonization
                strategies.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <Gauge className="mx-auto h-12 w-12" />
              <h3 className="text-xl font-bold">
                Inefficient Use of Resources
              </h3>
              <p className="text-muted-foreground">
                Duplication of efforts across industries wastes valuable
                resources.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <HandCoins className="mx-auto h-12 w-12" />
              <h3 className="text-xl font-bold">Limited Cost Reduction</h3>
              <p className="text-muted-foreground">
                Without economies of scale, the cost of decarbonization
                solutions remains high.
              </p>
            </div>
          </div>
        </section>
        <section id="pricing" className=" bg-muted py-6 md:py-12 lg:py-20">
          <div className="flex justify-center ">
            <p className="font-bold mb-10 text-4xl">
              <span className=" text-green-700"> ClimaChampions:</span> Tailored
              Solutions for All Scopes
            </p>
          </div>
          <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-3">
            <Card className="space-y-4 flex flex-col cursor-pointer items-start transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-2xl font-bold flex justify-center">
                Purchased Energy
              </h3>
              <ul className="list-disc px-5 gap-2 flex flex-col">
                <li>
                  Clean Energy Marketplace: Identify electricity providers with
                  clean energy sources and switch to lower-emission options.
                </li>
                <li>
                  Renewable Procurement Tools: Discover possible partnerships
                  for the purchase of renewable energy certificates (RECs) or
                  direct power purchase agreements (PPAs).
                </li>
                <li>
                  Grid Advocacy Network: Collaborate with other businesses to
                  advocate for cleaner energy infrastructure in your region.
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum maiores, accusantium reprehenderit eos eius obcaecati at
                  voluptatibus illo earum molestias{" "}
                </li>
              </ul>
            </Card>
            <Card className="space-y-4 flex flex-col cursor-pointer items-start transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-2xl font-bold flex justify-center">
                Direct Emissions
              </h3>
              <ul className="list-disc px-5 gap-2 flex flex-col">
                <li>
                  Actionable Insights: Discover successful projects showcasing
                  on-site renewable energy generation and energy efficiency
                  upgrades within your industry.
                </li>
                <li>
                  Collaboration Hub: Learn from and share best practices with
                  businesses across sectors for Scope 1 reduction strategies.
                </li>
                <li>
                  Financing Accelerator: Connect with investors specializing in
                  clean energy projects to overcome upfront cost challenges.
                </li>
                <li>
                  Project Management Suite: Manage and track Scope 1 reduction
                  initiatives with streamlined tools ensuring efficient
                  execution.
                </li>
              </ul>
            </Card>
            <Card className="space-y-4 flex flex-col cursor-pointer items-start transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-2xl font-bold flex justify-center">
                Value Chain Emissions
              </h3>
              <ul className="list-disc px-5 gap-2 flex flex-col">
                <li>
                  Sustainable Supply Chain Assessments: Evaluate and improve the
                  sustainability practices of your suppliers, leading to reduced
                  emissions throughout the value chain.
                </li>
                <li>
                  Logistics Optimization Tools: Identify opportunities to
                  optimize transportation and distribution for lower emissions.
                </li>
                <li>
                  Product Life Cycle Analysis: Assess the environmental impact
                  of your products throughout their lifecycle, enabling informed
                  decisions for lower emissions.
                </li>
                <li>
                  Customer Engagement Features: Empower customers to make
                  sustainable choices that contribute to reduced Scope 3
                  emissions.
                </li>
              </ul>
            </Card>
          </div>
          <div className="flex items-center justify-center">
            <Button className="mt-8 bg-green-700 hover:bg-green-500">
              Get in Touch
            </Button>
          </div>
        </section>

        {/* <li>By addressing each scope with targeted solutions, ClimaChampions empowers businesses to take concrete actions towards a sustainable future and increase adoption.</li> */}
      </main>
      <footer className=" p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Analytics
            </Link>
            <Link href="#" prefetch={false}>
              Automation
            </Link>
            <Link href="#" prefetch={false}>
              Scalability
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ScalingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M14 15H9v-5" />
      <path d="M16 3h5v5" />
      <path d="M21 3 9 15" />
    </svg>
  );
}
