import React from 'react';
// Link is imported from react-router-dom for navigation between pages.
import { Link } from 'react-router-dom';
import { COURSES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1523050338692-7b84940952de?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40"
            alt="Academy Building"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
              Ignite Your <span className="text-indigo-400">Potential</span> at Sureya Academy
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Where tradition meets innovation. Join a global community of learners and thinkers dedicated to excellence in every endeavor.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/courses" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-center transition-all shadow-xl shadow-indigo-600/20">
                Explore Courses
              </Link>
              <Link to="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-center border border-white/30 transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Graduates', value: '12,000+' },
            { label: 'Expert Tutors', value: '150+' },
            { label: 'Success Rate', value: '98%' },
            { label: 'Courses', value: '85+' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-xl text-center border border-slate-100 hover:translate-y-[-5px] transition-transform">
              <div className="text-3xl font-bold text-indigo-600 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-4">Featured Disciplines</h2>
            <p className="text-slate-600 max-w-lg">Hand-picked courses designed to equip you for the challenges of tomorrow's industries.</p>
          </div>
          <Link to="/courses" className="mt-6 md:mt-0 text-indigo-600 font-semibold hover:underline flex items-center">
            View all courses <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COURSES.map((course) => (
            <div key={course.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-all hover:shadow-2xl">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600">
                  {course.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">{course.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span className="flex items-center"><i className="far fa-clock mr-1"></i> {course.duration}</span>
                  <span className="flex items-center"><i className="far fa-user mr-1"></i> {course.instructor.split(' ')[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-indigo-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-serif mb-8">Why Sureya Academy?</h2>
              <div className="space-y-8">
                {[
                  { icon: 'fa-brain', title: 'Adaptive Learning', desc: 'Curriculum that evolves with your progress using AI-driven insights.' },
                  { icon: 'fa-globe', title: 'Global Recognition', desc: 'Our certifications are trusted by top universities and Fortune 500 companies.' },
                  { icon: 'fa-users', title: 'Thriving Community', desc: 'Access to a network of global alumni and peer-mentorship programs.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                      <i className={`fas ${item.icon} text-2xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-indigo-100">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-3xl shadow-2xl"
                alt="Students studying"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl text-slate-900 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white" />)}
                  </div>
                  <div className="font-bold text-sm">Joined by 500+ new students this month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-4">Hear From Our Community</h2>
          <p className="text-slate-600">Real stories from real students who found their purpose with us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <img src={t.avatar} className="w-14 h-14 rounded-full mr-4" alt={t.name} />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-indigo-600 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="italic text-slate-700 leading-relaxed">"{t.content}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Ready to Start Your Journey?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Applications for the 2024 Fall Semester are now open. Secure your place at the world's most innovative academy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors">
                Apply Today
              </button>
              <button className="bg-transparent border border-white/30 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;