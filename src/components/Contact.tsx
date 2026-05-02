import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const channels = [
  { icon: Mail, label: "Email", value: "getmycare108@gmail.com", href: "mailto:getmycare108@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 91016 13924", href: "tel:+919101613924" },
  { icon: Linkedin, label: "LinkedIn", value: "@mycare", href: "https://linkedin.com" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh" />
      <div className="container relative px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto rounded-3xl bg-gradient-hero px-5 py-8 sm:px-8 md:px-16 md:py-16 shadow-elevated overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center text-primary-foreground">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest opacity-90 mb-4">Connect</div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Partner with us to build the future of healthcare.
              </h2>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                We're always open to conversations with investors, providers, and partners who share our vision.
              </p>
              <Button variant="onPrimary" size="xl" asChild>
                <a href="mailto:getmycare108@gmail.com">
                  Partner with Us <ArrowRight size={18} />
                </a>
              </Button>
            </div>

            <div className="space-y-3">
              {channels.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/15 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                    <c.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-widest opacity-80">{c.label}</div>
                    <div className="font-semibold">{c.value}</div>
                  </div>
                  <ArrowRight size={18} className="opacity-60 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
