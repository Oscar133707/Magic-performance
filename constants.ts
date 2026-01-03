import { Article, ServicePackage, Testimonial, FAQ } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Velocity-Based Training: A Practical Guide',
    excerpt: 'Understanding the mechanics of VBT and how to implement it for autoregulation in elite athletic populations.',
    content: 'Velocity-Based Training (VBT) allows us to measure the speed of the bar to dictate load for the day. This autoregulatory method ensures that athletes are training at the optimal intensity for their current physiological state...',
    category: 'Methodology',
    date: 'Oct 12, 2023',
    author: 'Arto Alahäivälä',
    readTime: '8 min read',
    imageUrl: 'https://picsum.photos/800/600?grayscale&random=1'
  },
  {
    id: '2',
    title: 'The Myth of Sport-Specific Training',
    excerpt: 'Why mimicking sporting movements in the weight room often leads to negative transfer and decreased performance.',
    content: 'The term "sport-specific" is often misused. True specificity occurs on the field. In the gym, we build the general physical qualities—force, power, capacity—that underpin sporting movement...',
    category: 'Sports Science',
    date: 'Nov 05, 2023',
    author: 'Arto Alahäivälä',
    readTime: '6 min read',
    imageUrl: 'https://picsum.photos/800/600?grayscale&random=2'
  },
  {
    id: '3',
    title: 'Periodization Strategies for In-Season Athletes',
    excerpt: 'Balancing volume and intensity to maintain peak power output while minimizing fatigue during the competitive season.',
    content: 'In-season training is about retention and micro-dosing stimulus. The goal is to keep the nervous system primed without digging a recovery hole that affects game day performance...',
    category: 'Programming',
    date: 'Dec 01, 2023',
    author: 'Arto Alahäivälä',
    readTime: '10 min read',
    imageUrl: 'https://picsum.photos/800/600?grayscale&random=3'
  },
  {
    id: '4',
    title: 'Test',
    excerpt: 'Building unilateral leg strength, balance, and durability without the spinal stress of heavy barbell lifts. A smarter approach to leg development for combat athletes.',
    content: `When we think strength work for fighters, we often jump straight to the big lifts like squats and deadlifts. Don't get me wrong, they're incredible tools. But here's the reality: once you're technically solid, those lifts let you stack up big weights. And while your legs are doing the heavy lifting, your spine becomes the middleman that takes the hit. That's where the problems begin.

A neutral spine is non-negotiable. Lose that lumbar curve under load, and you're putting huge stress on your back. Even world-class lifters lose it under max attempts. Fighters don't need that kind of risk, our job is to get stronger, faster, and more explosive without wrecking our bodies.

Then there's spinal compression. Heavy squats and pulls load the discs hard. Great for absolute strength, but risky if something's even slightly misaligned. The answer isn't ditching squats or deadlifts, they're still king. The answer is balancing them with smarter tools that give us the same leg-building benefits with less risk.

Enter the Bulgarian Split Squat.

## What Are Bulgarian Split Squats?

A Bulgarian Split Squat is basically a rear-foot elevated single-leg squat. One leg does the work, the other stabilizes. That means:

• Less spinal load (no more bar crushing down on your back).
• Upright torso position (no lumbar curve collapse).
• Huge carryover to hip mobility, balance, and unilateral leg strength (key for striking, kicking, and grappling).

For fighters, that's gold. Every punch, kick, or shot starts from the ground up. If one leg lags behind, it shows in your movement. BSS fixes that.

## How To Do Them

1. Stand with your back to a bench or box, rear foot resting on it.
2. Sit on the bench or box, measure with full leg length and stand up.
3. Drop your rear knee towards the floor, controlled, no crashing.
4. Drive through the heel of your front foot to stand tall.
5. Keep chest up, core locked, and repeat.

Start bodyweight only. You'll wobble, normal. Balance and stability come fast. Once you own the pattern, add load (dumbbells, barbell, or weighted vest).

## Troubleshooting

• Losing balance? Use a wall or stick for support at first.
• Knee pain? Lengthen your stance and focus on vertical shin.
• Hip/groin pain? Shorten your stance or reduce range until mobility improves.

## Progressions For Fighters

When bodyweight is easy, level up:

• Dumbbells in each hand.
• Front rack position (forces core stability).
• Overhead hold (total-body coordination).
• Weighted vest or rucksack (conditioning style).
• Explosive jump split squats (translates to knockout power).

## How To Program Them

The beauty of Bulgarian Split Squats is they can be tuned for different fight demands:

• Strength (base building): 3-5 sets of 5-8 reps per leg, moderate to heavy load, tempo 31X (3s down, 1s pause, explode up).
• Hypertrophy (muscle growth): 3-4 sets of 8-12 reps, steady tempo (202), add dumbbells or front rack barbell.
• Power/Explosiveness: 3-5 sets of 3-6 jump split squats, rest fully between sets.
• Endurance/Conditioning: 2-3 sets of 15-20 reps bodyweight or with vest, short rests (30-45s).

## Angle Differences

• Longer stance: more glute/hamstring bias.
• Shorter stance: more quad focus.
• Torso upright: quad dominant.
• Torso angled forward: glute dominant.

## Tempo Tweaks

• Slow eccentric (3-5s down): control, hypertrophy, stability.
• Pause at the bottom: builds strength out of the hole.
• Explosive concentric: translates directly to more fight power.

## Contrast Pairings (Fight-Specific Combos)

Pair heavy or controlled split squats with explosive movements for fight carryover:

• Heavy DB Split Squat and Split Jump Squats (strength + power).
• Front Rack Split Squat and Med Ball Rotational Slam (core-to-extremity transfer).
• Tempo Split Squat (31X) and Kettlebell Swing (hip drive + speed).
• Bodyweight BSS and Sprint or Assault Bike Sprint (conditioning contrast).

This type of contrast pairing wires your nervous system to turn raw strength into fight-ready explosiveness.

## Why Fighters Need Bulgarian Split Squats

Striking: Better hip drive and leg power for kicks.
Grappling: Stronger base and balance in scrambles and clinches.
Bulletproofing: Less spinal stress, fewer injuries, more training longevity.
Carryover: Builds raw unilateral strength that directly transfers into fight movement.

Fighters don't just need to lift heavy. They need to lift smart. Bulgarian Split Squats are one of those love / hate "money" movements, building strength, balance, and durability without the wear and tear of big barbell lifts weekly. Every fighter should be hitting these in and outta camp.`,
    category: 'Sports Science',
    date: 'Sep 17, 2024',
    author: 'Coach Leroy',
    readTime: '12 min read',
    imageUrl: '/images/Bulgarian-Split-Squat-scaled.jpg'
  }
];

export const SERVICES: ServicePackage[] = [
  {
    id: '6-month',
    name: 'Performance Foundation',
    duration: '6 Months',
    price: '€1800',
    description: 'Ideal for off-season preparation or athletes targeting a specific competition date.',
    recommendedFor: 'Seasonal Athletes',
    features: [
      'Initial Movement & Capacity Assessment',
      'Custom Periodized Programming',
      'Weekly Check-ins & Adjustments',
      'Video Technique Analysis',
      'Nutritional Guidance'
    ]
  },
  {
    id: '8-month',
    name: 'Athlete Development',
    duration: '8 Months',
    price: '€2200',
    description: 'A comprehensive block allowing for hypertrophy, strength, and power phases.',
    recommendedFor: 'Semi-Pro & Serious Amateurs',
    features: [
      'Deep-Dive Biomechanical Analysis',
      'Advanced VBT Integration',
      'Bi-Weekly Video Consultations',
      'Daily Readiness Monitoring',
      'Competition Peaking Protocols',
      'Priority Support'
    ]
  },
  {
    id: '12-month',
    name: 'Elite Mastery',
    duration: '12 Months',
    price: '€3000',
    description: 'Full annual macrocycle management for year-round performance optimization.',
    recommendedFor: 'Professional Athletes',
    features: [
      'Complete Annual Periodization',
      'Load Management & Injury Prevention',
      'Unlimited Video Analysis',
      'Game/Match Performance Review',
      'Collaboration with Medical Staff',
      '24/7 Coach Access'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Lindström',
    role: 'Elite Track Athlete',
    quote: "Working with Arto taught me that the strongest muscle is your mind. Their evidence-based methodology helped me break through performance plateaus I didn't even know existed.",
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: '2',
    name: 'Mikko Virtanen',
    role: 'Professional Ice Hockey Player',
    quote: "The systematic approach completely transformed my training. I went from inconsistent performance to setting personal records. The sports science backing every decision made all the difference.",
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '3',
    name: 'Emma Karlsson',
    role: 'Competitive CrossFit Athlete',
    quote: "The individualized programming gave me the edge I needed to perform at the highest level. My strength, conditioning, and mental resilience have reached new heights.",
    imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

export const FAQS: FAQ[] = [
  {
    question: "What makes your coaching approach different?",
    answer: "Our methodology is rooted in current sports science research and evidence-based practices. We combine systematic strength and conditioning programming with individualized adjustments based on your specific goals, sport, and performance data. Every decision in your program has a scientific rationale."
  },
  {
    question: "How long are the coaching programs?",
    answer: "We offer three program lengths: 6 months, 8 months, and 12 months. Longer programs allow for more comprehensive development and better long-term results. All programs include personalized programming, regular check-ins, and ongoing support throughout your journey."
  },
  {
    question: "Do I need to be an elite athlete to work with you?",
    answer: "While we work with competitive and professional athletes, our programs are designed for anyone serious about improving their performance. Whether you're a dedicated amateur, semi-professional, or elite competitor, if you're committed to evidence-based training and systematic improvement, we can help you reach your goals."
  },
  {
    question: "What does 1-1 coaching include?",
    answer: "Your individualized coaching includes fully personalized training programming, regular video analysis and form checks, ongoing communication and support, progress tracking and assessments, program adjustments based on your response to training, and education on the principles behind your programming."
  }
];