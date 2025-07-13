import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Landing.css'

const LandingPage = () => {
  const [heading, setHeading] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/heading')
      .then(res => setHeading(res.data.heading))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="font-sans bg-[#FFF9F0] min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-end gap-10 px-10 py-4 text-sm font-medium text-gray-600 shadow-sm bg-white">
        <a href="#" className="hover:text-black">About</a>
        <div className="hover:text-black cursor-pointer">Services ▾</div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-16 bg-[#FFF9F0]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {heading ? (
              <>
                {heading.split('Revenue')[0]}
                <span className="text-[#F6A72D]">Revenue Management, Marketing</span>
                {heading.split('Marketing')[1].split('Commercial')[0]}
                <br />
                Commercial Functions with <br />
                Business Ready AI
              </>
            ) : 'Loading heading...'}
          </h1>

          <p className="text-gray-600 text-base mt-6">
            Powerful AI solutions that go beyond mere data sorting and exploration. Use our array of AI-enabled solutions that understand your business and recommend the optimal way forward.
          </p>

          <button className="mt-6 bg-[#F6A72D] text-black font-semibold px-6 py-3 rounded-md shadow hover:bg-yellow-400 transition">
            Get started
          </button>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto text-gray-800">
          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="text-lg font-semibold text-[#F6A72D]">Ready to Go Algos</h3>
              <p className="mt-2 text-sm text-gray-600">We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#F6A72D]">Internal capability building</h3>
              <p className="mt-2 text-sm text-gray-600">We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.</p>
            </div>
          </div>

          {/* Timeline line with dots */}
          <div className="relative mb-10">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200" />
            <div className="flex justify-between items-center relative z-10">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="w-4 h-4 bg-green-500 rounded-full" />
              ))}
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h4 className="text-sm font-semibold">Multi-source data</h4>
              <p className="text-xs text-gray-600 mt-1">
                Our solutions work with old, new, or incomplete datasets, in different formats and from varied sources.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Stakeholder alignment</h4>
              <p className="text-xs text-gray-600 mt-1">
                No black boxes. Stakeholders understand the “how,” “so what” and “now what,” leading to clear decision-making trade-offs.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Continuous engagement</h4>
              <p className="text-xs text-gray-600 mt-1">
                We engage in the long-term to enhance, course-correct, and adapt new models to continuously refine your work.
              </p>
            </div>
            <div />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
