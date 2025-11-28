import React from 'react';

const UrgencyToggle = ({ isUrgent, onToggle }) => {
    return (
        <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Urgency</label>
            <div
                onClick={() => onToggle(!isUrgent)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem',
                    border: `1px solid ${isUrgent ? 'var(--color-error)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-lg)',
                    cursor: 'pointer',
                    backgroundColor: isUrgent ? '#fff5f5' : 'white',
                    transition: 'all 0.2s ease'
                }}
            >
                <div>
                    <div style={{ fontWeight: '600', color: isUrgent ? 'var(--color-error)' : 'inherit' }}>Wanted ASAP?</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                        {isUrgent ? 'We will prioritize your request.' : 'Standard scheduling.'}
                    </div>
                </div>

                <div style={{
                    width: '48px',
                    height: '28px',
                    backgroundColor: isUrgent ? 'var(--color-error)' : '#e5e5ea',
                    borderRadius: '14px',
                    position: 'relative',
                    transition: 'background-color 0.2s ease'
                }}>
                    <div style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        position: 'absolute',
                        top: '2px',
                        left: isUrgent ? '22px' : '2px',
                        transition: 'left 0.2s ease',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                    }}></div>
                </div>
            </div>
        </div>
    );
};

export default UrgencyToggle;
