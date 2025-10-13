import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  ArrowDown, 
  Instagram, 
  Linkedin, 
  Mail, 
  Calendar, 
  MapPin, 
  GraduationCap,
  ChevronRight,
  CheckCircle,
  Star,
  TrendingUp,
  ShoppingCart,
  Code,
  BarChart3,
  Palette,
  Users,
  Award,
  Target,
  Package,
  Globe,
  Copy,
  Send,
  X,
  Github,
  ExternalLink
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [copied, setCopied] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const copyToClipboard = () => {
    navigator.clipboard.writeText('cnttoujjval@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Basic validation
    if (!formData.name || !formData.email) {
      console.error('Name and email are required');
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
      return;
    }
    
    try {
      // EmailJS configuration
      const serviceId = 'service_1eoy79p';
      const templateId = 'template_7ha8f0e';
      const publicKey = 'NxNDv3PYPkFfxgNVt';
      
      // Initialize EmailJS (required)
      emailjs.init(publicKey);
      
      // Check if EmailJS is configured
      if (serviceId.includes('xxxxxxx') || templateId.includes('xxxxxxx') || publicKey.includes('xxxxxxx')) {
        // Demo mode - simulate form submission for testing UI
        console.log('📧 Form Demo Mode - Add your EmailJS credentials to send real emails');
        console.log('📋 Form Data:', formData);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          service: '',
          budget: '',
          message: ''
        });
        setTimeout(() => setFormStatus('idle'), 5000);
        return;
      }
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        service_interested: formData.service,
        budget_range: formData.budget,
        message: formData.message,
        to_email: 'cnttoujjval@gmail.com',
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams);
      
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        service: '',
        budget: '',
        message: ''
      });
      setTimeout(() => setFormStatus('idle'), 5000);
      
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      console.error('Error Status:', error.status);
      console.error('Error Text:', error.text);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Erigo Originals Digital Transformation",
      category: "Social Media",
      description: "Complete digital presence management across 6+ platforms",
      image: "https://placehold.co/400x300/6B46C1/FFFFFF?text=Erigo+Originals",
      caseStudy: {
        overview: "Led the complete digital transformation of Erigo Originals, establishing their presence across multiple social media platforms and implementing comprehensive content strategies.",
        challenge: "Erigo Originals had minimal digital presence and needed to establish brand recognition across social media platforms to reach their target audience.",
        solution: "Developed multi-platform strategy covering Instagram, Facebook, LinkedIn, Twitter, YouTube, and TikTok with consistent branding and engaging content.",
        results: [
          "6+ platforms successfully launched",
          "500% increase in social media engagement",
          "200+ content pieces created monthly",
          "50% growth in brand recognition"
        ],
        technologies: ["Instagram", "Facebook", "LinkedIn", "Twitter", "YouTube", "TikTok", "Canva", "Analytics Tools"]
      }
    },
    {
      id: 2,
      title: "E-commerce Platform Setup",
      category: "E-commerce",
      description: "Multi-platform product listing and optimization",
      image: "https://placehold.co/400x300/3B82F6/FFFFFF?text=E-commerce+Setup",
      caseStudy: {
        overview: "Set up comprehensive e-commerce solutions across multiple platforms, optimizing product listings and implementing effective sales strategies.",
        challenge: "Client needed to establish online sales presence across multiple e-commerce platforms with optimized product visibility.",
        solution: "Created strategic product listings on Amazon, Flipkart, and company website with SEO optimization and compelling product descriptions.",
        results: [
          "Multi-platform presence established",
          "40% increase in online sales",
          "Improved search rankings",
          "Enhanced product visibility"
        ],
        technologies: ["Amazon Seller Central", "Flipkart", "WooCommerce", "SEO Tools", "Analytics"]
      }
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      category: "Web Development",
      description: "Custom React-based portfolio with animations",
      image: "https://placehold.co/400x300/F97316/FFFFFF?text=Portfolio+Site",
      caseStudy: {
        overview: "Designed and developed a modern, responsive portfolio website using React.js with smooth animations and professional design.",
        challenge: "Create a standout portfolio that showcases skills and projects while maintaining excellent user experience and performance.",
        solution: "Built with React.js, Framer Motion animations, Tailwind CSS, and responsive design principles for optimal viewing across all devices.",
        results: [
          "Fully responsive design",
          "Smooth animations and interactions",
          "Fast loading times",
          "Professional presentation"
        ],
        technologies: ["React.js", "Tailwind CSS", "Framer Motion", "EmailJS", "Vite"]
      }
    },
    {
      id: 4,
      title: "Brand Identity Design",
      category: "Design",
      description: "Complete visual identity and marketing materials",
      image: "https://placehold.co/400x300/6B46C1/FFFFFF?text=Brand+Design",
      caseStudy: {
        overview: "Created comprehensive brand identity including logo design, color schemes, typography, and marketing materials for various clients.",
        challenge: "Develop unique and memorable brand identities that effectively communicate company values and appeal to target audiences.",
        solution: "Designed cohesive visual systems including logos, business cards, letterheads, social media templates, and brand guidelines.",
        results: [
          "Complete brand identity systems",
          "Consistent visual communication",
          "Professional marketing materials",
          "Enhanced brand recognition"
        ],
        technologies: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma"]
      }
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const services = [
    {
      icon: Target,
      title: "Social Media Management",
      description: "Complete Profile Management, Content Strategy & Creation, Daily Engagement, Analytics & Reporting, Brand Voice Development",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Multi-Platform Setup, Product Listing Optimization, Store Management, Cross-Platform Strategy",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Code,
      title: "Website & Development",
      description: "Custom Website Development, E-commerce Integration, UI/UX Design, Maintenance & Updates",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Paid Advertising Campaigns",
      description: "Meta Ads Management, Campaign Strategy, Budget Optimization, A/B Testing",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Palette,
      title: "Creative Design Services",
      description: "Brand Identity, Marketing Materials, Social Media Assets, Product Photography Editing",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Influencer & Creator Partnerships",
      description: "Partnership Strategy, Campaign Coordination, Content Guidelines, Performance Tracking",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "NSS Gold Medal",
      description: "100+ participants event coordination"
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Complete digital transformation for Erigo Originals"
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "LNCT Bhopal - BTECH Program"
    },
    {
      icon: Star,
      title: "Self-taught Success",
      description: "From beginner to professional in 4 years"
    }
  ];

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              Ujjval Rajauriya
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Services', 'Projects', 'Skills'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Connect
              </motion.button>
            </div>
            
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-800 border-t border-slate-700"
            >
              <div className="px-4 py-4 space-y-4">
                {['About', 'Services', 'Projects', 'Skills'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-slate-300 hover:text-white transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold"
                >
                  Connect
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
              <img 
                src="https://placehold.co/128x128/6B46C1/FFFFFF?text=UR" 
                alt="Ujjval Rajauriya" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
              Transforming Brands Into Digital Success Stories
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8">
              Digital Marketing Manager | Full-Stack Developer | Growth Strategist
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-transparent border-2 border-purple-600 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">4+</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-slate-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-slate-400">Client Satisfaction</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://www.instagram.com/ujjval.rajauriya/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ujjval-rajauriya-77ab94321" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:cnttoujjval@gmail.com" className="text-slate-400 hover:text-orange-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm Ujjval Rajauriya, a Digital Marketing Professional and Full-Stack Developer with a passion for transforming brands into digital success stories. My journey from self-taught enthusiast to professional Digital Marketing Manager at Erigo Originals has been driven by relentless curiosity and a commitment to excellence.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-purple-400" />
                  <span>21 Years</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-400" />
                  <span>Bhopal, MP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-orange-400" />
                  <span>LNCT B tech </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="text-green-400" />
                  <span>Erigo Originals</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <img 
                src="/me.jpg" 
                alt="Professional" 
                className="w-auto h-auto max-w-full max-h-96 object-contain rounded-3xl shadow-2xl border-4 border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            What I Offer
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center"
          >
            <Package className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-white">Complete Digital Transformation</h3>
            <p className="text-slate-300 mb-6">
              All-In-One Solution for brands ready to establish or expand their online presence from zero to fully operational across all major platforms - social media, e-commerce, website, and paid advertising.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Social Media', 'E-commerce', 'Web Development', 'Design'].map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 sm:h-56 md:h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-6">
                    <span className="inline-block bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
                    >
                      View Case Study
                      <ChevronRight className="ml-2" size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-400">{selectedProject.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Case Study Content */}
              <div className="space-y-6">
                {/* Overview */}
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-3">Project Overview</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.caseStudy.overview}</p>
                </div>

                {/* Challenge */}
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-3">Challenge</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.caseStudy.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-3">Solution</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.caseStudy.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-3">Results & Impact</h4>
                  <ul className="text-gray-300 space-y-2">
                    {selectedProject.caseStudy.results.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.caseStudy.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-purple-900 text-purple-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
              <div className="space-y-4">
                {[
                  { skill: 'HTML/CSS/JavaScript', level: 95 },
                  { skill: 'React.js', level: 90 },
                  { skill: 'Node.js', level: 85 },
                  { skill: 'MongoDB', level: 80 },
                  { skill: 'UI/UX Design', level: 88 },
                  { skill: 'Photoshop', level: 85 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{item.skill}</span>
                      <span className="text-slate-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Digital Marketing</h3>
              <div className="space-y-4">
                {[
                  { skill: 'Social Media Management', level: 95 },
                  { skill: 'E-commerce Strategy', level: 92 },
                  { skill: 'Content Creation', level: 90 },
                  { skill: 'Paid Advertising', level: 88 },
                  { skill: 'Analytics & Reporting', level: 85 },
                  { skill: 'Brand Strategy', level: 90 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{item.skill}</span>
                      <span className="text-slate-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            Achievements & Recognition
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
                  <p className="text-slate-400">{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '20+', label: 'Happy Clients' },
              { number: '6+', label: 'Platforms Managed' },
              { number: '4+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            Let's Work Together
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
              <p className="text-slate-300 mb-8">
                Ready to Transform Your Digital Presence? Get in touch to discuss your project and how I can help you achieve your goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                    <Mail className="text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="flex items-center space-x-2">
                      <a href="mailto:cnttoujjval@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors">
                        cnttoujjval@gmail.com
                      </a>
                      <button 
                        onClick={copyToClipboard}
                        className="text-slate-400 hover:text-purple-400 transition-colors"
                      >
                        <Copy size={16} />
                      </button>
                      {copied && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-green-400"
                        >
                          <CheckCircle size={16} />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <Instagram className="text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Instagram</div>
                    <a href="https://www.instagram.com/ujjval.rajauriya/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                      @ujjval.rajauriya
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <Linkedin className="text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">LinkedIn</div>
                    <a href="https://www.linkedin.com/in/ujjval-rajauriya-77ab94321" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                      Ujjval Rajauriya
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-green-400 mb-2">
                  <CheckCircle size={20} />
                  <span className="font-semibold">Response Time</span>
                </div>
                <p className="text-slate-300">Typically responds within 24 hours</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 mb-2">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="social">Social Media Management</option>
                    <option value="ecommerce">E-commerce Solutions</option>
                    <option value="web">Website & Development</option>
                    <option value="ads">Paid Advertising Campaigns</option>
                    <option value="design">Creative Design Services</option>
                    <option value="complete">Complete Digital Transformation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-slate-300 mb-2">Project Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-15k">₹5,000 - ₹15,000</option>
                    <option value="15k-30k">₹15,000 - ₹30,000</option>
                    <option value="30k-50k">₹30,000 - ₹50,000</option>
                    <option value="50k-1lakh">₹50,000 - ₹1,00,000</option>
                    <option value="discuss">Let's Discuss</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-slate-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell me about your project"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={formStatus !== 'submitting' ? { scale: 1.02 } : {}}
                  whileTap={formStatus !== 'submitting' ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    formStatus === 'submitting'
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {/* Status Messages */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-600/20 border border-green-500/30 rounded-lg text-center"
                  >
                    <div className="flex items-center justify-center text-green-400 mb-2">
                      <CheckCircle size={20} className="mr-2" />
                      <span className="font-semibold">Message Sent Successfully!</span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
                
                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-600/20 border border-red-500/30 rounded-lg text-center"
                  >
                    <div className="flex items-center justify-center text-red-400 mb-2">
                      <span className="font-semibold">Message Failed to Send</span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Please try again or contact me directly at{' '}
                      <a href="mailto:cnttoujjval@gmail.com" className="text-purple-400 hover:underline">
                        cnttoujjval@gmail.com
                      </a>
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Ujjval Rajauriya
            </div>
            <p className="text-slate-400">Transforming Ideas Into Digital Reality</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.instagram.com/ujjval.rajauriya/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ujjval-rajauriya-77ab94321" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:cnttoujjval@gmail.com" className="text-slate-400 hover:text-orange-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="text-center text-slate-500 text-sm">
            <p>&copy; 2025 Ujjval Rajauriya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
