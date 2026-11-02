"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// 100% SAFE DEMO DATA - Synthetic / Fictional
const SAFE_DATA = [
  { id:1, city:"Vijayawada", area:"Benz Circle", title:"Comfort Stay PG for Students - AC Rooms", price:12500, type:"PG - Student", bhk:"1BHK • Single • Furnished", owner:"R. Kumar (Sample)", phoneMasked:"98XXX XXXXX", fullPhone:"98765 43210", img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600", dist:"2.5 km from PVP Mall", verified:true, features:["WiFi","AC","Food","Parking"], rating:4.8 },
  { id:2, city:"Hyderabad", area:"Gachibowli", title:"Spacious 2BHK Family House - Near HITEC", price:18000, type:"Family House", bhk:"2BHK • Family • Semi", owner:"S. Reddy (Sample)", phoneMasked:"91XXX XXXXX", fullPhone:"91234 56789", img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600", dist:"Near HITEC City", verified:true, features:["Parking","Lift","Security"], rating:4.9 },
  { id:3, city:"Bhimavaram", area:"Dasupuram", title:"Modern 1BHK for Bachelors - Budget", price:9500, type:"Bachelor - 1BHK", bhk:"1BHK • Double", owner:"L. Priya (Sample)", phoneMasked:"99XXX XXXXX", fullPhone:"99887 76655", img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", dist:"Near RTC Depot", verified:true, features:["WiFi","Water 24/7"], rating:4.6 },
  { id:4, city:"Kurnool", area:"Nandyal Road", title:"2BHK Budget House - Bachelor Allowed", price:8000, type:"Rental House", bhk:"2BHK • Bachelor/Family", owner:"A. Kumar (Sample)", phoneMasked:"90XXX XXXXX", fullPhone:"90102 34567", img:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600", dist:"2 mins to Bus Stand", verified:true, features:["Water","Parking"], rating:4.7 },
  { id:5, city:"Hyderabad", area:"Kukatpally", title:"Girls PG - Food & WiFi Included", price:7500, type:"PG - Girls", bhk:"Single/Double", owner:"Sunitha G. (Sample)", phoneMasked:"88XXX XXXXX", fullPhone:"88855 44433", img:"https://images.unsplash.com/photo-1555854877-bab0e564b8d?w=600", dist:"Near JNTU", verified:true, features:["Food","WiFi","CCTV"], rating:4.8 },
];

export default function RentHubSafe() {
  const [user,setUser]=useState<any>(null);
  const [city,setCity]=useState("All");
  const [selected,setSelected]=useState<any>(null);
  const [showContact,setShowContact]=useState(false);
  const [reveal,setReveal]=useState(false);
  const router=useRouter();
  useEffect(()=>{supabase.auth.getUser().then(({data})=>setUser(data.user))},[]);

  const filtered = SAFE_DATA.filter(p=> city==="All" || p.city===city);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <header className="sticky top-0 z-40 bg-white border-b">
        <div className="max-w-[1280px] mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-[22px] font-black">RentHub<span className="text-blue-600">.</span> <span className="text-[10px] bg-yellow-100 px-2 py-1 rounded ml-2">DEMO</span></h1>
          <button onClick={()=>router.push('/dashboard')} className="bg-black text-white text-[12px] font-bold px-4 py-2 rounded-full">+ List Property</button>
        </div>
      </header>

      {/* SAFE DISCLAIMER - Very Important */}
      <div className="max-w-[1280px] mx-auto px-6 pt-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex gap-2 items-center">
          <span className="text-[16px]">⚠️</span>
          <p className="text-[11px] text-yellow-800"><b>Demo Project Disclaimer:</b> All properties, owner names & contact numbers shown are <b>synthetic / sample data</b> for portfolio demonstration only. No real person data is used. Built for learning & internship purpose. Privacy Protected.</p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 pt-4">
        <div className="bg-white rounded-[16px] border p-5">
          <h2 className="text-[18px] font-black text-center">Find Your Perfect Rental Home</h2>
          <p className="text-[11px] text-gray-500 text-center mt-1">Sample Data • Privacy Safe • {SAFE_DATA.length}+ Demo Properties</p>
          <div className="mt-4 flex gap-2 justify-center">
            {["All","Vijayawada","Hyderabad","Kurnool","Bhimavaram"].map(c=><button key={c} onClick={()=>setCity(c)} className={`px-4 py-2 rounded-full text-[11px] font-bold border ${city===c?'bg-black text-white':'bg-white'}`}>{c}</button>)}
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-6">
        <p className="text-[12px] mb-4">Showing <b>{filtered.length}</b> demo properties in {city}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(p=>(
            <div key={p.id} className="bg-white rounded-[16px] border overflow-hidden hover:shadow-xl transition">
              <div className="relative h-[180px]"><img src={p.img} className="w-full h-full object-cover" /><span className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-[9px] font-bold">{p.type}</span><span className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-full text-[9px] font-bold">DEMO DATA</span></div>
              <div className="p-3">
                <h3 className="font-black text-blue-600 text-[14px]">₹{p.price.toLocaleString()} /month</h3>
                <p className="font-bold text-[12px] mt-1">{p.title}</p>
                <p className="text-[10px] text-gray-500 mt-1">📍 {p.city}, {p.area}</p>
                <p className="text-[10px] bg-gray-50 mt-2 p-2 rounded">{p.bhk} • ⭐ {p.rating} • Sample Owner: {p.owner}</p>
                <button onClick={()=>{setSelected(p); setShowContact(true); setReveal(false)}} className="w-full mt-3 bg-black text-white text-[11px] font-bold py-2.5 rounded-[10px]">📞 View Sample Contact</button>
                <p className="text-[9px] text-gray-400 text-center mt-2">🔒 {p.phoneMasked} • Privacy Protected Demo</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SAFE CONTACT MODAL */}
      {showContact && selected && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={()=>setShowContact(false)}>
          <div className="bg-white rounded-[20px] max-w-[380px] w-full overflow-hidden" onClick={e=>e.stopPropagation()}>
            <img src={selected.img} className="w-full h-[180px] object-cover" />
            <div className="p-5">
              <span className="bg-yellow-100 text-yellow-800 text-[9px] font-bold px-2 py-1 rounded-full">SYNTHETIC DEMO DATA - NOT REAL</span>
              <h3 className="font-black text-[15px] mt-2">{selected.title}</h3>
              <p className="text-[11px] text-gray-500 mt-1">📍 {selected.city}, {selected.area}</p>
              
              <div className="mt-4 bg-gray-50 rounded-xl p-4 border">
                <p className="text-[11px] font-bold">OWNER (Sample Data)</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-black text-[12px]">{selected.owner[0]}</div>
                  <div><p className="font-bold text-[13px]">{selected.owner}</p><p className="text-[10px] text-gray-500">Fictional data for demo • Privacy Safe</p></div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between bg-white p-3 rounded-lg border"><span className="text-[11px]">📞 Phone (Masked)</span><b className="text-[12px]">{reveal ? selected.fullPhone : selected.phoneMasked}</b></div>
                  <div className="flex justify-between bg-white p-3 rounded-lg border"><span className="text-[11px]">🏠 Rent</span><b className="text-[12px]">₹{selected.price}/mo • No Brokerage</b></div>
                </div>

                {!reveal ? (
                  <button onClick={()=>setReveal(true)} className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-bold text-[12px]">🔓 Reveal Demo Number (For Portfolio Demo)</button>
                ) : (
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <a href={`tel:${selected.fullPhone}`} className="bg-black text-white text-center py-3 rounded-xl font-bold text-[11px]">📞 Demo Call</a>
                    <a href={`https://wa.me/91${selected.fullPhone.replace(/ /g,'')}`} target="_blank" className="bg-green-600 text-white text-center py-3 rounded-xl font-bold text-[11px]">💬 Demo WhatsApp</a>
                  </div>
                )}
                
                <p className="text-[9px] text-gray-400 text-center mt-3">⚠️ This is synthetic data. In real app, owner would give consent via OTP. No real person is contacted.</p>
                <p className="text-[9px] text-center mt-2 text-blue-600 font-bold">Resume lo: "Implemented Privacy-Safe Synthetic Data & Consent-Based Listing"</p>
              </div>
              <button onClick={()=>setShowContact(false)} className="w-full mt-4 text-[11px] text-gray-500">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}