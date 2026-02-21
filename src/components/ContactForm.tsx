import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { SendEmail } from "./SendEmail";

const ContactForm = () => {
  return (
    <div className="w-full">
      <form
        action={async (FormData) => {
          "use server";
          await SendEmail(FormData);
        }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-bold uppercase tracking-widest opacity-60 ml-2">Full Name</Label>
          <Input
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className="h-14 rounded-2xl border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-md focus:ring-primary focus:border-primary transition-all duration-300"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-bold uppercase tracking-widest opacity-60 ml-2">Email Address</Label>
          <Input
            type="email"
            name="SenderEmail"
            required
            placeholder="john@example.com"
            className="h-14 rounded-2xl border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-md focus:ring-primary focus:border-primary transition-all duration-300"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-bold uppercase tracking-widest opacity-60 ml-2">Your Message</Label>
          <textarea
            placeholder="How can I help you?"
            name="message"
            required
            className="resize-none flex min-h-[150px] w-full rounded-[2rem] border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-md px-4 py-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300"
          ></textarea>
        </div>
        <Button type="submit" className="w-full h-14 rounded-full text-lg font-bold shadow-2xl hover:scale-[1.02] transition-transform duration-300 bg-primary text-primary-foreground">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
