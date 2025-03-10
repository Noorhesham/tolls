import { Card } from "@/components/ui/card";
import Link from "next/link";
import { History, AlertCircle, CreditCard, Car } from "lucide-react";

const features = [
  {
    name: "View Unpaid Tolls",
    description: "Check and pay pending tolls.",
    href: "/unpaid",
    icon: AlertCircle,
  },
  {
    name: "Toll History",
    description: "View all past toll transactions.",
    href: "/history",
    icon: History,
  },
  {
    name: "Add Balance",
    description: "Top up your toll account.",
    href: "/balance",
    icon: CreditCard,
  },
  {
    name: "Register New Car",
    description: "Add a new vehicle to your account.",
    href: "/register-car",
    icon: Car,
  },
];

export default function HomePage() {
  return (
    <div className="h-full p-8">
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white">Welcome, User!</h2>
        <p className="text-muted-foreground">Manage your tolls with ease.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card
            key={feature.name}
            className="p-4 border-black/5 flex flex-col hover:shadow-md transition cursor-pointer bg-[#2d2d2d]"
          >
            <Link href={feature.href} className="flex flex-col h-full">
              <div className="p-2 w-fit rounded-md bg-black/10">
                <feature.icon className="w-6 h-6" />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-1">{feature.name}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
