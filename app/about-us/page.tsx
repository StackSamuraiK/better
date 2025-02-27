import React from 'react';
import Image from 'next/image';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-20 text-center">
        <h2 className="text-green-600 font-medium mb-4">Our mission</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 max-w-4xl mx-auto">
          We're making homeownership simpler, faster — and most importantly, more accessible for all Americans.
        </h1>
      </section>
      
      
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">The status quo is broken</h2>
            <p className="text-gray-600 mb-6">
              The traditional processes around homeownership are opaque and stressful. Fees aren't transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It's a system set up to benefit insiders — not you.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md">
              Read Vishal's story
            </button>
          </div>
          <div className="relative h-64 md:h-auto">
            <div className="bg-gray-200 rounded-lg w-full h-full relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white">
                    ▶
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">How we're changing things</h2>
          <p className="text-lg mb-6">
            Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers'.
          </p>
          <p className="text-lg">
            That's why Better.com is redefining the homeownership process from the ground up. We're using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
          </p>
        </div>
      </section>
      
      
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">Company timeline</h2>
          
          <div className="relative">
            
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-100"></div>
            
            
            <div className="mb-16 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
                <div className="bg-green-600 text-white px-4 py-2 rounded-full font-medium">2014</div>
              </div>
              <div className="ml-0 md:ml-auto md:w-5/12 bg-gray-100 p-6 rounded-lg mt-8 md:mr-8">
                <p className="text-gray-700">
                  After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.
                </p>
              </div>
            </div>
            
            
            <div className="mb-16 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
                <div className="bg-green-600 text-white px-4 py-2 rounded-full font-medium">2015</div>
              </div>
              <div className="ml-auto md:ml-8 md:w-5/12 bg-gray-100 p-6 rounded-lg mt-8">
                <p className="text-gray-700">
                  Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).
                </p>
              </div>
            </div>
            
            
            <div className="mb-16 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
                <div className="bg-green-600 text-white px-4 py-2 rounded-full font-medium">2016</div>
              </div>
              <div className="ml-0 md:ml-auto md:w-5/12 bg-gray-100 p-6 rounded-lg mt-8 md:mr-8">
                <p className="text-gray-700">
                  Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.
                </p>
              </div>
            </div>
            
            
            <div className="mb-16 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
                <div className="bg-green-600 text-white px-4 py-2 rounded-full font-medium">2017</div>
              </div>
              <div className="ml-auto md:ml-8 md:w-5/12 bg-gray-100 p-6 rounded-lg mt-8">
                <p className="text-gray-700">
                  Better expands into the real estate market with Better Real Estate.
                </p>
              </div>
            </div>
            
            
            <div className="mb-16 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
                <div className="bg-green-600 text-white px-4 py-2 rounded-full font-medium">2018</div>
              </div>
              <div className="ml-0 md:ml-auto md:w-5/12 bg-gray-100 p-6 rounded-lg mt-8 md:mr-8">
                <p className="text-gray-700">
                  Better Mortgage partners with Ally Bank to build Ally powered by Better.
                </p>
              </div>
            </div>
            
            
            <div className="mb-16 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
                <div className="bg-green-600 text-white px-4 py-2 rounded-full font-medium">2019</div>
              </div>
              <div className="ml-auto md:ml-8 md:w-5/12 bg-gray-100 p-6 rounded-lg mt-8">
                <p className="text-gray-700">
                  Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.
                </p>
              </div>
            </div>
            
            
            <div className="mb-16 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
                <div className="bg-green-600 text-white px-4 py-2 rounded-full font-medium">2021</div>
              </div>
              <div className="ml-0 md:ml-auto md:w-5/12 bg-gray-100 p-6 rounded-lg mt-8 md:mr-8">
                <p className="text-gray-700">
                  Better acquires Trussle — The UK's most innovative online mortgage broker.
                </p>
              </div>
            </div>
            
            
            <div className="mb-16 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
                <div className="bg-green-600 text-white px-4 py-2 rounded-full font-medium">2022</div>
              </div>
              <div className="ml-auto md:ml-8 md:w-5/12 bg-gray-100 p-6 rounded-lg mt-8">
                <p className="text-gray-700">
                  Better Mortgage becomes the first fintech to fund $100B home loans entirely online.
                </p>
              </div>
            </div>
            
            
            <div className="mb-16 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
                <div className="bg-green-600 text-white px-4 py-2 rounded-full font-medium">2023</div>
              </div>
              <div className="ml-0 md:ml-auto md:w-5/12 bg-gray-100 p-6 rounded-lg mt-8 md:mr-8">
                <p className="text-gray-700">
                  Better Mortgage launches One Day Mortgage! The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.
                </p>
              </div>
              <div className="ml-auto md:ml-8 md:w-5/12 bg-gray-100 p-6 rounded-lg mt-16">
                <p className="text-gray-700">
                  Better Mortgage launches the fully digital 3-day HELOC².
                </p>
              </div>
              <div className="ml-0 md:ml-auto md:w-5/12 bg-gray-100 p-6 rounded-lg mt-16 md:mr-8">
                <p className="text-gray-700">
                  Better Mortgage launches One Day Verified Approval Letter.
                </p>
              </div>
            </div>
            
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
                <div className="bg-green-600 text-white px-4 py-2 rounded-full font-medium">Today</div>
              </div>
              <div className="ml-auto md:ml-8 md:w-5/12 bg-gray-100 p-6 rounded-lg mt-8">
                <p className="text-gray-700">
                  You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.
                </p>
                <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}