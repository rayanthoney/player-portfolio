import { ContactForm } from "@/components/contact/ContactForm";
import { ShieldCheck } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Get in Touch
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          For recruitment inquiries, upcoming tournaments, or general questions.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start max-w-5xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="p-6 border rounded-lg bg-muted/30">
            <h2 className="flex items-center text-xl font-bold mb-4">
              <ShieldCheck className="mr-2 h-6 w-6 text-primary" />
              Coach & Guardian Managed
            </h2>
            <p className="text-muted-foreground mb-4">
              Please note that this inbox is monitored by parents and coaches. Direct contact with
              the athlete is not available through this channel to ensure privacy and safety.
            </p>
            <ul className="text-sm list-disc list-inside space-y-2 text-muted-foreground">
              <li>Official recruitment inquiries welcome</li>
              <li>Tournament invites welcome</li>
              <li>No direct solicitations to the minor</li>
            </ul>
          </div>
        </div>

        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
