
import React, { useState } from 'react';
import { COURSES } from '../constants';

const Courses: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Science', 'Technology', 'Arts', 'Commerce'];

  const filteredCourses = filter === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Academic Programs</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">Discover our diverse range of world-class programs designed to foster critical thinking and practical expertise.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === cat 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
            <div className="relative h-56">
              <img src={course.image} className="w-full h-full object-cover" alt={course.title} />
              <div className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded">
                {course.category}
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{course.title}</h3>
              <p className="text-slate-600 mb-6 flex-1">{course.description}</p>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-chalkboard-teacher text-indigo-600 text-sm"></i>
                  </div>
                  <span className="text-sm font-medium text-slate-700">{course.instructor}</span>
                </div>
                <div className="text-indigo-600 font-bold">{course.duration}</div>
              </div>
              <button className="mt-6 w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                Course Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-24">
          <i className="fas fa-search text-4xl text-slate-300 mb-4"></i>
          <h3 className="text-xl font-bold text-slate-400">No courses found in this category.</h3>
        </div>
      )}
    </div>
  );
};

export default Courses;
