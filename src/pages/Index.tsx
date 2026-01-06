import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIBackground from "@/components/AIBackground";
import AnimatedNeuralNetwork from "@/components/AnimatedNeuralNetwork";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed AI Background with mesh gradient */}
      <AIBackground />
      
      {/* Animated Neural Network that reacts to scroll */}
      <AnimatedNeuralNetwork />
      
      {/* Main content */}
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;