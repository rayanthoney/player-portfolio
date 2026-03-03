import { RequestForm } from "@/components/request/RequestForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    ShieldCheck,
    Terminal,
    CreditCard,
    CheckCircle2,
    Video,
    Target,
    Layers
} from "lucide-react";

export default function RequestPage() {
    const specs = [
        { icon: Video, title: "Film Lab", detail: "Main highlight reel + technical clips categorization" },
        { icon: Target, title: "Editorial", detail: "Professional scouting summary and strengths audit" },
        { icon: Layers, title: "Journey", detail: "Full career timeline with team & role history" },
        { icon: ShieldCheck, title: "Intel", detail: "Premium shareable link optimized for college recruiters" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            {/* Header Section */}
            <section className="relative w-full py-20 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                    <h1 className="text-[25vw] font-display font-black leading-none uppercase tracking-tighter">
                        REQUEST
                    </h1>
                </div>

                <div className="container relative z-10 px-4 md:px-6">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                            <Terminal className="h-3 w-3" /> Profile Ingestion Protocol v1
                        </div>
                        <h1 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-6">
                            Establish Your <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/40">Elite Dossier</span>
                        </h1>
                        <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-xl">
                            Professionalize your recruiting outreach. We transform your raw film and statistics
                            into a high-premium digital scouting report evaluated by coaches in seconds.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full py-24 bg-background relative overflow-hidden">
                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                <div className="container px-4 md:px-6 relative z-10">
                    <div className="grid gap-16 lg:grid-cols-12 items-start max-w-7xl mx-auto">

                        {/* Left Column: Product Details & Payment */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-8">
                                <div className="p-8 rounded-3xl bg-secondary/20 border border-white/5 backdrop-blur-md relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 translate-x-12 -translate-y-12">
                                        <Target size={200} />
                                    </div>

                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <h2 className="text-2xl font-display font-black uppercase tracking-tight">Full Build Package</h2>
                                            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em]">One-Time Investment</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-3xl font-display font-black">$99</span>
                                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">USD</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-10">
                                        {specs.map((spec, i) => (
                                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                                <spec.icon className="h-5 w-5 text-primary shrink-0" />
                                                <div>
                                                    <h4 className="text-xs font-black uppercase tracking-widest text-white/90">{spec.title}</h4>
                                                    <p className="text-[10px] font-medium text-muted-foreground leading-relaxed">{spec.detail}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <Button asChild className="w-full h-16 bg-white text-black hover:bg-white/90 font-black uppercase tracking-[0.2em] text-xs">
                                        <Link href="https://buy.stripe.com/00waEY3q44Yn0o44l9eUU00" target="_blank" rel="noopener noreferrer">
                                            <CreditCard className="mr-2 h-4 w-4" /> Secure Payment via Stripe
                                        </Link>
                                    </Button>

                                    <p className="mt-4 text-[9px] text-center text-muted-foreground font-bold uppercase tracking-widest">
                                        Build Commences Immediately Post-Funding
                                    </p>
                                </div>

                                <div className="p-8 space-y-6">
                                    <h3 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4" /> Why Elite Prospect?
                                    </h3>
                                    <div className="space-y-4">
                                        {[
                                            "Recruiters stay on your page longer than a Twitter feed.",
                                            "Mobile-first design (How coaches actually watch film).",
                                            "Editorial context that basic stats/apps miss.",
                                            "Easy to update as the athlete grows."
                                        ].map((text, i) => (
                                            <div key={i} className="flex gap-3 text-xs font-medium text-muted-foreground leading-relaxed">
                                                <span className="text-primary font-black">/</span> {text}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Ingestion Form */}
                        <div className="lg:col-span-7">
                            <div className="p-8 md:p-12 rounded-[2rem] bg-secondary/10 border border-white/10 relative">
                                <div className="mb-10 space-y-2">
                                    <Badge variant="outline" className="text-primary border-primary/20 font-black uppercase tracking-[0.2em] text-[9px] py-1 px-3">Entry Terminal</Badge>
                                    <h2 className="text-3xl font-display font-black uppercase tracking-tight">Athlete Data Ingestion</h2>
                                    <p className="text-muted-foreground text-sm font-medium">Provide the initial data for the dossier build.</p>
                                </div>

                                <RequestForm />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
