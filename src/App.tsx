import React, { useEffect, useState, useRef } from 'react';
import { Star, MapPin, Phone, Mail, Clock, Users, Award, Utensils, ArrowRight, Menu as MenuIcon, X, ChefHat, Sparkles, Eye, Heart } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'menu', 'gallery', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.observe-fade').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const dishes = [
    {
      id: 1,
      name: "Truffle Risotto",
      price: "$32",
      image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Creamy Arborio rice with black truffle and aged Parmesan",
      ingredients: ["Arborio Rice", "Black Truffle", "Aged Parmesan", "White Wine", "Vegetable Stock"],
      chef: "Chef Marco",
      prepTime: "25 min"
    },
    {
      id: 2,
      name: "Wagyu Steak",
      price: "$85",
      image: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Premium grade A5 Wagyu with seasonal vegetables",
      ingredients: ["A5 Wagyu Beef", "Seasonal Vegetables", "Red Wine Jus", "Herb Butter"],
      chef: "Chef Isabella",
      prepTime: "30 min"
    },
    {
      id: 3,
      name: "Lobster Thermidor",
      price: "$45",
      image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Fresh lobster in a rich cognac cream sauce",
      ingredients: ["Fresh Lobster", "Cognac", "Heavy Cream", "Gruyère Cheese", "Fresh Herbs"],
      chef: "Chef Antoine",
      prepTime: "35 min"
    },
    {
      id: 4,
      name: "Duck Confit",
      price: "$38",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Slow-cooked duck leg with cherry gastrique",
      ingredients: ["Duck Leg", "Cherry Gastrique", "Garlic", "Thyme", "Duck Fat"],
      chef: "Chef Pierre",
      prepTime: "4 hours"
    },
    {
      id: 5,
      name: "Chocolate Soufflé",
      price: "$18",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Classic French dessert with vanilla bean ice cream",
      ingredients: ["Dark Chocolate", "Eggs", "Sugar", "Vanilla Bean", "Butter"],
      chef: "Chef Marie",
      prepTime: "45 min"
    },
    {
      id: 6,
      name: "Tuna Tartare",
      price: "$26",
      image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Fresh yellowfin tuna with avocado and citrus",
      ingredients: ["Yellowfin Tuna", "Avocado", "Citrus", "Sesame Oil", "Microgreens"],
      chef: "Chef Yuki",
      prepTime: "15 min"
    }
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Cursor Follower */}
      <div 
        className="fixed w-6 h-6 bg-amber-500/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${scrollY > 100 ? 1.5 : 1})`
        }}
      />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 group">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                UrbanBites
              </h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'menu', 'gallery', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-amber-400 ${
                      activeSection === section ? 'text-amber-400' : 'text-gray-300'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    {activeSection === section && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <button 
                onClick={() => scrollToSection('contact')}
                className="relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 group"
              >
                <span className="relative z-10">Reserve Table</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-amber-500 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-amber-500/20 animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'menu', 'gallery', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-3 text-gray-300 hover:text-amber-500 hover:bg-amber-500/10 rounded-lg transition-all duration-300"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-4 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Reserve Table
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
              transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0005})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          
          {/* Animated Overlay Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent animate-shimmer" />
          </div>
        </div>
        
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8 animate-fade-in">
            <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-4 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
              UrbanBites
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-300 mb-12 animate-fade-in-delay max-w-4xl mx-auto leading-relaxed">
            Where culinary artistry meets urban sophistication in an extraordinary dining experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-2">
            <button 
              onClick={() => setIsMenuModalOpen(true)}
              className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/30"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Utensils className="w-6 h-6" />
                Explore Menu
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden border-2 border-amber-500 hover:border-orange-500 px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/20"
            >
              <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-300">
                <Users className="w-6 h-6" />
                Reserve Table
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-amber-500 rounded-full flex justify-center group cursor-pointer" onClick={() => scrollToSection('about')}>
            <div className="w-1 h-4 bg-amber-500 rounded-full mt-2 animate-pulse group-hover:bg-orange-500 transition-colors duration-300"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="observe-fade opacity-0 translate-y-8">
              <div className="mb-8">
                <ChefHat className="w-16 h-16 text-amber-500 mb-4 animate-pulse" />
                <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Our <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Story</span>
                </h2>
              </div>
              
              <p className="text-gray-300 text-xl leading-relaxed mb-8">
                Born from a passion for exceptional cuisine and urban culture, UrbanBites represents 
                the perfect fusion of traditional culinary techniques with contemporary innovation. 
                Our journey began in 2018 with a simple mission: to create extraordinary dining 
                experiences that celebrate both flavor and artistry.
              </p>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                Every dish tells a story, every ingredient is carefully selected, and every meal 
                is crafted with the dedication and creativity that defines our urban culinary philosophy.
              </p>
              
              <div className="grid grid-cols-3 gap-8">
                {[
                  { number: "150+", label: "Signature Dishes", icon: Utensils },
                  { number: "50K+", label: "Happy Customers", icon: Heart },
                  { number: "15+", label: "Awards Won", icon: Award }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-4xl font-bold text-amber-500 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="observe-fade opacity-0 translate-y-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <img 
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Chef preparing food"
                  className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="w-10 h-10 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 animate-pulse" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 observe-fade opacity-0 translate-y-8">
            <Utensils className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Signature <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Dishes</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our carefully crafted menu featuring the finest ingredients 
              and innovative culinary techniques that will transport your senses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map((dish, index) => (
              <div 
                key={dish.id} 
                className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 observe-fade opacity-0 translate-y-8 cursor-pointer border border-gray-700/50 hover:border-amber-500/50"
                onClick={() => setSelectedDish(dish)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-amber-400 font-bold text-lg">{dish.price}</span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300 mb-3">
                    {dish.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{dish.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {dish.prepTime}
                    </div>
                    <button className="flex items-center gap-2 text-amber-400 hover:text-orange-400 transition-colors duration-300 font-semibold">
                      View Details
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-500/50 transition-all duration-500" />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => setIsMenuModalOpen(true)}
              className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 text-black px-12 py-4 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/30"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Full Menu
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5 animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 observe-fade opacity-0 translate-y-8">
            <Eye className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Visual <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in the artistry and ambiance that defines UrbanBites
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 transform hover:scale-105 observe-fade opacity-0 translate-y-8 cursor-pointer"
                onClick={() => {
                  setSelectedImage(index);
                  setIsGalleryOpen(true);
                }}
              >
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-amber-500/90 backdrop-blur-sm rounded-full p-4">
                    <Eye className="w-8 h-8 text-black" />
                  </div>
                </div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-amber-500/50 transition-all duration-500" />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => setIsGalleryOpen(true)}
              className="group relative overflow-hidden border-2 border-amber-500 hover:border-orange-500 px-12 py-4 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/20"
            >
              <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-300">
                <Eye className="w-6 h-6" />
                View Full Gallery
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 observe-fade opacity-0 translate-y-8">
            <Heart className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Guests Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Food Critic",
                rating: 5,
                text: "UrbanBites delivers an exceptional culinary experience that perfectly balances innovation with classic techniques. Every dish is a masterpiece that tells a story.",
                avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
              },
              {
                name: "Michael Chen",
                role: "Regular Customer",
                rating: 5,
                text: "The atmosphere is incredible and the food is consistently outstanding. This has become our go-to place for special occasions and memorable evenings.",
                avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
              },
              {
                name: "Emma Wilson",
                role: "Local Foodie",
                rating: 5,
                text: "From the moment you walk in, you know you're in for something special. The attention to detail in both service and cuisine is absolutely remarkable.",
                avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 transform hover:-translate-y-4 observe-fade opacity-0 translate-y-8 border border-gray-700/50 hover:border-amber-500/50"
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-500 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-500/50 group-hover:border-amber-500 transition-colors duration-300"
                  />
                  <div>
                    <div className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-amber-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-amber-500/20 group-hover:text-amber-500/40 transition-colors duration-300">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Reservation Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5 animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="observe-fade opacity-0 translate-y-8">
              <MapPin className="w-16 h-16 text-amber-500 mb-6 animate-pulse" />
              <h2 className="text-5xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Visit <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">UrbanBites</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: "Location",
                    content: "123 Urban Street, Downtown District\nNew York, NY 10001"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "(555) 123-4567"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "reservations@urbanbites.com"
                  },
                  {
                    icon: Clock,
                    title: "Hours",
                    content: "Monday - Thursday: 5:00 PM - 11:00 PM\nFriday - Saturday: 5:00 PM - 12:00 AM\nSunday: 4:00 PM - 10:00 PM"
                  }
                ].map((item, index) => (
                  <div key={index} className="group flex items-start gap-6 p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-amber-500/50">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-white group-hover:text-amber-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="observe-fade opacity-0 translate-y-8">
              <div className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-700/50">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-20" />
                <div className="relative">
                  <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Make a Reservation
                  </h3>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="group">
                        <label className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-amber-400 transition-colors duration-300">
                          First Name
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-amber-400 transition-colors duration-300">
                          Last Name
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-amber-400 transition-colors duration-300">
                        Email
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="group">
                        <label className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-amber-400 transition-colors duration-300">
                          Date
                        </label>
                        <input 
                          type="date" 
                          className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-white"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-amber-400 transition-colors duration-300">
                          Time
                        </label>
                        <select className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-white">
                          <option>5:00 PM</option>
                          <option>5:30 PM</option>
                          <option>6:00 PM</option>
                          <option>6:30 PM</option>
                          <option>7:00 PM</option>
                          <option>7:30 PM</option>
                          <option>8:00 PM</option>
                          <option>8:30 PM</option>
                          <option>9:00 PM</option>
                        </select>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-amber-400 transition-colors duration-300">
                          Guests
                        </label>
                        <select className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-white">
                          <option>2 People</option>
                          <option>3 People</option>
                          <option>4 People</option>
                          <option>5 People</option>
                          <option>6 People</option>
                          <option>7 People</option>
                          <option>8+ People</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-amber-400 transition-colors duration-300">
                        Special Requests
                      </label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                        placeholder="Dietary restrictions, special occasions, etc."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="group relative overflow-hidden w-full bg-gradient-to-r from-amber-500 to-orange-500 text-black py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <Users className="w-6 h-6" />
                        Reserve Table
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-amber-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-6">
              UrbanBites
            </h2>
            <p className="text-gray-400 mb-12 text-lg">Where culinary artistry meets urban sophistication</p>
            
            <div className="flex justify-center space-x-12 mb-12">
              {['Privacy Policy', 'Terms of Service', 'Careers'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300 font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
            
            <p className="text-gray-600">&copy; 2024 UrbanBites. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Menu Modal */}
      {isMenuModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-amber-500/30">
            <div className="sticky top-0 bg-gradient-to-r from-gray-800 to-gray-900 p-6 border-b border-amber-500/30 flex justify-between items-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Our Complete Menu
              </h2>
              <button 
                onClick={() => setIsMenuModalOpen(false)}
                className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="p-6 grid md:grid-cols-2 gap-6">
              {dishes.map((dish) => (
                <div key={dish.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-amber-500/50 transition-all duration-300">
                  <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{dish.name}</h3>
                    <span className="text-2xl font-bold text-amber-500">{dish.price}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{dish.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Chef: {dish.chef}</span>
                    <span>{dish.prepTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl max-w-2xl w-full border border-amber-500/30">
            <div className="relative">
              <img 
                src={selectedDish.image} 
                alt={selectedDish.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button 
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-amber-500/70 transition-colors duration-300"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-amber-400 font-bold text-2xl">{selectedDish.price}</span>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">{selectedDish.name}</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedDish.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-amber-400 font-semibold mb-3">Ingredients</h3>
                  <ul className="space-y-2">
                    {selectedDish.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-400 flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-amber-400 font-semibold mb-3">Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-400">
                      <ChefHat className="w-5 h-5 text-amber-500" />
                      Prepared by {selectedDish.chef}
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Clock className="w-5 h-5 text-amber-500" />
                      Preparation time: {selectedDish.prepTime}
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  setSelectedDish(null);
                  scrollToSection('contact');
                }}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-black py-3 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                Order This Dish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            <button 
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-amber-500/70 transition-colors duration-300"
            >
              <X size={28} />
            </button>
            
            <div className="relative">
              <img 
                src={galleryImages[selectedImage]} 
                alt={`Gallery image ${selectedImage + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-amber-500/70 transition-colors duration-300"
              >
                <ArrowRight className="w-6 h-6 rotate-180" />
              </button>
              
              <button 
                onClick={() => setSelectedImage((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-amber-500/70 transition-colors duration-300"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 gap-2 overflow-x-auto pb-2">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index ? 'border-amber-500' : 'border-gray-600 hover:border-amber-400'
                  }`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;