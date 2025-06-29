import React from 'react';
import { ArrowRight, Rocket, Target, BarChart3, Star, Check, Menu, X, Play, ChevronDown, Users, Award, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('strategy');
  const [selectedPlan, setSelectedPlan] = React.useState('professional');
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [faqOpen, setFaqOpen] = React.useState<number | null>(null);
  const [emailSignup, setEmailSignup] = React.useState('');
  const [signupStatus, setSignupStatus] = React.useState('');

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      avatar: "SJ",
      rating: 5,
      text: "LaunchMate transformed how we approach product launches. Our last launch exceeded all expectations with 300% more pre-orders than projected.",
      metric: "300% increase in pre-orders"
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupXYZ",
      avatar: "MC",
      rating: 5,
      text: "The strategic insights and execution tools helped us launch our SaaS product 2 months ahead of schedule with incredible market reception.",
      metric: "2 months ahead of schedule"
    },
    {
      name: "Emily Rodriguez",
      role: "VP Marketing, GrowthCo",
      avatar: "ER",
      rating: 5,
      text: "Finally, a platform that understands the complexity of product launches. The analytics dashboard alone is worth the investment.",
      metric: "85% faster launch planning"
    }
  ];

  const features = [
    {
      id: 'strategy',
      icon: Target,
      title: 'Strategic Planning',
      description: 'Build comprehensive launch strategies with market research, competitor analysis, and timing optimization.',
      details: [
        'Market research automation',
        'Competitor analysis dashboard',
        'Launch timing optimization',
        'Risk assessment tools'
      ]
    },
    {
      id: 'execution',
      icon: Rocket,
      title: 'Launch Execution',
      description: 'Execute flawless product launches with automated workflows and coordinated campaigns.',
      details: [
        'Automated workflow management',
        'Multi-channel campaign coordination',
        'Team collaboration tools',
        'Real-time progress tracking'
      ]
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track success with real-time analytics and actionable insights for continuous improvement.',
      details: [
        'Real-time performance metrics',
        'User feedback collection',
        'ROI tracking and analysis',
        'Predictive success modeling'
      ]
    }
  ];

  const faqs = [
    {
      question: "How quickly can I set up my first launch?",
      answer: "Most teams are up and running within 24 hours. Our onboarding process includes pre-built templates and guided setup to get you started immediately."
    },
    {
      question: "Do you integrate with existing tools?",
      answer: "Yes! LaunchMate integrates with over 50+ popular tools including Slack, Trello, HubSpot, Google Analytics, and more. Our API also supports custom integrations."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 chat support for Professional plans, dedicated success managers for Enterprise, and a comprehensive knowledge base with video tutorials for all users."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. All plans are month-to-month with no long-term contracts. You can upgrade, downgrade, or cancel anytime from your account settings."
    }
  ];

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSignup) {
      setSignupStatus('success');
      setTimeout(() => {
        setSignupStatus('');
        setEmailSignup('');
      }, 3000);
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer group">
              <Rocket className="h-8 w-8 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-bold text-gray-900">LaunchMate</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t border-gray-100`}>
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">Features</a>
            <a href="#testimonials" className="block py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">Testimonials</a>
            <a href="#pricing" className="block py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">Pricing</a>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all mt-4">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Zap className="h-4 w-4 mr-2" />
              New: AI-Powered Launch Insights Available Now
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Launch Your Product with{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent animate-gradient">
                Confidence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Transform your product ideas into successful launches with our comprehensive platform. 
              From strategy to execution, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2 hover:scale-105 shadow-lg hover:shadow-xl">
                <span>Start Your Launch</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="group text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2"
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Play className="h-5 w-5 text-blue-600 ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">10K+</div>
                <div className="text-gray-600 text-sm">Successful Launches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">2.5x</div>
                <div className="text-gray-600 text-sm">Faster Launches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-gray-600 text-sm">Happy Teams</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-30 animate-ping delay-500"></div>
      </section>

      {/* Interactive Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Launch Successfully
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides the tools and insights to turn your product vision into a market-ready launch.
            </p>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === feature.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <feature.icon className="h-5 w-5 inline mr-2" />
                  {feature.title}
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`transition-all duration-500 ${
                    activeTab === feature.id ? 'opacity-100 block' : 'opacity-0 hidden'
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                        <feature.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-3">
                        {feature.details.map((detail, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="h-5 w-5 text-green-500 mr-3" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="h-64 bg-gradient-to-br from-blue-100 to-gray-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-24 w-24 text-blue-600 opacity-50" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors group-hover:scale-110">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly coordinate with your team members, assign tasks, and track progress in real-time.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors group-hover:scale-110">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Bank-level security with SOC 2 compliance, end-to-end encryption, and advanced access controls.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors group-hover:scale-110">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Reach</h3>
              <p className="text-gray-600 leading-relaxed">
                Launch products worldwide with multi-language support, regional insights, and local market data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Product Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See how teams are achieving remarkable launch success with LaunchMate
            </p>
          </div>

          {/* Featured Testimonial Carousel */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-700 mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">{testimonials[currentTestimonial].avatar}</span>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                <TrendingUp className="h-4 w-4 mr-2" />
                {testimonials[currentTestimonial].metric}
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Testimonial Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your launch ambitions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className={`bg-white border-2 rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
              selectedPlan === 'starter' ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => setSelectedPlan('starter')}>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for indie makers and small teams</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Up to 3 product launches</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Basic analytics dashboard</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Email support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Launch templates</span>
                </li>
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedPlan === 'starter' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className={`bg-blue-600 text-white rounded-2xl p-8 transform scale-105 shadow-xl relative transition-all duration-300 cursor-pointer ${
              selectedPlan === 'professional' ? 'scale-110 shadow-2xl' : ''
            }`}
            onClick={() => setSelectedPlan('professional')}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-blue-100 mb-6">Ideal for growing companies and teams</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$149</span>
                <span className="text-blue-100">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-3" />
                  <span>Unlimited product launches</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-3" />
                  <span>Advanced analytics & insights</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-3" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-3" />
                  <span>Team collaboration tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-3" />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className={`bg-white border-2 rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
              selectedPlan === 'enterprise' ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => setSelectedPlan('enterprise')}>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large organizations with complex needs</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Everything in Professional</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Dedicated success manager</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Custom workflows</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">On-premise deployment</span>
                </li>
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedPlan === 'enterprise' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about LaunchMate
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                    faqOpen === index ? 'rotate-180' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  faqOpen === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Launch Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get weekly tips, case studies, and product launch strategies delivered to your inbox.
          </p>
          
          <form onSubmit={handleEmailSignup} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={emailSignup}
                onChange={(e) => setEmailSignup(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </div>
            {signupStatus === 'success' && (
              <p className="text-green-300 mt-4 animate-fade-in">
                ✓ Thanks for subscribing! Check your email for confirmation.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">LaunchMate</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering teams to launch products that make a difference in the world.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Launch Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2025 LaunchMate. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Award className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-400 text-sm">SOC 2 Certified</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;