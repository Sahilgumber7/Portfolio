import ContactForm from "@/components/ContactForm";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

const contactPage = () => {
  return (
    <div className="h-full w-full py-8 md:py-12 flex flex-col items-center justify-center p-4">
      <FramerWrapper
        className="w-full max-w-4xl backdrop-blur-xl bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl flex flex-col gap-10"
        y={0}
        scale={1}
      >
        <div className="flex flex-col items-start gap-5">
          <Badge variant="outline" className="gap-1.5 py-1.5 px-4 rounded-full border-primary/20 bg-primary/5">
            <Phone className="h-4 w-4" />
            Contact Me
          </Badge>

          <div className="flex flex-col gap-3">
            <Heading>Get In Touch</Heading>
            <p className="font-poppins text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
              Have a project in mind or just want to say hi? I&apos;m always open to new opportunities
              and collaborations. Send me a message and I&apos;ll get back to you soon!
            </p>
          </div>
        </div>

        <div className="w-full">
          <FramerWrapper y={50} delay={0.2} className="w-full">
            <div className="p-1 rounded-[2rem] bg-gradient-to-tr from-primary/10 to-transparent">
              <ContactForm />
            </div>
          </FramerWrapper>
        </div>
      </FramerWrapper>
    </div>
  );
};

export default contactPage;
