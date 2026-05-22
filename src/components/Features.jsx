import React from 'react';
import FeatureCard from './FeatureCard';
import { FaHandSparkles, FaSmile, FaRunning, FaBookOpen, FaUsers } from 'react-icons/fa';

const featuresData = [
  {
    title: "Mudra Detection",
    description: "AI-based recognition of Bharatanatyam mudras and hand gestures in real time.",
    icon: <FaHandSparkles />,
    link: "https://mudra-detection.vercel.app/"
  },
  {
    title: "Bhava Detection",
    description: "Analyzes facial expressions and emotions to identify the bhava conveyed.",
    icon: <FaSmile />,
    link: "https://bhava-detection-1.onrender.com/"
  },
  {
    title: "Posture Detection",
    description: "Evaluates body alignment and movement precision for better performance accuracy.",
    icon: <FaRunning />,
    link: "https://nritya-posture-p6cpji2l6-richa-s-nritya.vercel.app?_vercel_share=KwmAiOiRITc6MdHS3IEpcsW9NtzveMpE"
  },
  {
    title: "Dance Interpretation",
    description: "Generates context, storyline, and rasa interpretation from dance sequences.",
    icon: <FaBookOpen />,
    link: "https://nritya-ai-interpretation-engine.vercel.app/"
  },
  {
    title: "Community",
    description: "A collaborative space to connect, share, learn, and grow together.",
    icon: <FaUsers />,
    link: "https://nrityaai-community-chatbot-3.onrender.com/"
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-32 px-4 sm:px-6 md:px-8 z-10 w-full overflow-hidden">
      <div className="max-w-[1600px] w-full mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Core <span className="text-gradient-gold">Features</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto gold-glow" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
