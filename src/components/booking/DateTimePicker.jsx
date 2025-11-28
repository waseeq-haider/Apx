import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const DateTimePicker = () => {
    return (
        <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Preferred Date & Time</label>
            <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                <div style={{ position: 'relative' }}>
                    <Calendar size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#86868b' }} />
                    <input type="date" style={{
                        width: '100%',
                        padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        fontSize: '1rem',
                        fontFamily: 'inherit'
                    }} />
                </div>
                <div style={{ position: 'relative' }}>
                    <Clock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#86868b' }} />
                    <select style={{
                        width: '100%',
                        padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        fontSize: '1rem',
                        fontFamily: 'inherit',
                        backgroundColor: 'white'
                    }}>
                        <option>Morning (8am - 12pm)</option>
                        <option>Afternoon (12pm - 4pm)</option>
                        <option>Evening (4pm - 8pm)</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default DateTimePicker;
