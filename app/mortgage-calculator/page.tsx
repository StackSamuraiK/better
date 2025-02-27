'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/ui/card';
import { Input } from '@/components/ui/ui/input';
import { Label } from '@/components/ui/ui/label';
import { Slider } from '@/components/ui/ui/slider';
import { Button } from '@/components/ui/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/ui/select';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export default function MortgageCalculator() {
  
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTerm, setLoanTerm] = useState('30');
  const [interestRate, setInterestRate] = useState(6.5);
  const [zipCode, setZipCode] = useState('110091');
  
  
  const [propertyTax, setPropertyTax] = useState(265);
  const [homeInsurance, setHomeInsurance] = useState(132);
  const [hoaFees, setHoaFees] = useState(132);
  const [utilities, setUtilities] = useState(100);
  
  
  const [principalInterest, setPrincipalInterest] = useState(0);
  const [totalMonthlyPayment, setTotalMonthlyPayment] = useState(0);
  
  
  const calculatePrincipalInterest = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = parseInt(loanTerm) * 12;

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return isNaN(monthlyPayment) ? 0 : monthlyPayment;
  };
  
  
  const calculateTotalPayment = (principalInterest : number) => {
    return principalInterest + propertyTax + homeInsurance + hoaFees + utilities;
  };

  useEffect(() => {
    const calculatedPrincipalInterest = calculatePrincipalInterest();
    setPrincipalInterest(calculatedPrincipalInterest);
    setTotalMonthlyPayment(calculateTotalPayment(calculatedPrincipalInterest));
  }, [homePrice, downPayment, loanTerm, interestRate, propertyTax, homeInsurance, hoaFees, utilities]);

  const handleDownPaymentPercentChange = (newPercent : number) => {
    setDownPaymentPercent(newPercent);
    setDownPayment(Math.round(homePrice * (newPercent / 100)));
  };

  const handleDownPaymentChange = (newDownPayment : number) => {
    setDownPayment(newDownPayment);
    setDownPaymentPercent((newDownPayment / homePrice) * 100);
  };
  
  
  const getPrincipalPercentage = () => {
    return (principalInterest / totalMonthlyPayment) * 100;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Mortgage calculator</h1>
        <p className="text-gray-600 mb-8">
          Our mortgage calculator includes key factors like homeowners association fees, property taxes, and
          private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="homePrice">Home price</Label>
              <div className="mt-2 relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <Input
                  id="homePrice"
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="pl-7"
                />
              </div>
              <Slider
                value={[homePrice]}
                onValueChange={(value) => setHomePrice(value[0])}
                min={50000}
                max={1000000}
                step={1000}
                className="mt-4"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="zipCode">ZIP code</Label>
                <Input
                  id="zipCode"
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label>Down payment</Label>
                <div className="flex gap-2 mt-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <Input
                      type="number"
                      value={downPayment}
                      onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                      className="pl-7"
                    />
                  </div>
                  <div className="relative w-24">
                    <Input
                      type="number"
                      value={Math.round(downPaymentPercent)}
                      onChange={(e) => handleDownPaymentPercentChange(Number(e.target.value))}
                      className="pr-7"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="interestRate">Interest rate</Label>
                <div className="relative mt-2">
                  <Input
                    id="interestRate"
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    step="0.1"
                    className="pr-7"
                  />
                  <span className="absolute right-3 top-2 text-gray-500">%</span>
                </div>
              </div>
              <div>
                <Label htmlFor="loanTerm">Length of loan</Label>
                <Select value={loanTerm} onValueChange={setLoanTerm}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 years</SelectItem>
                    <SelectItem value="20">20 years</SelectItem>
                    <SelectItem value="15">15 years</SelectItem>
                    <SelectItem value="10">10 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Monthly payment breakdown</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="propertyTax">Property taxes</Label>
                  <div className="relative mt-2">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <Input
                      id="propertyTax"
                      type="number"
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(Number(e.target.value))}
                      className="pl-7"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="homeInsurance">Homeowners insurance</Label>
                  <div className="relative mt-2">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <Input
                      id="homeInsurance"
                      type="number"
                      value={homeInsurance}
                      onChange={(e) => setHomeInsurance(Number(e.target.value))}
                      className="pl-7"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="hoaFees">HOA fees</Label>
                  <div className="relative mt-2">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <Input
                      id="hoaFees"
                      type="number"
                      value={hoaFees}
                      onChange={(e) => setHoaFees(Number(e.target.value))}
                      className="pl-7"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="utilities">Utilities</Label>
                  <div className="relative mt-2">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <Input
                      id="utilities"
                      type="number"
                      value={utilities}
                      onChange={(e) => setUtilities(Number(e.target.value))}
                      className="pl-7"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-6">
            <Card className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Monthly payment</h2>
              <div className="text-5xl font-bold text-green-600 mb-8">
                ${Math.round(totalMonthlyPayment).toLocaleString()}/mo
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Principal & Interest</span>
                  <span className="font-medium">${Math.round(principalInterest).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Property Taxes</span>
                  <span className="font-medium">${propertyTax}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Homeowners Insurance</span>
                  <span className="font-medium">${homeInsurance}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">HOA Fees</span>
                  <span className="font-medium">${hoaFees}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Utilities</span>
                  <span className="font-medium">${utilities}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold pt-2 border-t border-gray-200">
                  <span className="text-gray-800">Loan Amount</span>
                  <span>${(homePrice - downPayment).toLocaleString()}</span>
                </div>
              </div>
              
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Payment breakdown</h3>
                <div className="flex h-8 rounded-full overflow-hidden">
                  <div 
                    className="bg-green-600" 
                    style={{ width: `${getPrincipalPercentage()}%` }}
                    title="Principal & Interest"
                  ></div>
                  <div 
                    className="bg-indigo-500" 
                    style={{ width: `${(propertyTax / totalMonthlyPayment) * 100}%` }}
                    title="Property Taxes"
                  ></div>
                  <div 
                    className="bg-indigo-300" 
                    style={{ width: `${(homeInsurance / totalMonthlyPayment) * 100}%` }}
                    title="Homeowners Insurance"
                  ></div>
                  <div 
                    className="bg-yellow-400" 
                    style={{ width: `${(hoaFees / totalMonthlyPayment) * 100}%` }}
                    title="HOA Fees"
                  ></div>
                  <div 
                    className="bg-red-300" 
                    style={{ width: `${(utilities / totalMonthlyPayment) * 100}%` }}
                    title="Utilities"
                  ></div>
                </div>
                <div className="mt-4 text-xs space-y-1">
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-green-600 mr-2 rounded-sm"></div>
                    <span>Principal & Interest</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-indigo-500 mr-2 rounded-sm"></div>
                    <span>Property Taxes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-indigo-300 mr-2 rounded-sm"></div>
                    <span>Homeowners Insurance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-yellow-400 mr-2 rounded-sm"></div>
                    <span>HOA Fees</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-red-300 mr-2 rounded-sm"></div>
                    <span>Utilities</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white">
                Get pre-approved
              </Button>
            </Card>
          </div>
        </div>
        
        
        <div className="mt-16 space-y-16">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How does a mortgage calculator help me?</h2>
            <p className="text-gray-600">
              When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.
            </p>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How much monthly mortgage payment can I afford?</h2>
            <p className="text-gray-600 mb-4">
              Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.
            </p>
            <p className="text-gray-600 mb-4">
              Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It's most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.
            </p>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Formula for calculating your debt-to-income (DTI) ratio:</h3>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="inline-block text-xl">
                  <div className="border-b-2 border-gray-700 pb-2 mb-2">
                    Monthly Debt Payments
                  </div>
                  <div>
                    Monthly Gross Income
                  </div>
                </div>
                <span className="mx-4 text-xl">x</span>
                <span className="text-xl">100</span>
                <span className="mx-4 text-xl">=</span>
                <span className="text-xl font-bold text-green-700">Debt-to-Income Ratio</span>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to calculate monthly mortgage payments?</h2>
            <p className="text-gray-600 mb-4">
              Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it's a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">Formula for calculating monthly mortgage payments</h3>
            <p className="text-gray-600 mb-4">
              The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here's the formula for calculating principal and interest yourself:
            </p>
            
            <div className="bg-gray-100 p-6 rounded-lg text-center mt-4">
              <p className="text-lg mb-4">Monthly mortgage payments (M) = </p>
              <div className="flex justify-center items-center">
                <span className="text-xl mr-2">P</span>
                <span className="text-xl mx-2">x</span>
                <div className="inline-block">
                  <div className="border-b-2 border-gray-700 text-xl pb-1 mb-1">r(1+r)<sup>n</sup></div>
                  <div className="text-xl">(1+r)<sup>n</sup>-1</div>
                </div>
              </div>
              
              <div className="mt-8 text-left">
                <p className="font-medium mb-2">Where:</p>
                <ul className="space-y-2">
                  <li>• M is monthly mortgage payments</li>
                  <li>• P is the principal loan amount (the amount you borrow)</li>
                  <li>• r is the monthly interest rate (annual interest rate divided by 12 and expressed as a decimal)</li>
                  <li>• n is the total number of payments in months</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}