'use client'

import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { Card } from "@/components/ui/card";
import { FloatingCard3D } from "@/components/FloatingCard3D";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";
import { APP_CONFIG } from "@/config/app";

const plans = [
  {
    name: "Starter",
    price: "0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "5 AI interviews per month",
      "Basic feedback analysis",
      "100+ practice questions",
      "Community support",
      "Progress tracking"
    ],
    cta: "Start Free",
    popular: false,
    gradient: "from-gray-500 to-gray-700"
  },
  {
    name: "Professional",
    price: "29",
    period: "per month",
    description: "For serious job seekers",
    features: [
      "Unlimited AI interviews",
      "Advanced AI feedback",
      "1000+ practice questions",
      "Priority support",
      "Code evaluation & review",
      "Interview recordings",
      "Custom practice plans",
      "Company-specific prep",
      "Performance analytics"
    ],
    cta: "Start 14-Day Trial",
    popular: true,
    gradient: "from-purple-500 via-blue-500 to-cyan-500"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For teams and organizations",
    features: [
      "Everything in Professional",
      "Team management dashboard",
      "Custom question banks",
      "API access",
      "Dedicated account manager",
      "SSO & advanced security",
      "Usage analytics",
      "Custom integrations",
      "SLA guarantee"
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "from-cyan-500 to-teal-500"
  }
];

export function PricingSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal direction="up">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm mb-6"
            >
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Simple Pricing
              </span>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Choose Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Start free, upgrade when you're ready. All plans include our core AI features.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Cards */}
        <ScrollRevealStagger staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <ScrollRevealItem
                key={index}
                className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
              <FloatingCard3D intensity={plan.popular ? 8 : 5}>
                <Card className={`relative h-full bg-black/40 backdrop-blur-sm border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden ${
                plan.popular ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' : ''
              }`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative p-8 space-y-6">
                  {/* Plan Name */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    {plan.price !== "Custom" && <span className="text-gray-400 text-2xl">$</span>}
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-purple-400' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <GradientButton variant="variant" asChild className="w-full py-6 text-lg">
                    <a href={plan.name === "Enterprise" 
                      ? `mailto:sales@pytai.space?subject=Enterprise Plan Inquiry`
                      : APP_CONFIG.getMainAppUrl(APP_CONFIG.routes.signup)
                    }>
                      {plan.cta}
                    </a>
                  </GradientButton>
                </div>
              </Card>
              </FloatingCard3D>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollRevealStagger>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-12"
        >
          All plans include 14-day money-back guarantee • No credit card required for free plan
        </motion.p>
      </div>
    </section>
  );
}
