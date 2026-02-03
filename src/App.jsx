import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
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
  Target,
  Copy,
  Send,
  X,
  Github,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Zap,
  Briefcase
} from 'lucide-react';
import profilePhoto from './me.jpg';

const navItems = ['About', 'Services', 'Work', 'Process', 'Skills', 'Testimonials', 'Contact'];

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
  const [formStatus, setFormStatus] = useState('idle');

  const copyToClipboard = () => {
    navigator.clipboard.writeText('cnttoujjval@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

    if (!formData.name || !formData.email) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
      return;
    }

    try {
      const serviceId = 'service_1eoy79p';
      const templateId = 'template_7ha8f0e';
      const publicKey = 'NxNDv3PYPkFfxgNVt';

      emailjs.init(publicKey);

      if (
        serviceId.includes('xxxxxxx') ||
        templateId.includes('xxxxxxx') ||
        publicKey.includes('xxxxxxx')
      ) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setFormStatus('success');
        setFormData({ name: '', email: '', service: '', budget: '', message: '' });
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
        reply_to: formData.email
      };

      await emailjs.send(serviceId, templateId, templateParams);

      setFormStatus('success');
      setFormData({ name: '', email: '', service: '', budget: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Vivid H2O Solutions Local SEO Growth',
      category: 'Growth',
      description: 'Instagram, Facebook, and Google Business Profile growth that pushed top keyword rankings in Bhopal.',
      image: 'https://placehold.co/520x360/0EA5E9/FFFFFF?text=Vivid+H2O+Solutions',
      metrics: ['Top rankings for water solutions', 'GMB visibility uplift', 'Qualified lead growth'],
      caseStudy: {
        overview:
          'Managed social channels and Google Business Profile for Vivid H2O Solutions, elevating local search presence'
          + ' and driving consistent inbound inquiries.',
        challenge: 'Needed stronger local visibility and lead flow in the Bhopal market.',
        solution:
          'Built a content calendar, optimized GBP listings, and targeted high-intent keywords for water treatment services.',
        results: ['Ranking at the top for priority keywords', 'Higher map pack impressions', 'More inbound deal inquiries'],
        technologies: ['Google Business Profile', 'Instagram', 'Facebook', 'Local SEO', 'Canva']
      }
    },
    {
      id: 2,
      title: 'Erigo Originals Growth Sprint',
      category: 'Growth',
      description: 'Multi-platform content + ad strategy that amplified brand recall.',
      image: 'https://placehold.co/520x360/4C1D95/FFFFFF?text=Erigo+Growth',
      metrics: ['+4.8x engagement', '60+ creatives/month', '6 platforms launched'],
      caseStudy: {
        overview:
          'Designed a full-funnel growth program with weekly campaigns, creator partnerships, and social storytelling.'
          + ' Built reporting dashboards for stakeholders and optimised the content engine.',
        challenge: 'Low visibility across new channels and inconsistent performance data.',
        solution:
          'Created a content system, analytics framework, and paid media experiments that scaled what worked.',
        results: ['4.8x engagement lift', 'Consistent weekly reach growth', 'Stronger community retention'],
        technologies: ['Instagram', 'Meta Ads', 'Notion', 'Canva', 'Google Analytics']
      }
    },
    {
      id: 3,
      title: 'D2C Marketplace Expansion',
      category: 'E-commerce',
      description: 'Launched a catalog across marketplaces with SEO-rich listings.',
      image: 'https://placehold.co/520x360/1E3A8A/FFFFFF?text=E-commerce+Launch',
      metrics: ['+42% revenue', 'Top 10 category ranking', 'Optimized 180+ SKUs'],
      caseStudy: {
        overview:
          'Planned and executed a full marketplace rollout across Amazon, Flipkart, and a Shopify store.',
        challenge: 'Fragmented listings, low conversion, and inconsistent pricing.',
        solution: 'Built keyword-driven listings, cohesive branding, and promo calendars.',
        results: ['42% sales growth', 'Improved AOV', 'Higher organic visibility'],
        technologies: ['Amazon Seller Central', 'Flipkart', 'Shopify', 'SEMrush']
      }
    },
    {
      id: 4,
      title: 'Portfolio Experience Refresh',
      category: 'Web',
      description: 'Reimagined personal brand into a high-converting digital hub.',
      image: 'https://placehold.co/520x360/EA580C/FFFFFF?text=Portfolio+Revamp',
      metrics: ['1.6s load time', 'Mobile-first layout', 'Lead capture uplift'],
      caseStudy: {
        overview:
          'Crafted a storytelling-first website with motion, performance optimizations, and a clear conversion path.',
        challenge: 'Needed a modern, credible presence for clients and collaborators.',
        solution: 'Designed a new IA, accessible UI, and integrated lead collection.',
        results: ['Higher inquiry rate', 'Faster page performance', 'Stronger brand clarity'],
        technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion']
      }
    },
    {
      id: 5,
      title: 'Creator Brand System',
      category: 'Branding',
      description: 'Visual identity kit and social templates for rapid content.',
      image: 'https://placehold.co/520x360/7C3AED/FFFFFF?text=Brand+Kit',
      metrics: ['30+ assets', 'Unified tone & voice', 'Faster content cycles'],
      caseStudy: {
        overview: 'Built a cohesive brand system and marketing assets for consistent storytelling.',
        challenge: 'Inconsistent visual identity across platforms.',
        solution: 'Produced brand guidelines, templates, and an asset library.',
        results: ['Streamlined production', 'Improved brand trust', 'Higher content throughput'],
        technologies: ['Figma', 'Illustrator', 'Canva', 'Adobe Suite']
      }
    }
  ];

  const services = [
    {
      icon: Target,
      title: 'Growth & Social Strategy',
      description: 'Content systems, platform growth, campaign calendars, and performance reporting.',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Acceleration',
      description: 'Marketplace launch, SEO product listings, and conversion optimization.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Code,
      title: 'Web Experience Design',
      description: 'High-performance websites, landing pages, and interactive portfolios.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Paid Media & Analytics',
      description: 'ROI-focused ad strategy, experimentation, and clear reporting dashboards.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'Creative Direction',
      description: 'Brand identity, visual systems, and content kits that scale.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Users,
      title: 'Partnerships & Community',
      description: 'Creator collaborations, influencer management, and community engagement.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const process = [
    {
      title: 'Discover',
      description: 'Deep dive into your goals, audience, and brand positioning.',
      icon: Sparkles
    },
    {
      title: 'Design',
      description: 'Build a strategy, content system, and experience roadmap.',
      icon: Palette
    },
    {
      title: 'Deploy',
      description: 'Launch campaigns, creatives, and optimized web experiences.',
      icon: Zap
    },
    {
      title: 'Deliver',
      description: 'Track performance, optimize weekly, and report impact.',
      icon: ShieldCheck
    }
  ];

  const testimonials = [
    {
      name: 'Aarav Kulkarni',
      role: 'Founder, Erigo Originals',
      quote:
        'Ujjval brought clarity and consistency to our digital presence. The engagement results were immediate.',
      rating: 5
    },
    {
      name: 'Neha Sharma',
      role: 'E-commerce Lead',
      quote:
        'Our marketplace launch felt effortless. We finally had a scalable listing system and strong ROAS.',
      rating: 5
    },
    {
      name: 'Rohan Singh',
      role: 'Creative Director',
      quote:
        'From design to delivery, every detail felt premium. The new brand kit helped our team move faster.',
      rating: 5
    }
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
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
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Book a Call
              </motion.button>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                  }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-t border-slate-800"
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      scrollToSection(item.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                    className="block text-left w-full text-slate-300 hover:text-white transition-colors duration-300 py-2"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold"
                >
                  Book a Call
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-16 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl" />
          <div className="absolute bottom-16 right-10 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500/70 shadow-2xl">
              <img src={profilePhoto} alt="Ujjval Rajauriya" className="w-full h-full object-cover" />
            </div>
            <p className="uppercase tracking-[0.35em] text-xs text-purple-300 mb-4">Digital Growth Partner</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-blue-300 to-orange-300 bg-clip-text text-transparent">
              Elevate Your Brand With Strategy, Design, And Growth Execution
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              I help ambitious brands build memorable digital experiences, launch high-performing campaigns, and
              scale revenue with data-backed marketing systems.
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
              onClick={() => scrollToSection('work')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
            >
              View Case Studies
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-purple-500 text-purple-200 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Start a Project
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12"
          >
            {[
              { number: '4+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Delivered' },
              { number: '20+', label: 'Brands Scaled' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-purple-300 mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://www.instagram.com/ujjval.rajauriya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ujjval-rajauriya-77ab94321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
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
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent"
          >
            About Ujjval
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                I&apos;m a digital marketing professional and full-stack developer focused on building growth engines
                for modern brands. From performance marketing to immersive web experiences, I bridge creativity and
                data to deliver measurable outcomes.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My work spans B2C, D2C, and creator-led brands. I thrive on turning complex goals into simple,
                scalable strategies that drive conversions and community loyalty.
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
                  <span>LNCT B.Tech</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="text-green-400" />
                  <span>Erigo Originals</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <TrendingUp className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Growth Mindset</h3>
                  <p className="text-slate-400">
                    I build repeatable systems for social, paid, and web experiences that scale over time.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <ShieldCheck className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Data + Design</h3>
                  <p className="text-slate-400">
                    Every idea is validated with insights, ensuring campaigns are both beautiful and profitable.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center">
                  <Users className="text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Client Partnership</h3>
                  <p className="text-slate-400">
                    Transparent collaboration with weekly updates and actionable insights.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/60">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent"
          >
            Services Built For Impact
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent"
          >
            Case Studies
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['All', 'Growth', 'E-commerce', 'Web', 'Branding'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'border-slate-700 text-slate-400 hover:border-purple-500/50 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 rounded-full text-sm text-slate-200">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400">{project.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {project.metrics.map((metric) => (
                      <li key={metric} className="flex items-center">
                        <CheckCircle className="text-green-400 mr-2" size={16} />
                        {metric}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors"
                  >
                    View case study <ChevronRight size={18} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/60">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent"
          >
            My Growth Process
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-purple-600/20 flex items-center justify-center mb-4">
                    <Icon className="text-purple-300" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent"
          >
            Skills & Toolkits
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Marketing & Growth</h3>
              <div className="space-y-4">
                {[
                  { skill: 'Social Media Strategy', level: 95 },
                  { skill: 'Paid Ads Optimization', level: 90 },
                  { skill: 'Content Storytelling', level: 92 },
                  { skill: 'Analytics & Reporting', level: 88 },
                  { skill: 'Creator Collaborations', level: 86 }
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{item.skill}</span>
                      <span className="text-slate-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
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

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Tech & Creative Stack</h3>
              <div className="space-y-4">
                {[
                  { skill: 'React + Vite', level: 90 },
                  { skill: 'UI/UX & Prototyping', level: 88 },
                  { skill: 'Creative Suite (Figma/Adobe)', level: 86 },
                  { skill: 'Automation & Email Systems', level: 82 },
                  { skill: 'Prompt Engineering', level: 85 }
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{item.skill}</span>
                      <span className="text-slate-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/60">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent"
          >
            Client Love
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={`${testimonial.name}-star-${starIndex}`} className="text-yellow-400" size={18} />
                  ))}
                </div>
                <p className="text-slate-300 mb-4">“{testimonial.quote}”</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent"
          >
            Ready To Build Your Growth Plan?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white">Let&apos;s collaborate</h3>
              <p className="text-slate-300">
                Share your goals, timelines, and what success looks like. I&apos;ll respond with a clear action plan
                and next steps.
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
                      <button onClick={copyToClipboard} className="text-slate-400 hover:text-purple-400 transition-colors">
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
                    <a
                      href="https://www.instagram.com/ujjval.rajauriya/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
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
                    <a
                      href="https://www.linkedin.com/in/ujjval-rajauriya-77ab94321"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
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
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"
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
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
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
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="growth">Growth & Social Strategy</option>
                    <option value="ecommerce">E-commerce Acceleration</option>
                    <option value="web">Web Experience Design</option>
                    <option value="ads">Paid Media & Analytics</option>
                    <option value="creative">Creative Direction</option>
                    <option value="partnerships">Partnerships & Community</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">Project Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-15k">₹5,000 - ₹15,000</option>
                    <option value="15k-30k">₹15,000 - ₹30,000</option>
                    <option value="30k-50k">₹30,000 - ₹50,000</option>
                    <option value="50k-1lakh">₹50,000 - ₹1,00,000</option>
                    <option value="discuss">Let&apos;s Discuss</option>
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
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
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
                      Thank you for reaching out. I&apos;ll get back to you within 24 hours.
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
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Ujjval Rajauriya
            </div>
            <p className="text-slate-400">Transforming Ideas Into Digital Reality</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.instagram.com/ujjval.rajauriya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ujjval-rajauriya-77ab94321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
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

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-slate-400">{selectedProject.description}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-purple-300 mb-2">Overview</h4>
                <p className="text-slate-300">{selectedProject.caseStudy.overview}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-purple-300 mb-2">Challenge</h4>
                <p className="text-slate-300">{selectedProject.caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-purple-300 mb-2">Solution</h4>
                <p className="text-slate-300">{selectedProject.caseStudy.solution}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-purple-300 mb-2">Results & Impact</h4>
                <ul className="text-slate-300 space-y-2">
                  {selectedProject.caseStudy.results.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-purple-300 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.caseStudy.technologies.map((tech) => (
                    <span key={tech} className="bg-purple-900/60 text-purple-200 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Github size={16} />
                  Source available on request
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink size={16} />
                  Live link on request
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
