"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [role, setRole] = useState("");

  if (!role) {
    return (
      <div style={{ minHeight: '100vh', background: '#f0f4f8', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <div style={{ background: 'white', padding: 40, borderRadius: 20, maxWidth: 600, width: '100%', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <h1 style={{ marginBottom: 10 }}>Welcome to SmartRent AI Portal</h1>
          <p style={{ color: '#666', marginBottom: 30 }}>AICTE Portal la - Mee Role Select chesukondi</p>
          
          <div style={{ display: 'grid', gap: 15 }}>
            <button onClick={() => setRole('tenant')} style={{ padding: 20, borderRadius: 15, border: '2px solid #667eea', background: '#f8fafc', cursor: 'pointer', textAlign: 'left' }}>
              <h3 style={{ margin: 0 }}>🧑‍🎓 Tenant / Student</h3>
              <p style={{ margin: '5px 0 0 0', color: '#666' }}>House rent ki kavali - AI tho search cheyyandi</p>
            </button>
            
            <button onClick={() => setRole('owner')} style={{ padding: 20, borderRadius: 15, border: '2px solid #10b981', background: '#f8fafc', cursor: 'pointer', textAlign: 'left' }}>
              <h3 style={{ margin: 0 }}>🏠 Owner / Landlord</h3>
              <p style={{ margin: '5px 0 0 0', color: '#666' }}>Mee property ni rent ki pettandi</p>
            </button>
          </div>

          <button onClick={() => router.push('/')} style={{ marginTop: 20, padding: '10px 20px', borderRadius: 10, border: '1px solid #ddd', background: 'white', cursor: 'pointer' }}>Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: 20 }}>
      <div style={{ background: 'white', padding: 20, borderRadius: 15, display: 'flex', justifyContent: 'space-between' }}>
        <h2>🤖 SmartRent Portal - {role.toUpperCase()} Dashboard</h2>
        <button onClick={() => setRole('')} style={{ padding: '8px 15px', borderRadius: 8 }}>Change Role</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20, marginTop: 25 }}>
        {role === 'tenant' ? (
          <>
            <div onClick={() => router.push('/')} style={{ background: 'white', padding: 25, borderRadius: 15, cursor: 'pointer', borderLeft: '5px solid #667eea' }}><h3>🏠 Find Rental Houses</h3><p>AI tho perfect house vetukondi</p></div>
            <div style={{ background: 'white', padding: 25, borderRadius: 15, borderLeft: '5px solid #10b981' }}><h3>🤖 AI Chat Assistant</h3><p>Telugu lo adagandi - AI samadhanam istundi</p></div>
            <div style={{ background: 'white', padding: 25, borderRadius: 15, borderLeft: '5px solid #f59e0b' }}><h3>📄 My Applications</h3><p>Meeru apply chesina houses</p></div>
            <div style={{ background: 'white', padding: 25, borderRadius: 15, borderLeft: '5px solid #ef4444' }}><h3>⭐ Saved Properties</h3><p>Meeku nachina houses list</p></div>
          </>
        ) : (
          <>
            <div onClick={() => router.push('/post-property')} style={{ background: 'white', padding: 25, borderRadius: 15, borderLeft: '5px solid #667eea', cursor: 'pointer' }}><h3>➕ Post Your Property</h3><p>Kotha house ni rent ki pettandi - AI price suggest chestundi</p></div>
            <div style={{ background: 'white', padding: 25, borderRadius: 15, borderLeft: '5px solid #10b981' }}><h3>📊 My Listings - 3 Active</h3><p>Meeru pettina houses status</p></div>
            <div style={{ background: 'white', padding: 25, borderRadius: 15, borderLeft: '5px solid #f59e0b' }}><h3>💬 Tenant Requests - 5 New</h3><p>Tenants nunchi vachina requests</p></div>
          </>
        )}
      </div>
    </div>
  );
}