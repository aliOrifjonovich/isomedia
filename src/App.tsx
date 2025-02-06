import React, { useState, useEffect } from "react";
import {
  Play,
  Camera,
  Film,
  Video,
  Edit3,
  Award,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Zap,
  Monitor,
  Globe,
  Tv,
} from "lucide-react";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film className="w-8 h-8 text-red-500" />
            <span className="text-2xl font-bold">
              FUTURE<span className="text-red-500">STUDIO</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-red-500 transition">
              About
            </a>
            <a href="#services" className="hover:text-red-500 transition">
              Services
            </a>
            <a href="#portfolio" className="hover:text-red-500 transition">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-red-500 transition">
              Contact
            </a>
            <button className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-set-of-screens-showing-different-information-27809-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-red-500 animate-pulse mr-2" />
            <span className="text-xl text-red-500">
              Welcome to the Future of Video Production
            </span>
          </div>
          <h1 className="text-7xl font-bold mb-6 leading-tight">
            Where <span className="text-gradient">Innovation</span> Meets{" "}
            <span className="text-gradient">Storytelling</span>
          </h1>
          <p className="text-xl mb-12 text-gray-300">
            Pushing the boundaries of visual storytelling with cutting-edge
            technology and creative excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-semibold transition animate-pulse-glow group">
              <span className="flex items-center justify-center gap-2">
                Start Your Project
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="glass-effect px-8 py-4 rounded-full font-semibold transition hover:bg-white/20">
              Watch Showreel
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden animate-float">
                <img
                  src="https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?auto=format&fit=crop&q=80"
                  alt="Future Studio"
                  className="w-full rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent"></div>
              </div>
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-8">
                Crafting the Future of{" "}
                <span className="text-gradient">Visual Excellence</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Since 2010, we've been at the forefront of video production
                innovation, combining cutting-edge technology with creative
                storytelling to deliver content that transcends traditional
                boundaries.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: <Monitor className="w-8 h-8" />,
                    title: "8K Resolution",
                    desc: "Ultra-high definition",
                  },
                  {
                    icon: <Globe className="w-8 h-8" />,
                    title: "Global Reach",
                    desc: "Worldwide production",
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Fast Delivery",
                    desc: "Quick turnaround",
                  },
                  {
                    icon: <Tv className="w-8 h-8" />,
                    title: "Multi-Platform",
                    desc: "Cross-platform content",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="glass-effect p-6 rounded-xl hover-up"
                  >
                    <div className="text-red-500 mb-4">{item.icon}</div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gradient-dark clip-path-slant">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Leveraging cutting-edge technology and creative expertise to
              deliver exceptional video content for the modern digital
              landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="w-12 h-12" />,
                title: "Virtual Production",
                description:
                  "State-of-the-art LED wall virtual production for unlimited creative possibilities",
              },
              {
                icon: <Film className="w-12 h-12" />,
                title: "Cinematic AR/VR",
                description:
                  "Immersive storytelling experiences in virtual and augmented reality",
              },
              {
                icon: <Camera className="w-12 h-12" />,
                title: "Drone Cinematography",
                description: "Breathtaking aerial footage with 8K resolution",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-2xl hover-up group"
              >
                <div className="text-red-500 mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <button className="mt-6 text-red-500 flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <Play className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-20">
            Featured Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cyberpunk 2077 Commercial",
                category: "Gaming",
                image:
                  "https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?auto=format&fit=crop&q=80",
              },
              {
                title: "Tesla Vision",
                category: "Automotive",
                image:
                  "https://images.unsplash.com/photo-1523251343397-9225e4cb6319?auto=format&fit=crop&q=80",
              },
              {
                title: "SpaceX Documentary",
                category: "Technology",
                image:
                  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
              },
              {
                title: "Nike Future Sport",
                category: "Sports",
                image:
                  "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6d?auto=format&fit=crop&q=80",
              },
              {
                title: "Apple Vision Pro",
                category: "Technology",
                image:
                  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80",
              },
              {
                title: "Metaverse Experience",
                category: "Virtual Reality",
                image:
                  "https://images.unsplash.com/photo-1582152629442-4a864303fb96?auto=format&fit=crop&q=80",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl hover-up"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-red-500 text-sm mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <button className="flex items-center gap-2 text-red-500">
                      Watch Project <Play className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-20">
            Meet Our Visionaries
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Creative Director",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
                social: {
                  linkedin: "https://linkedin.com",
                  twitter: "https://twitter.com",
                  instagram: "https://instagram.com",
                  facebook: "https://facebook.com",
                },
              },
              {
                name: "Sarah Williams",
                role: "VFX Supervisor",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
                social: {
                  linkedin: "https://linkedin.com",
                  twitter: "https://twitter.com",
                  instagram: "https://instagram.com",
                  facebook: "https://facebook.com",
                },
              },
              {
                name: "Marcus Johnson",
                role: "Technical Director",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
                social: {
                  linkedin: "https://linkedin.com",
                  twitter: "https://twitter.com",
                  instagram: "https://instagram.com",
                  facebook: "https://facebook.com",
                },
              },
              {
                name: "Emma Rodriguez",
                role: "AR/VR Specialist",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
                social: {
                  linkedin: "https://linkedin.com",
                  twitter: "https://twitter.com",
                  instagram: "https://instagram.com",
                  facebook: "https://facebook.com",
                },
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex gap-4 justify-center">
                        <a
                          href={member.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 p-2 rounded-full hover:bg-red-500 transition-colors duration-300"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 p-2 rounded-full hover:bg-red-500 transition-colors duration-300"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 p-2 rounded-full hover:bg-red-500 transition-colors duration-300"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 p-2 rounded-full hover:bg-red-500 transition-colors duration-300"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-red-500 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-bold mb-8">
                Let's Create Something{" "}
                <span className="text-gradient">Amazing</span>
              </h2>
              <p className="text-gray-300 mb-12">
                Ready to bring your vision to life? Our team of experts is here
                to help you create stunning visual content that pushes the
                boundaries of what's possible.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                    <Phone className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                    <Mail className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-gray-300">hello@futurestudio.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-gray-300">
                      123 Innovation Ave, CA 90210
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-effect p-8 rounded-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition"
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition"
                ></textarea>
                <button className="w-full bg-red-500 hover:bg-red-600 py-4 rounded-lg font-semibold transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Film className="w-8 h-8 text-red-500" />
                <span className="text-2xl font-bold">
                  FUTURE<span className="text-red-500">STUDIO</span>
                </span>
              </div>
              <p className="text-gray-400">
                Pioneering the future of visual storytelling through innovation
                and creativity.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="hover:text-red-500 transition cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-red-500 transition cursor-pointer">
                  Services
                </li>
                <li className="hover:text-red-500 transition cursor-pointer">
                  Portfolio
                </li>
                <li className="hover:text-red-500 transition cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="hover:text-red-500 transition cursor-pointer">
                  Virtual Production
                </li>
                <li className="hover:text-red-500 transition cursor-pointer">
                  Cinematic AR/VR
                </li>
                <li className="hover:text-red-500 transition cursor-pointer">
                  Drone Cinematography
                </li>
                <li className="hover:text-red-500 transition cursor-pointer">
                  Post Production
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest projects and innovations
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-l-lg focus:outline-none focus:border-red-500"
                />
                <button className="bg-red-500 hover:bg-red-600 px-6 rounded-r-lg transition">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2024 FutureStudio. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Facebook className="w-6 h-6 hover:text-red-500 cursor-pointer transition" />
              <Twitter className="w-6 h-6 hover:text-red-500 cursor-pointer transition" />
              <Instagram className="w-6 h-6 hover:text-red-500 cursor-pointer transition" />
              <Linkedin className="w-6 h-6 hover:text-red-500 cursor-pointer transition" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
