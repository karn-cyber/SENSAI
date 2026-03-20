import React, { useState } from 'react';

type Capacity = '128GB' | '512GB';
type Material = 'Aero Aluminum' | 'Brushed Titanium';
type CheckoutStep = 'configure' | 'shipping' | 'payment' | 'success';

export const OrderSection: React.FC = () => {
  const [step, setStep] = useState<CheckoutStep>('configure');
  const [capacity, setCapacity] = useState<Capacity>('128GB');
  const [material, setMaterial] = useState<Material>('Aero Aluminum');
  
  // Form State
  const [shippingInfo, setShippingInfo] = useState({ name: '', address: '', city: '', zip: '' });
  const [paymentInfo, setPaymentInfo] = useState({ card: '', expiry: '', cvc: '' });

  const basePrice = 599;
  const capacityPrice = capacity === '512GB' ? 100 : 0;
  const materialPrice = material === 'Brushed Titanium' ? 100 : 0;
  const totalPrice = basePrice + capacityPrice + materialPrice;

  // Render left sticky column for the product image and summary independently of step
  const renderProductPreview = () => (
    <div className="w-full lg:w-5/12 lg:sticky lg:top-32 order-2 lg:order-1 flex flex-col items-center">
        <div className="w-full aspect-square bg-[#111] rounded-3xl border border-white/5 flex items-center justify-center p-8 shadow-2xl overflow-hidden relative group">
            <img 
                src="/assets/Whisk_e3654499207dc3bb0a84311da8c5ad65dr.png" 
                alt="SENS.ai Wearable Configuration" 
                className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none"></div>
        </div>
        
        {step !== 'configure' && step !== 'success' && (
            <div className="mt-8 w-full bg-black/40 border border-white/5 rounded-2xl p-6">
                <h4 className="text-white text-lg mb-4 border-b border-white/10 pb-2">Order Summary</h4>
                <div className="flex justify-between items-center mb-2 text-sm text-gray-300">
                    <span>SENS.ai ({capacity}, {material})</span>
                    <span>${totalPrice}.00</span>
                </div>
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span>Shipping & Handling</span>
                    <span>Free</span>
                </div>
                <div className="flex justify-between items-center text-lg text-white font-medium border-t border-white/10 pt-4">
                    <span>Total</span>
                    <span>${totalPrice}.00</span>
                </div>
            </div>
        )}

        {step === 'configure' && (
            <div className="mt-8 text-center flex flex-col items-center w-full bg-black/40 border border-white/5 rounded-2xl p-6">
                <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold mb-3">Included in the Box</p>
                <ul className="text-gray-300 font-light text-sm space-y-2 text-left">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"></span>SENS.ai Main Unit</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"></span>Magnetic Fast-Charging Cable</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"></span>Ergonomic Clavicle Comfort Pads</li>
                </ul>
            </div>
        )}
    </div>
  );

  const renderConfigurationStep = () => (
    <div className="w-full lg:w-7/12 flex flex-col gap-12 order-1 lg:order-2 animate-in fade-in duration-500">
        <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
              Configure your SENS.ai
            </h2>
            <div className="text-gray-400 font-light text-[15px] leading-relaxed space-y-4 mb-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <p>
                <strong className="text-white font-medium">Redefining Human Awareness.</strong> SENSAI is an AI-powered, clavicle-mounted wearable designed to enhance spatial awareness for visually impaired individuals.
              </p>
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium text-white tracking-wide border-b border-white/10 pb-2">
                1. Onboard AI Processing Cache
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <button 
                    onClick={() => setCapacity('128GB')}
                    className={`p-6 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${capacity === '128GB' ? 'border-neon bg-neon/5 shadow-[0_0_20px_rgba(176,38,255,0.15)]' : 'border-white/10 hover:border-white/30 bg-black'}`}
                >
                    <span className="text-xl font-medium text-white">128GB Base</span>
                    <span className="text-xs text-gray-500 tracking-wider">Standard Pathfinding</span>
                </button>
                <button 
                    onClick={() => setCapacity('512GB')}
                    className={`p-6 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${capacity === '512GB' ? 'border-neon bg-neon/5 shadow-[0_0_20px_rgba(176,38,255,0.15)]' : 'border-white/10 hover:border-white/30 bg-black'}`}
                >
                    <span className="text-xl font-medium text-white">512GB Pro</span>
                    <span className="text-xs text-gray-500 tracking-wider">+ $100</span>
                </button>
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium text-white tracking-wide border-b border-white/10 pb-2">
                2. Enclosure Material
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <button 
                    onClick={() => setMaterial('Aero Aluminum')}
                    className={`p-6 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${material === 'Aero Aluminum' ? 'border-neon bg-neon/5 shadow-[0_0_20px_rgba(176,38,255,0.15)]' : 'border-white/10 hover:border-white/30 bg-black'}`}
                >
                    <span className="text-xl font-medium text-white">Aero Aluminum</span>
                    <span className="text-xs text-gray-500 tracking-wider">Lightweight Core</span>
                </button>
                <button 
                    onClick={() => setMaterial('Brushed Titanium')}
                    className={`p-6 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${material === 'Brushed Titanium' ? 'border-neon bg-neon/5 shadow-[0_0_20px_rgba(176,38,255,0.15)]' : 'border-white/10 hover:border-white/30 bg-black'}`}
                >
                    <span className="text-xl font-medium text-white">Brushed Titanium</span>
                    <span className="text-xs text-gray-500 tracking-wider">+ $100</span>
                </button>
            </div>
        </div>

        <div className="flex flex-col gap-6 bg-[#111] p-8 rounded-3xl border border-white/10 mt-4">
            <div className="flex justify-between items-end border-b border-white/10 pb-6">
                <div className="flex flex-col">
                    <span className="text-2xl font-semibold text-white">SENS.ai</span>
                    <span className="text-sm text-gray-400 mt-1">{capacity} • {material}</span>
                </div>
                <span className="text-4xl font-light tracking-tighter text-white">${totalPrice}</span>
            </div>
            <button 
              onClick={() => {
                setStep('shipping');
                window.location.hash = 'order';
              }}
              className="w-full bg-white text-black font-semibold text-sm tracking-widest uppercase py-4 rounded-xl hover:bg-gray-200 transition-all active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
                Checkout Securely
            </button>
        </div>
    </div>
  );

  const renderShippingStep = () => (
    <div className="w-full lg:w-7/12 flex flex-col gap-8 order-1 lg:order-2 animate-in fade-in slide-in-from-right-4 duration-500">
        <div>
            <h2 className="text-3xl font-light text-white mb-2">Shipping Information</h2>
            <p className="text-gray-400 text-sm">Where should we send your SENS.ai?</p>
        </div>
        
        <form className="flex flex-col gap-6 bg-[#111] p-8 rounded-3xl border border-white/10" onSubmit={(e) => { e.preventDefault(); setStep('payment'); }}>
            <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 uppercase tracking-widest">Full Name</label>
                <input required type="text" value={shippingInfo.name} onChange={e => setShippingInfo({...shippingInfo, name: e.target.value})} className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all" placeholder="Jane Doe" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 uppercase tracking-widest">Street Address</label>
                <input required type="text" value={shippingInfo.address} onChange={e => setShippingInfo({...shippingInfo, address: e.target.value})} className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all" placeholder="123 Innovation Way" />
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 uppercase tracking-widest">City</label>
                    <input required type="text" value={shippingInfo.city} onChange={e => setShippingInfo({...shippingInfo, city: e.target.value})} className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all" placeholder="San Francisco" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 uppercase tracking-widest">ZIP / Postal Code</label>
                    <input required type="text" value={shippingInfo.zip} onChange={e => setShippingInfo({...shippingInfo, zip: e.target.value})} className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all" placeholder="94105" />
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button type="button" onClick={() => setStep('configure')} className="px-6 py-4 rounded-xl text-white border border-white/20 hover:bg-white/5 transition-all text-sm font-medium tracking-widest uppercase">
                    Back
                </button>
                <button type="submit" className="flex-1 bg-white text-black font-semibold text-sm tracking-widest uppercase py-4 rounded-xl hover:bg-gray-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Continue to Payment
                </button>
            </div>
        </form>
    </div>
  );

  const renderPaymentStep = () => (
    <div className="w-full lg:w-7/12 flex flex-col gap-8 order-1 lg:order-2 animate-in fade-in slide-in-from-right-4 duration-500">
        <div>
            <h2 className="text-3xl font-light text-white mb-2">Payment Details</h2>
            <p className="text-gray-400 text-sm">All transactions are secure and encrypted.</p>
        </div>
        
        <form className="flex flex-col gap-6 bg-[#111] p-8 rounded-3xl border border-white/10" onSubmit={(e) => { e.preventDefault(); setStep('success'); }}>
            <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 uppercase tracking-widest">Card Number</label>
                <div className="relative">
                    <input required type="text" maxLength={19} value={paymentInfo.card} onChange={e => setPaymentInfo({...paymentInfo, card: e.target.value})} className="w-full bg-black border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all" placeholder="0000 0000 0000 0000" />
                    <svg className="w-6 h-6 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 uppercase tracking-widest">Expiration</label>
                    <input required type="text" maxLength={5} value={paymentInfo.expiry} onChange={e => setPaymentInfo({...paymentInfo, expiry: e.target.value})} className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all" placeholder="MM/YY" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 uppercase tracking-widest">Security Code</label>
                    <input required type="text" maxLength={4} value={paymentInfo.cvc} onChange={e => setPaymentInfo({...paymentInfo, cvc: e.target.value})} className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all" placeholder="CVC" />
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button type="button" onClick={() => setStep('shipping')} className="px-6 py-4 rounded-xl text-white border border-white/20 hover:bg-white/5 transition-all text-sm font-medium tracking-widest uppercase">
                    Back
                </button>
                <button type="submit" className="flex-1 bg-neon text-white font-semibold text-sm tracking-widest uppercase py-4 rounded-xl hover:bg-neon/80 transition-all active:scale-95 shadow-[0_0_30px_rgba(176,38,255,0.4)]">
                    Place Order • ${totalPrice}.00
                </button>
            </div>
        </form>
    </div>
  );

  if (step === 'success') {
    return (
        <section className="w-full bg-[#080808] min-h-screen relative z-20 py-32 flex flex-col items-center justify-center font-sans tracking-wide border-t border-white/5" id="order">
            <div className="text-center p-12 glass rounded-3xl max-w-xl mx-6 border border-white/10 shadow-2xl shadow-neon/5 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-neon/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-neon/20 shadow-[0_0_30px_rgba(176,38,255,0.3)]">
                    <svg className="w-10 h-10 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-4xl font-light text-white mb-6">Order Confirmed</h2>
                <p className="text-gray-400 mb-10 font-light leading-relaxed">
                    Thank you, {shippingInfo.name || 'Friend'}. Your journey toward enhanced spatial awareness begins now. We'll secure your SENS.ai <strong>({capacity}, {material})</strong> and deliver it to {shippingInfo.city || 'your location'}.
                </p>
                <div className="bg-black/50 p-6 rounded-2xl border border-white/5 mb-10 text-left">
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-2 border-b border-white/10 pb-2">
                        <span>Total Paid</span>
                        <span className="text-white">${totalPrice}.00</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>Expected Delivery</span>
                        <span className="text-white">2-3 Weeks</span>
                    </div>
                </div>
                <button onClick={() => setStep('configure')} className="text-white hover:text-neon transition-colors text-xs uppercase tracking-widest font-semibold border-b border-white/30 pb-1 hover:border-neon">
                    Configure Another Device
                </button>
            </div>
        </section>
    );
  }

  return (
    <section className="w-full bg-[#0a0a0a] relative z-20 py-24 md:py-32 outline-none border-t border-white/5 font-sans" id="order">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        {renderProductPreview()}
        {step === 'configure' && renderConfigurationStep()}
        {step === 'shipping' && renderShippingStep()}
        {step === 'payment' && renderPaymentStep()}
      </div>
    </section>
  );
};
