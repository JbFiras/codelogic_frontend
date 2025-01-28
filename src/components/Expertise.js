"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Database, Container } from "lucide-react";
import CodePreview from "./CodePreview";

const expertiseData = [
    {
        icon: Globe,
        title: "Web Development",
        description: "React • Next.js • JavaScript • Node.js • TailwindCSS",
        color: "from-blue-500/20 to-indigo-500/20",
        iconColor: "text-blue-500",
        features: [
            "Server-Side Rendering",
            "Static Site Generation",
            "API Integration",
            "Performance Optimization",
            "SEO Best Practices",
        ],
        code: `// Next.js API Route with Edge Runtime
export const runtime = 'edge';
 
export async function GET() {
  const data = await fetch('https://api.example.com/data').then(res => res.json());
  return new Response(JSON.stringify({ data }), { headers: { 'Content-Type': 'application/json' } });
}`,
        language: "javascript",
    },
    {
        icon: Smartphone,
        title: "Mobile Development",
        description: "React Native • Flutter • iOS (Swift) • Android (Kotlin)",
        color: "from-green-500/20 to-emerald-500/20",
        iconColor: "text-green-500",
        features: [
            "Cross-Platform Development",
            "Native Performance",
            "Offline Support",
            "Push Notifications",
            "App Store Deployment",
        ],
        code: `// React Native Gesture Handler Example
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { 
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export function DraggableCard() {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onChange((event) => {
      offset.value = {
        x: event.changeX + offset.value.x,
        y: event.changeY + offset.value.y,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value.x },
      { translateY: offset.value.y },
      { scale: withSpring(isPressed.value ? 1.1 : 1) },
    ],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={animatedStyles}>
        {/* Card Content */}
      </Animated.View>
    </GestureDetector>
  );
}`,
        language: "javascript",
    },
    {
        icon: Database,
        title: "Backend",
        description: "Node.js • Python • PostgreSQL • MongoDB • GraphQL",
        color: "from-purple-500/20 to-violet-500/20",
        iconColor: "text-purple-500",
        features: [
            "Database Design",
            "API Development",
            "Authentication & Authorization",
            "Caching Strategies",
            "Microservices Architecture",
        ],
        code: `// Example Django ViewSet with async caching
from django.db.models import Prefetch, Q
from django.core.cache import cache
from rest_framework import viewsets

class PostViewSet(viewsets.ModelViewSet):
    async def get_queryset(self):
        cache_key = f"posts_{self.request.user.id}_{self.request.query_params}"
        queryset = cache.get(cache_key);

        if not queryset:
            base_queryset = Post.objects.prefetch_related(
                Prefetch('tags'),
                'author'
            ).filter(active=True);

            queryset = await sync_to_async(list)(base_queryset);
            cache.set(cache_key, queryset, timeout=300);

        return queryset`,
        language: "python",
    },
    {
        icon: Container,
        title: "DevOps",
        description: "Docker • Kubernetes • AWS • CI/CD • Terraform",
        color: "from-orange-500/20 to-red-500/20",
        iconColor: "text-orange-500",
        features: [
            "Infrastructure as Code",
            "Container Orchestration",
            "CI/CD Pipelines",
            "Cloud Architecture",
            "Monitoring & Logging",
        ],
        code: `# Terraform AWS EKS Configuration
resource "aws_eks_cluster" "main" {
  name     = "main-cluster"
  role_arn = aws_iam_role.eks_cluster.arn

  vpc_config {
    subnet_ids = var.subnet_ids
  }

  kubernetes_network_config {
    service_ipv4_cidr = "172.20.0.0/16"
  }
}`,
        language: "hcl",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function Expertise() {
    const [selectedCard, setSelectedCard] = useState("Web Development");

    const handleCardSelect = (title) => {
        if (title === selectedCard) {
            setSelectedCard("");
            return;
        }
        setSelectedCard(title);
    };

    return (
        <section className=" py-8 flex flex-col">
            <div className="container mx-auto px-4 flex-1 flex flex-col">
                <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-4">
                    Our Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative flex-1">
                {expertiseData.map((item, index) => (
                        <motion.div
                            key={item.title}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleCardSelect(item.title)}
                                className={`relative rounded-xl p-6 border border-white/10 shadow-xl cursor-pointer h-full flex flex-col overflow-hidden ${
                                    selectedCard === item.title ? "ring-2 ring-blue-500" : ""
                                }`}
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                                />
                                <div className="relative z-10">
                                    <div className={`${item.iconColor} mb-4`}>
                                        <item.icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                                    <ul className="text-gray-400 text-sm space-y-2 mt-auto">
                                        {item.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <span className="w-1.5 h-1.5 rounded-full bg-current mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                    {selectedCard && (
                        <CodePreview
                            code={
                                expertiseData.find((item) => item.title === selectedCard)?.code || ""
                            }
                            language={
                                expertiseData.find((item) => item.title === selectedCard)?.language ||
                                "javascript"
                            }
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
