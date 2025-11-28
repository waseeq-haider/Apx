import React from 'react';

const actions = [
    'Request Quote',
    'Book Visit',
    'Schedule Service',
    'Request Call Back'
];

const QuickActions = ({ onActionClick }) => {
    return (
        <div style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            padding: '0.5rem 0',
            marginBottom: '1rem',
            scrollbarWidth: 'none' // Hide scrollbar for cleaner look
        }}>
            {actions.map((action, index) => (
                <button key={index}
                    onClick={() => onActionClick(action)}
                    style={{
                        whiteSpace: 'nowrap',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: 'white',
                        color: 'var(--color-text-main)',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-primary)';
                        e.currentTarget.style.color = 'var(--color-primary)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-border)';
                        e.currentTarget.style.color = 'var(--color-text-main)';
                    }}
                >
                    {action}
                </button>
            ))}
        </div>
    );
};

export default QuickActions;
