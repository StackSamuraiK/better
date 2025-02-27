'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/ui/button';
import {  Star, ArrowRight, Clock3 } from 'lucide-react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState('arian');

  const testimonials = {
    arian: {
      name: "Arian",
      role: "Better Mortgage customer",
      quote: "The reason why I decided to go with Better is because after I did my research with the other lenders, Better was the ones that provided me with the lowest interest rate.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    amanda: {
      name: "Amanda",
      role: "Better Mortgage customer",
      quote: "I was amazed at how simple the process was. The online platform made it easy to upload documents and track my application status in real-time.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
    },
    paul: {
      name: "Paul",
      role: "Better Mortgage customer",
      quote: "As a first-time homebuyer, I had a lot of questions. Better's team was patient and guided me through every step of the mortgage process.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    }
  };

  return (
    <div>
      
      <Navigation/>
      <section className="bg-[#004d40] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="block">Mortgages</span>
                <span className="block text-[#32cd32]">made simple</span>
              </h1>
              <div className="mb-8">
                <Button asChild size="lg" className="bg-[#32cd32] hover:bg-[#2db82d] text-white rounded-full px-8 py-6 text-lg">
                  <Link href="/start">Start my approval</Link>
                </Button>
                <div className="flex items-center mt-4 text-sm">
                  <Clock3 className="h-4 w-4 mr-2" />
                  <span>3 min</span>
                  <span className="mx-2">|</span>
                  <span>No credit impact</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto w-64 h-[500px]">
                <Image 
                  src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80" 
                  alt="Phone showing mortgage approval" 
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-70 text-white p-6 rounded-lg w-56">
                    <div className="flex items-center mb-2">
                      <div className="h-4 w-4 rounded-full bg-[#32cd32] mr-2"></div>
                      <span>Congrats,</span>
                    </div>
                    <p className="mb-2">You're pre-approved for a loan up to</p>
                    <p className="text-[#32cd32] text-2xl font-bold mb-4">$450,000</p>
                    <div className="bg-[#32cd32] text-white text-xs py-2 px-4 rounded text-center">
                      Go to Pre-approval Letter
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0">
                <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm p-2 rounded-lg">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm">4.6 Stars | 3177 Google reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src={testimonials[activeTestimonial as keyof typeof testimonials].image}
                alt={testimonials[activeTestimonial as keyof typeof testimonials].name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <div className="text-white">
                  <p className="text-xl mb-4">"{testimonials[activeTestimonial as keyof typeof testimonials].quote}"</p>
                  <p className="font-semibold">{testimonials[activeTestimonial as keyof typeof testimonials].name} — {testimonials[activeTestimonial as keyof typeof testimonials].role}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Find out why<br />we're better.
              </h2>
              <Button className="bg-[#004d40] hover:bg-[#00695c] text-white mb-8">
                See all our stories
              </Button>
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  <Star className="h-5 w-5 text-[#32cd32]" />
                </div>
                <span className="font-semibold mr-2">Trustpilot</span>
                <span className="mr-2">Excellent</span>
                <span>4.4 out of 5</span>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant={activeTestimonial === 'arian' ? 'default' : 'outline'} 
                  className={activeTestimonial === 'arian' ? 'bg-[#00695c] hover:bg-[#004d40]' : 'border-[#00695c] text-[#00695c]'}
                  onClick={() => setActiveTestimonial('arian')}
                >
                  Arian
                </Button>
                <Button 
                  variant={activeTestimonial === 'amanda' ? 'default' : 'outline'} 
                  className={activeTestimonial === 'amanda' ? 'bg-[#00695c] hover:bg-[#004d40]' : 'border-[#00695c] text-[#00695c]'}
                  onClick={() => setActiveTestimonial('amanda')}
                >
                  Amanda
                </Button>
                <Button 
                  variant={activeTestimonial === 'paul' ? 'default' : 'outline'} 
                  className={activeTestimonial === 'paul' ? 'bg-[#00695c] hover:bg-[#004d40]' : 'border-[#00695c] text-[#00695c]'}
                  onClick={() => setActiveTestimonial('paul')}
                >
                  Paul
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Got questions?</h2>
            <p className="text-3xl font-semibold text-gray-700">We've got answers</p>
          </div>
          
          <div className="flex mb-8 overflow-x-auto">
            <Button className="bg-[#00695c] hover:bg-[#004d40] text-white mr-4">Our products</Button>
            <Button variant="outline" className="border-[#00695c] text-[#00695c] mr-4">Calculators</Button>
            <Button variant="outline" className="border-[#00695c] text-[#00695c]">Guides & FAQs</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Buying your first home with Better</h3>
              <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-[#32cd32] mb-4">
                <ArrowRight className="h-6 w-6" />
              </Button>
              <div className="h-48 relative rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                  alt="First home" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">One Day Mortgage<sup>1</sup></h3>
                  <p className="text-gray-600 mb-4">
                    Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.<sup>1</sup>
                  </p>
                  <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-[#32cd32]">
                    <ArrowRight className="h-6 w-6" />
                  </Button>
                </div>
                <div className="bg-green-100 p-4 rounded-lg w-32 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[#004d40] font-bold text-xl">One Day</div>
                    <div className="text-[#004d40] font-bold text-xl">Mortgage</div>
                    <div className="text-xs">™</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex">
                <div className="w-1/3">
                  <div className="h-48 relative rounded-lg overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" 
                      alt="HELOC" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-2/3 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Better HELOC</h3>
                  <p className="text-gray-600 mb-4">
                    Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit<sup>2</sup>. Access up to 90% of your home equity as cash in as little as 7 days.<sup>3</sup>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance</h3>
              <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-[#32cd32] mb-4">
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}