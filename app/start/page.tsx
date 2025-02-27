'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/ui/button';
import { Card } from '@/components/ui/ui/card';
import { Input } from '@/components/ui/ui/input';
import { Label } from '@/components/ui/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/ui/radio-group';
import { toast } from 'sonner';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Image from 'next/image';

type OptionType = 'buy' | 'refinance' | 'cashout' | null;

export default function Start() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedOption, setSelectedOption] = useState<OptionType>(null);
  const [step, setStep] = useState(1);
  

  const handleOptionSelect = (option: OptionType) => {
    setSelectedOption(option);
    setShowWelcome(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast("Application submitted", {
      description: "We'll be in touch with you shortly!",
    });
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      setShowWelcome(true);
    }
  };

  return (
    <div className="pt-16">
      <Navigation />
      
      {showWelcome ? (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 relative">
                <Image 
                  src="/avatar-betsy.jpg" 
                  alt="Betsy" 
                  className="object-cover"
                  width={64}
                  height={64}
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src = "https://via.placeholder.com/150";
                  }}
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Hi, I&apos;m Betsy!</h1>
            <p className="mt-3 text-2xl text-gray-700">What can I help you with?</p>
          </div>
          
          <div className="space-y-4">
            <Card 
              className="p-4 flex items-center cursor-pointer hover:bg-gray-50 transition"
              onClick={() => handleOptionSelect('buy')}
            >
              <div className="bg-green-50 rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-left text-lg">Buying a home</span>
            </Card>
            
            <Card 
              className="p-4 flex items-center cursor-pointer hover:bg-gray-50 transition"
              onClick={() => handleOptionSelect('refinance')}
            >
              <div className="bg-green-50 rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <span className="text-left text-lg">Refinance my mortgage</span>
            </Card>
            
            <Card 
              className="p-4 flex items-center cursor-pointer hover:bg-gray-50 transition"
              onClick={() => handleOptionSelect('cashout')}
            >
              <div className="bg-green-50 rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-left text-lg">Get cash from my home</span>
            </Card>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900">$100B</h2>
              <p className="mt-2 text-gray-600">home loans funded entirely online</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900">400K</h2>
              <p className="mt-2 text-gray-600">Customers who chose a Better Mortgage</p>
            </div>
          </div>
          
          <div className="mt-10 bg-green-50 p-4 rounded">
            <p className="text-gray-700">After a few questions, you&apos;ll unlock:</p>
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Get Started with Better
            </h1>
            <p className="mt-2 text-gray-600">
              {selectedOption === 'buy' && "Let's find the right mortgage for your new home"}
              {selectedOption === 'refinance' && "Let's refinance your mortgage to save you money"}
              {selectedOption === 'cashout' && "Let's get you cash from your home equity"}
            </p>
          </div>

          <Card className="p-6">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <Label>What&apos;s your goal?</Label>
                    <RadioGroup 
                      defaultValue={selectedOption === 'refinance' ? 'refinance' : 'buy'} 
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="buy" id="buy" />
                        <Label htmlFor="buy">Buy a home</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="refinance" id="refinance" />
                        <Label htmlFor="refinance">Refinance my home</Label>
                      </div>
                      {selectedOption === 'cashout' && (
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cashout" id="cashout" />
                          <Label htmlFor="cashout">Get cash from my home</Label>
                        </div>
                      )}
                    </RadioGroup>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" onClick={handleBack}>Back</Button>
                    <Button onClick={() => setStep(2)} className="bg-[#32cd32] hover:bg-[#2db82d]">Continue</Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="propertyType">Property Type</Label>
                    <RadioGroup defaultValue="single-family" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single-family" id="single-family" />
                        <Label htmlFor="single-family">Single Family</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="condo" id="condo" />
                        <Label htmlFor="condo">Condo</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="townhouse" id="townhouse" />
                        <Label htmlFor="townhouse">Townhouse</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" onClick={handleBack}>Back</Button>
                    <Button onClick={() => setStep(3)} className="bg-[#32cd32] hover:bg-[#2db82d]">Continue</Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input type="tel" id="phone" required className="mt-1" />
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" onClick={handleBack}>Back</Button>
                    <Button type="submit" className="bg-[#32cd32] hover:bg-[#2db82d]">Submit Application</Button>
                  </div>
                </div>
              )}
            </form>
          </Card>
        </div>
      )}
      
      <Footer />
    </div>
  );
}
