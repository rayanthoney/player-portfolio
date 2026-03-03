"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShieldCheck, Send, Loader2 } from "lucide-react";

export function RequestForm() {
    const [formData, setFormData] = useState({
        athleteName: "",
        parentName: "",
        email: "",
        ageGroup: "",
        position: "",
        clubTeam: "",
        filmLinks: "",
        notes: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call
        console.log("Request Submitted:", formData);
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus("success");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    if (status === "success") {
        return (
            <div className="p-12 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                    <ShieldCheck size={32} />
                </div>
                <h3 className="text-3xl font-display font-black uppercase tracking-tight">Transmission Received</h3>
                <p className="text-muted-foreground font-medium max-w-sm mx-auto">
                    Your athlete's data has been queued for evaluation. Our scouting department will contact you within 24 hours to begin the build process.
                </p>
                <div className="pt-4">
                    <Button variant="outline" className="font-bold border-white/10 uppercase tracking-widest text-xs" onClick={() => setStatus("idle")}>
                        Submit Another Athlete
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="athleteName" className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Athlete Full Name</Label>
                    <Input
                        id="athleteName"
                        name="athleteName"
                        placeholder="e.g. Jayson Tatum Jr."
                        required
                        className="bg-black/40 border-white/5 h-12 focus:border-primary/50 transition-colors"
                        value={formData.athleteName}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="parentName" className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Parent/Guardian Name</Label>
                    <Input
                        id="parentName"
                        name="parentName"
                        placeholder="For primary contact"
                        required
                        className="bg-black/40 border-white/5 h-12 focus:border-primary/50 transition-colors"
                        value={formData.parentName}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Contact Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="parent@example.com"
                        required
                        className="bg-black/40 border-white/5 h-12 focus:border-primary/50 transition-colors"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="clubTeam" className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Current Club / AAU Team</Label>
                    <Input
                        id="clubTeam"
                        name="clubTeam"
                        placeholder="e.g. Team Takeover 14U"
                        required
                        className="bg-black/40 border-white/5 h-12 focus:border-primary/50 transition-colors"
                        value={formData.clubTeam}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="ageGroup" className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Class Year / Age Group</Label>
                    <Input
                        id="ageGroup"
                        name="ageGroup"
                        placeholder="e.g. Class of 2030 / 13U"
                        required
                        className="bg-black/40 border-white/5 h-12 focus:border-primary/50 transition-colors"
                        value={formData.ageGroup}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="position" className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Primary Position</Label>
                    <Input
                        id="position"
                        name="position"
                        placeholder="e.g. Shooting Guard"
                        required
                        className="bg-black/40 border-white/5 h-12 focus:border-primary/50 transition-colors"
                        value={formData.position}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="filmLinks" className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Film Links (YouTube, Hudl, Social)</Label>
                <Input
                    id="filmLinks"
                    name="filmLinks"
                    placeholder="Paste URLs to your highlight reels or full game film"
                    className="bg-black/40 border-white/5 h-12 focus:border-primary/50 transition-colors"
                    value={formData.filmLinks}
                    onChange={handleChange}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="notes" className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Additional Scouting Notes</Label>
                <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Tell us about their game, strengths, and recent accomplishments..."
                    className="bg-black/40 border-white/5 min-h-[120px] focus:border-primary/50 transition-colors"
                    value={formData.notes}
                    onChange={handleChange}
                />
            </div>

            <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full h-14 bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(0,128,128,0.3)] disabled:opacity-50"
            >
                {status === "submitting" ? (
                    <>Verifying Transmission... <Loader2 className="ml-2 h-4 w-4 animate-spin" /></>
                ) : (
                    <>Initiate Profile Build <Send className="ml-2 h-4 w-4" /></>
                )}
            </Button>

            <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">
                Secure Handled Data Submission Protocol
            </p>
        </form>
    );
}
