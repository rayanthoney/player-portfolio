"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    // Reset form after a delay or keep success state
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="rounded-lg border bg-card text-card-foreground p-8 text-center shadow-sm">
        <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. A parent or coach will get back to you soon.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Coach Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="organization">Organization / Team</Label>
        <Input
          id="organization"
          name="organization"
          placeholder="University or Club Name"
          required
          value={formData.organization}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="coach@example.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Inquiry details..."
          required
          className="min-h-[120px]"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" className="w-full">
        Send Inquiry
      </Button>
    </form>
  );
}
