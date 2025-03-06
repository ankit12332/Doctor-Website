export const siteConfig = {
  // Company Information
  company: {
    name: "Healtrate.ai",
    tagline: "AI-Powered Healthcare Solutions",
    description: "Experience the future of medical practice management with AI-driven solutions.",
    email: "contact@Healtrate.ai",
    phone: "+1 (555) 123-4567",
    address: "123 Healthcare Avenue, San Francisco, CA 94103",
    foundedYear: 2022,
  },
  
  // Social Media
  social: {
    twitter: "https://twitter.com/Healtrate.ai",
    facebook: "https://facebook.com/Healtrate.ai",
    linkedin: "https://linkedin.com/company/Healtrate.ai",
    instagram: "https://instagram.com/Healtrate.ai",
  },
  
  // Contact Information
  contact: {
    demoEmail: "demos@Healtrate.ai.ai", // Email to receive demo notifications
    supportEmail: "support@Healtrate.ai.ai",
    salesEmail: "sales@Healtrate.ai.ai",
  },
  
  // Site Settings
  site: {
    url: "https://Healtrate.ai.ai",
    themeColor: "#2563EB", // Blue-600
    accentColor: "#1E40AF", // Blue-800
    secondaryColor: "#6366F1", // Indigo-500
  },
  
  // Admin Settings
  admin: {
    password: "Healtrate.ai2024", // Password to access admin area
    showAdminButton: false, // Whether to show admin button in navigation
  },
  
  // Legal
  legal: {
    privacyPolicyUrl: "/privacy-policy",
    termsOfServiceUrl: "/terms-of-service",
    cookiePolicyUrl: "/cookie-policy",
  },
  
  // Features
  features: {
    enableNewsletter: true,
    enableDemoBooking: true,
    enableBlog: true,
    enableTestimonials: true,
    enablePartners: true,
    enableStatistics: true,
  },

  // Home Page Content
  homePage: {
    hero: {
      title: "AI Agents",
      subtitle: "Specific for Healthcare",
      description: "Experience the future of medical practice management. Our AI agents work tirelessly to automate your administrative tasks, enhance patient care, and drive practice growth.",
      primaryButtonText: "Book a Demo",
      secondaryButtonText: "Explore Solutions",
      backgroundImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    },
    statistics: [
      { value: "95%", label: "Tasks Automated", description: "Reduction in administrative workload" },
      { value: "4+", label: "Hours Saved Daily", description: "More time for patient care" },
      { value: "60%", label: "Reduced Wait Time", description: "Improved patient satisfaction" },
      { value: "24/7", label: "AI Support", description: "Always available assistance" }
    ],
    testimonials: [
      {
        quote: "Healtrate.ai has transformed our practice. We've reduced administrative time by 70% and can now focus on what matters most - our patients.",
        author: "Dr. Sarah Johnson",
        title: "Family Medicine, Johnson Medical Group",
        rating: 5,
        image: "/testimonials/sarah.jpg"
      },
      {
        quote: "The AI scheduling assistant alone has saved us countless hours. Patient satisfaction is up, and no-shows are down by 35%.",
        author: "Dr. Michael Chen",
        title: "Pediatrician, Healthy Kids Clinic",
        rating: 5,
        image: "/testimonials/michael.jpg"
      },
      {
        quote: "Implementation was seamless, and the ROI was immediate. Our practice has seen a 25% increase in revenue since adopting Healtrate.ai.",
        author: "Amanda Rodriguez",
        title: "Practice Manager, Wellness Medical Center",
        rating: 5,
        image: "/testimonials/amanda.jpg"
      }
    ],
    partners: [
      { name: "Memorial Healthcare", logo: "/partners/memorial.svg" },
      { name: "Pacific Medical Group", logo: "/partners/pacific.svg" },
      { name: "Northside Hospital", logo: "/partners/northside.svg" },
      { name: "Wellness Network", logo: "/partners/wellness.svg" },
      { name: "MedTech Solutions", logo: "/partners/medtech.svg" },
      { name: "Healthcare Alliance", logo: "/partners/alliance.svg" }
    ]
  },

  // Solutions Page Content
  solutionsPage: {
    hero: {
      title: "Our Solutions",
      subtitle: "Tailored for Your Practice",
      description: "Discover how our AI-powered platform addresses the unique challenges of modern healthcare practices."
    },
    statistics: [
      { value: "68%", label: "Reduction in Administrative Time", description: "More focus on patient care" },
      { value: "32%", label: "Increase in Revenue", description: "Through optimized billing and scheduling" },
      { value: "94%", label: "Patient Satisfaction", description: "Improved experience and engagement" },
      { value: "3.5x", label: "Return on Investment", description: "Within the first year" }
    ],
    progressBars: [
      { label: "Appointment No-Shows", value: -78, description: "Reduction in missed appointments" },
      { label: "Billing Accuracy", value: 95, description: "Increase in correct claims" },
      { label: "Patient Wait Time", value: -62, description: "Reduction in waiting room time" },
      { label: "New Patient Acquisition", value: 45, description: "Increase in new patients" }
    ]
  },

  // Demo Page Content
  demoPage: {
    title: "Experience Healtrate.ai in Action",
    description: "Schedule a personalized demo to see how our AI-powered platform can transform your healthcare practice",
    benefits: [
      {
        title: "Personalized Walkthrough",
        description: "See how Healtrate.ai adapts to your specific practice workflow and requirements."
      },
      {
        title: "Q&A Session",
        description: "Get all your questions answered by our healthcare technology experts."
      },
      {
        title: "Custom ROI Analysis",
        description: "Understand the potential time and cost savings for your specific practice."
      }
    ]
  },

  // About Page Content
  aboutPage: {
    hero: {
      title: "About Healtrate.ai",
      subtitle: "Our Story",
      description: "We're on a mission to revolutionize healthcare practice management through intelligent automation and AI-driven solutions."
    },
    mission: {
      title: "Our Mission",
      description: "At Healtrate.ai, we believe that healthcare providers should focus on what they do best - providing exceptional patient care. Our AI-powered platform handles the rest, automating administrative tasks and optimizing practice operations.",
      additionalText: "We're committed to developing cutting-edge AI solutions that are secure, reliable, and tailored to the unique needs of healthcare practices.",
      image: "/about/mission.jpg"
    },
    values: [
      "Innovation in Healthcare",
      "Patient-Centric Approach",
      "Security & Privacy",
      "Continuous Improvement"
    ],
    stats: [
      { number: "10,000+", label: "Healthcare Providers" },
      { number: "1M+", label: "Patients Served" },
      { number: "99.9%", label: "System Uptime" },
      { number: "24/7", label: "Support Available" }
    ],
    team: [
      {
        name: "Dr. Sarah Johnson",
        role: "Chief Medical Officer",
        image: "/team/sarah.jpg",
        bio: "Former practicing physician with 15 years of experience in healthcare technology."
      },
      {
        name: "Michael Chen",
        role: "Chief Technology Officer",
        image: "/team/michael.jpg",
        bio: "AI researcher and engineer with expertise in healthcare automation systems."
      },
      {
        name: "Dr. James Wilson",
        role: "Head of Medical AI",
        image: "/team/james.jpg",
        bio: "Specialist in AI applications for clinical workflow optimization."
      },
      {
        name: "Emily Rodriguez",
        role: "Head of Product",
        image: "/team/emily.jpg",
        bio: "Healthcare product expert focused on user-centered design."
      }
    ]
  },

  // AI Agents Page Content
  aiAgentsPage: {
    hero: {
      title: "AI Agents for Healthcare",
      subtitle: "Intelligent Automation",
      description: "Our specialized AI agents work together to streamline every aspect of your healthcare practice."
    },
    agents: [
      {
        name: "Scheduler Agent",
        description: "Intelligent appointment scheduling and management",
        icon: "CalendarIcon",
        color: "blue",
        image: "/agents/scheduler.jpg",
        capabilities: [
          "Smart conflict resolution for appointments",
          "Automated reminders and follow-ups",
          "Real-time availability updates",
          "Patient preference learning",
          "Multi-location scheduling support"
        ],
        benefits: [
          "Reduces no-shows by 60%",
          "Saves 15+ hours per week",
          "Improves patient satisfaction",
          "Optimizes clinic utilization"
        ]
      },
      {
        name: "Billing Agent",
        description: "Automated billing and revenue cycle management",
        icon: "CurrencyDollarIcon",
        color: "green",
        image: "/agents/billing.jpg",
        capabilities: [
          "Automated claim submission",
          "Real-time eligibility verification",
          "Payment processing automation",
          "Denial management",
          "Revenue cycle optimization"
        ],
        benefits: [
          "Reduces claim denials by 45%",
          "Accelerates payment collection",
          "Minimizes billing errors",
          "Increases revenue capture"
        ]
      },
      {
        name: "Patient Engagement Agent",
        description: "Personalized patient communication and follow-up",
        icon: "MegaphoneIcon",
        color: "purple",
        image: "/agents/patient-engagement.jpg",
        capabilities: [
          "Automated appointment reminders",
          "Personalized health education",
          "Medication adherence tracking",
          "Patient satisfaction surveys",
          "Two-way secure messaging"
        ],
        benefits: [
          "Improves treatment adherence by 40%",
          "Enhances patient satisfaction",
          "Reduces staff communication workload",
          "Strengthens patient relationships"
        ]
      },
      {
        name: "Documentation Agent",
        description: "Intelligent medical documentation and note-taking",
        icon: "DocumentTextIcon",
        color: "indigo",
        image: "/agents/documentation.jpg",
        capabilities: [
          "Voice-to-text transcription",
          "Automated clinical note generation",
          "Medical terminology recognition",
          "EHR integration",
          "Documentation compliance checking"
        ],
        benefits: [
          "Saves 2+ hours of documentation daily",
          "Improves note accuracy and completeness",
          "Reduces physician burnout",
          "Enhances patient interaction time"
        ]
      },
      {
        name: "Analytics Agent",
        description: "Practice insights and performance analytics",
        icon: "ChartBarIcon",
        color: "yellow",
        image: "/agents/analytics.jpg",
        capabilities: [
          "Financial performance tracking",
          "Clinical outcomes analysis",
          "Operational efficiency metrics",
          "Predictive analytics",
          "Custom reporting and dashboards"
        ],
        benefits: [
          "Identifies revenue opportunities",
          "Improves clinical outcomes",
          "Optimizes resource allocation",
          "Enables data-driven decisions"
        ]
      },
      {
        name: "Inventory Agent",
        description: "Smart inventory and supply chain management",
        icon: "ArchiveBoxIcon",
        color: "orange",
        image: "/agents/inventory.jpg",
        capabilities: [
          "Automated inventory tracking",
          "Predictive ordering",
          "Expiration date monitoring",
          "Vendor management",
          "Cost optimization"
        ],
        benefits: [
          "Reduces waste by 30%",
          "Prevents stockouts",
          "Optimizes inventory costs",
          "Streamlines procurement processes"
        ]
      },
      {
        name: "Compliance Agent",
        description: "Regulatory compliance and risk management",
        icon: "ShieldCheckIcon",
        color: "red",
        image: "/agents/compliance.jpg",
        capabilities: [
          "Automated compliance checks",
          "Regulatory updates monitoring",
          "Audit preparation",
          "Risk assessment",
          "Policy management"
        ],
        benefits: [
          "Minimizes compliance risks",
          "Reduces audit preparation time",
          "Prevents penalties and fines",
          "Ensures regulatory adherence"
        ]
      },
      {
        name: "Referral Agent",
        description: "Streamlined referral management and tracking",
        icon: "ArrowPathIcon",
        color: "teal",
        image: "/agents/referral.jpg",
        capabilities: [
          "Automated referral processing",
          "Specialist network management",
          "Insurance verification",
          "Referral tracking",
          "Patient follow-up coordination"
        ],
        benefits: [
          "Reduces referral leakage by 35%",
          "Accelerates referral process",
          "Improves care coordination",
          "Enhances patient experience"
        ]
      },
      {
        name: "Telehealth Agent",
        description: "Virtual care and telehealth facilitation",
        icon: "VideoCameraIcon",
        color: "cyan",
        image: "/agents/telehealth.jpg",
        capabilities: [
          "Virtual waiting room management",
          "Video consultation facilitation",
          "Digital intake processing",
          "Remote monitoring integration",
          "Telehealth billing support"
        ],
        benefits: [
          "Expands patient access to care",
          "Reduces no-show rates",
          "Increases practice efficiency",
          "Enhances care convenience"
        ]
      }
    ]
  },

  // Insights Page Content
  insightsPage: {
    hero: {
      title: "Healtrate.ai Insights",
      subtitle: "Healthcare Knowledge Hub",
      description: "Stay updated with the latest trends and insights in healthcare automation"
    },
    categories: [
      "All",
      "AI in Healthcare",
      "Practice Management",
      "Patient Care",
      "Technology",
      "Success Stories"
    ],
    articles: [
      {
        title: "5 Ways AI is Revolutionizing Medical Practice Management",
        excerpt: "Discover how artificial intelligence is transforming the way healthcare providers manage their practices, from scheduling to billing.",
        category: "AI in Healthcare",
        author: "Dr. Sarah Johnson",
        authorImage: "/authors/sarah.jpg",
        date: "March 1, 2024",
        readTime: "5 min read",
        image: "/blog/ai-revolution.jpg",
        slug: "ai-revolutionizing-medical-practice-management",
        content: "Full article content goes here...",
        featured: true
      },
      {
        title: "The Future of Healthcare Automation",
        excerpt: "Learn about the latest trends in healthcare automation and how they're shaping the future of medical practices worldwide.",
        category: "Technology",
        author: "Michael Chen",
        authorImage: "/authors/michael.jpg",
        date: "February 28, 2024",
        readTime: "4 min read",
        image: "/blog/healthcare-future.jpg",
        slug: "future-healthcare-automation",
        content: "Full article content goes here...",
        featured: false
      },
      {
        title: "Success Story: How Dr. Smith Doubled Patient Satisfaction",
        excerpt: "Read how one doctor transformed their practice using AI-powered automation tools and improved patient outcomes.",
        category: "Success Stories",
        author: "Emily Rodriguez",
        authorImage: "/authors/emily.jpg",
        date: "February 25, 2024",
        readTime: "6 min read",
        image: "/blog/success-story.jpg",
        slug: "dr-smith-doubled-patient-satisfaction",
        content: "Full article content goes here...",
        featured: true
      },
      {
        title: "Maximizing Revenue with AI-Powered Billing",
        excerpt: "Explore how intelligent automation can streamline your billing process and improve revenue collection.",
        category: "Practice Management",
        author: "James Wilson",
        authorImage: "/authors/james.jpg",
        date: "February 22, 2024",
        readTime: "4 min read",
        image: "/blog/revenue-ai.jpg",
        slug: "maximizing-revenue-ai-billing",
        content: "Full article content goes here...",
        featured: false
      }
    ]
  }
};

export default siteConfig; 