import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import quickPharmaLogo from "@/assets/quickpharma-logo.png";
import heroMotion from "@/assets/hero-motion.mp4.asset.json";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background motion video */}
      <video
        src={heroMotion.url}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      {/* Mesh background */}
      <div className="absolute inset-0 bg-mesh opacity-70" />
      <div className="absolute inset-0 bg-gradient-soft opacity-50" />
      <div className="absolute inset-0 bg-background/30" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-32 -right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 -left-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <Sparkles size={14} />
            A Healthcare Revolution
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            Smarter Healthcare.{" "}
            <span className="text-gradient">Faster Access.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            AI-powered healthcare ecosystem designed for modern India — bringing doctors, pharmacies, and care to your fingertips in minutes.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#services">
                Explore Services <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="outlineSoft" size="xl" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            {[
              { v: "10–15", l: "min response" },
              { v: "6+", l: "core services" },
              { v: "AI", l: "powered care" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="text-2xl font-display font-bold text-primary-deep">{s.v}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Central card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-8 rounded-[2.5rem] bg-gradient-hero shadow-elevated p-8 flex flex-col justify-between text-primary-foreground"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs opacity-80 uppercase tracking-wider">Live Care</div>
                  <div className="font-display text-2xl font-bold mt-1">MyCare AI</div>
                </div>
                <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
              </div>

              <div className="space-y-3">
                {["Heart rate · 72 bpm", "Pharmacy in 15 min", "Doctor available now"].map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.3 }}
                    className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 text-sm"
                  >
                    {t}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -top-4 -left-4 glass shadow-card rounded-2xl p-2 pr-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                <img src={quickPharmaLogo} alt="Quick Pharma logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Quick Pharma</div>
                <div className="text-sm font-semibold">15 min delivery</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 glass shadow-card rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary">★</div>
              <div>
                <div className="text-xs text-muted-foreground">Trusted by</div>
                <div className="text-sm font-semibold">Modern India</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
