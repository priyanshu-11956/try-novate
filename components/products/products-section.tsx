"use client";

import { motion } from "framer-motion";
import { Wifi, Shield, Smartphone, Mic, Cloud, Lock } from "lucide-react";
import Image from "next/image";

const products = [
  {
    title: "Online Automation Setup",
    description: "Connect your home to the cloud with our advanced online automation system. Control everything from anywhere using your smartphone or voice commands.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827",
    features: [
      { icon: Wifi, text: "Wi-Fi Enabled" },
      { icon: Mic, text: "Voice Control" },
      { icon: Smartphone, text: "Mobile App" },
      { icon: Cloud, text: "Cloud Integration" }
    ]
  },
  {
    title: "Offline Automation Setup",
    description: "A completely offline solution for those who prioritize privacy and local control. No internet required, yet fully automated.",
    image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8",
    features: [
      { icon: Shield, text: "Local Processing" },
      { icon: Lock, text: "Enhanced Privacy" },
      { icon: Smartphone, text: "Local Network" },
      { icon: Cloud, text: "No Cloud Dependency" }
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3
    }
  })
};

export default function ProductsSection() {
  return (
    <section id="products" className="py-2 md:py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Solutions
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the automation setup that best fits your needs
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative rounded-lg overflow-hidden transform-gpu"
            >
              <div className="relative h-[400px] w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-lg"
                />
                <motion.div 
                  className="absolute inset-0 bg-black/60"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <motion.h3 
                        className="text-2xl font-bold mb-2 text-white"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {product.title}
                      </motion.h3>
                      <motion.p 
                        className="mb-4 text-gray-200"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {product.description}
                      </motion.p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {product.features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                          <motion.div
                            key={i}
                            custom={i}
                            variants={featureVariants}
                            className="flex items-center space-x-2 text-white"
                          >
                            <Icon className="h-5 w-5" />
                            <span>{feature.text}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}