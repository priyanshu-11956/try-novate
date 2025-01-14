"use client";

import { motion } from "framer-motion";
import { Cpu, ThumbsUp, Handshake, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Cpu,
    title: "Smart Integration",
    description: "Seamlessly connect all your devices into one intelligent ecosystem",
  },
  {
    icon: Handshake,
    title: "Customer Support ",
    description: "Seamlessly resolve your queries with our intelligent and responsive support.",
  },
  {
    icon: ThumbsUp,
    title: "Reliabilty",
    description: "Maximize your Comfort with our automation",
  },
  {
    icon: Award,
    title: "Satisfaction",
    description: "Customer's satisfaction is our top priority",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionizing Home Automation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge IoT technology with intuitive design to create
            the most advanced home automation solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}