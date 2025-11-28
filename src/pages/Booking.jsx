import React, { useState } from 'react';
import Header from '../components/Header';
import DateTimePicker from '../components/booking/DateTimePicker';
import UrgencyToggle from '../components/booking/UrgencyToggle';
import SummarySidebar from '../components/booking/SummarySidebar';
import { Upload } from 'lucide-react';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: 'Detroit',
        phone: '',
        email: '',
        jobType: 'Handyman',
        description: '',
        isUrgent: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Quote Request Submitted! (Simulation)');
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <Header />

            <div className="container section" style={{ flex: 1 }}>
                <div className="grid grid-cols-1" style={{ gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-3xl)' }}>

                    {/* Form Section */}
                    <div>
                        <h1 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700', marginBottom: 'var(--spacing-lg)' }}>Request a Quote</h1>
                        <p className="text-secondary" style={{ marginBottom: 'var(--spacing-2xl)' }}>Tell us about your project and we'll get you a price instantly.</p>

                        <form onSubmit={handleSubmit}>
                            {/* Personal Info */}
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Contact Details</h3>
                                <div className="grid grid-cols-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} placeholder="(555) 123-4567" />
                                    </div>
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} placeholder="john@example.com" />
                                </div>
                                <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Address</label>
                                        <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} placeholder="123 Main St" />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>City</label>
                                        <select name="city" value={formData.city} onChange={handleChange} className="w-full" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', backgroundColor: 'white' }}>
                                            <option>Detroit</option>
                                            <option>Chicago</option>
                                            <option>Cleveland</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Job Details */}
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Job Details</h3>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Service Type</label>
                                    <select name="jobType" value={formData.jobType} onChange={handleChange} className="w-full" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', backgroundColor: 'white' }}>
                                        <option>Handyman</option>
                                        <option>Plumbing</option>
                                        <option>Electrical</option>
                                        <option>Painting</option>
                                        <option>HVAC</option>
                                    </select>
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Description</label>
                                    <textarea name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }} placeholder="Describe what needs to be done..." />
                                </div>

                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Photos</label>
                                    <div style={{
                                        border: '2px dashed var(--color-border)',
                                        borderRadius: 'var(--radius-lg)',
                                        padding: '2rem',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        backgroundColor: '#f9fafb'
                                    }}>
                                        <Upload size={24} style={{ margin: '0 auto 0.5rem', color: '#86868b' }} />
                                        <span style={{ color: 'var(--color-primary)', fontWeight: '500' }}>Click to upload</span> or drag and drop
                                    </div>
                                </div>
                            </div>

                            <UrgencyToggle isUrgent={formData.isUrgent} onToggle={(val) => setFormData(prev => ({ ...prev, isUrgent: val }))} />

                            <DateTimePicker />

                            <button type="submit" className="btn btn-primary w-full" style={{ padding: '1rem', fontSize: '1.125rem' }}>
                                Get Instant Quote
                            </button>
                        </form>
                    </div>

                    {/* Sidebar */}
                    <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
                        {/* Note: In inline styles media queries don't work directly. 
                 For simplicity in this mockup, I'll just render it. 
                 In a real app, I'd use the global CSS class or a styled component. 
                 I'll assume desktop view for the mockup. */}
                        <SummarySidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
