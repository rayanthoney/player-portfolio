import { ContactForm } from "@/components/contact/ContactForm";
import { ShieldCheck, MessageSquare, Terminal } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="relative w-full py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <h1 className="text-[25vw] font-display font-black leading-none uppercase tracking-tighter">
            Secure
          </h1>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Terminal className="h-3 w-3" /> Communication Protocol 102
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-6">
              Recruitment <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/40">Protocol</span>
            </h1>
            <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-xl">
              Establish secure communication channels for recruitment inquiries, tournament invitations,
              and technical evaluations. All transmissions are audited for athlete privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-24 bg-background relative">
        <div className="container px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-12 items-start max-w-6xl mx-auto">
            {/* Protocol Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-2xl bg-secondary/20 border border-white/5 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 translate-x-12 -translate-y-12">
                  <ShieldCheck size={200} />
                </div>

                <h2 className="flex items-center text-2xl font-display font-black uppercase tracking-tight mb-6">
                  <ShieldCheck className="mr-3 h-6 w-6 text-primary" />
                  Audit & Security
                </h2>

                <p className="text-muted-foreground font-medium leading-relaxed mb-8">
                  Please be advised that this communication channel is actively monitored by authorized
                  parental guardians and coaching staff. Direct athlete-to-recruiter contact is
                  restricted at this stage.
                </p>

                <div className="space-y-4">
                  {[
                    "Validated recruitment solicitations only.",
                    "Verified tournament & showcase coordination.",
                    "Zero-tolerance for direct minor solicitation.",
                    "All metadata is logged for safety audit."
                  ].map((rule, i) => (
                    <div key={i} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 rounded-2xl border border-white/5 text-white/40">
                <MessageSquare className="h-5 w-5 shrink-0" />
                <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed">
                  Encryption Layer: ACTIVE <br />
                  Auditor Status: STANDBY
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-12 rounded-3xl bg-secondary/10 border border-white/10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
