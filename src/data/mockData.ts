// Mock Data for Contractor Portal Demo

export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: 'admin' | 'field_manager' | 'contractor' | 'investor';
    trade?: string;
    complianceStatus?: 'active' | 'blocked';
    insuranceExpiryDate?: string;
}

export interface Job {
    id: number;
    status: 'Open' | 'InProgress' | 'Completed';
    trade: string;
    propertyAddress: string;
    customerName: string;
    gateCode?: string;
    scopeOfWork: string;
    checklist: string[];
    uploads: {
        beforePhotos: string[];
        afterPhotos: string[];
        receipts: string[];
    };
    assignedContractorId: number | null;
}

export interface ContractorStats {
    contractorId: number;
    completedJobs: number;
    pendingPayoutAmount: number;
}

export interface Payout {
    payoutId: string;
    contractorId: number;
    jobId: number;
    amount: number;
    deductions: number;
    status: 'Processing' | 'Paid';
    paymentDate: string | null;
}

export interface ComplianceRecord {
    contractorId: number;
    w9: string | null;
    insuranceCert: string | null;
    insuranceExpiryDate: string;
    agreementsSigned: string[];
    complianceStatus: 'active' | 'blocked';
}

// Demo Users for Testing
export const demoUsers: User[] = [
    {
        id: 1,
        email: 'admin@apex.com',
        password: 'admin123',
        name: 'Admin User',
        role: 'admin',
    },
    {
        id: 2,
        email: 'fm@apex.com',
        password: 'fm123',
        name: 'Field Manager',
        role: 'field_manager',
    },
    {
        id: 3,
        email: 'cory@apex.com',
        password: 'contractor123',
        name: 'Cory Contractor',
        role: 'contractor',
        trade: 'painting',
        complianceStatus: 'active',
        insuranceExpiryDate: '2026-01-10',
    },
    {
        id: 4,
        email: 'james@apex.com',
        password: 'contractor123',
        name: 'James Electric',
        role: 'contractor',
        trade: 'electrical',
        complianceStatus: 'blocked',
        insuranceExpiryDate: '2024-12-01',
    },
    {
        id: 5,
        email: 'investor@apex.com',
        password: 'investor123',
        name: 'Investor User',
        role: 'investor',
    },
];

// Demo Jobs
export const demoJobs: Job[] = [
    {
        id: 103,
        status: 'Open',
        trade: 'painting',
        propertyAddress: '789 Pine Rd, Cleveland OH',
        customerName: 'Mike Ross',
        gateCode: '2201',
        scopeOfWork: 'Full paint job - living room and dining area',
        checklist: ['Inspect walls', 'Apply primer', 'Paint walls'],
        uploads: {
            beforePhotos: [],
            afterPhotos: [],
            receipts: [],
        },
        assignedContractorId: null,
    },
    {
        id: 104,
        status: 'Open',
        trade: 'electrical',
        propertyAddress: '66 Main Street, Boston MA',
        customerName: 'Rachel Zane',
        gateCode: '5544',
        scopeOfWork: 'Diagnose power outage and replace electrical panel',
        checklist: ['Diagnose outage', 'Replace panel', 'Test circuits'],
        uploads: {
            beforePhotos: [],
            afterPhotos: [],
            receipts: [],
        },
        assignedContractorId: null,
    },
    {
        id: 105,
        status: 'InProgress',
        trade: 'painting',
        propertyAddress: '12 Hill Avenue, Cleveland OH',
        customerName: 'Joey Tribbiani',
        gateCode: '9988',
        scopeOfWork: 'Repaint living room',
        checklist: ['Inspect walls', 'Scrape paint', 'Recoat walls'],
        uploads: {
            beforePhotos: ['before1.jpg', 'before2.jpg'],
            afterPhotos: [],
            receipts: [],
        },
        assignedContractorId: 3,
    },
    {
        id: 106,
        status: 'Open',
        trade: 'plumbing',
        propertyAddress: '45 Oak Street, Cleveland OH',
        customerName: 'Monica Geller',
        gateCode: '1122',
        scopeOfWork: 'Fix leaking kitchen faucet and replace pipes',
        checklist: ['Inspect leak', 'Replace faucet', 'Test water pressure'],
        uploads: {
            beforePhotos: [],
            afterPhotos: [],
            receipts: [],
        },
        assignedContractorId: null,
    },
];

// Demo Stats
export const demoStats: ContractorStats[] = [
    {
        contractorId: 3,
        completedJobs: 12,
        pendingPayoutAmount: 540,
    },
    {
        contractorId: 4,
        completedJobs: 4,
        pendingPayoutAmount: 120,
    },
];

// Demo Payouts
export const demoPayouts: Payout[] = [
    {
        payoutId: 'P8801',
        contractorId: 3,
        jobId: 105,
        amount: 300,
        deductions: 40,
        status: 'Processing',
        paymentDate: null,
    },
    {
        payoutId: 'P8802',
        contractorId: 3,
        jobId: 101,
        amount: 450,
        deductions: 0,
        status: 'Paid',
        paymentDate: '2025-11-10',
    },
    {
        payoutId: 'P8803',
        contractorId: 3,
        jobId: 102,
        amount: 380,
        deductions: 25,
        status: 'Paid',
        paymentDate: '2025-10-15',
    },
    {
        payoutId: 'P8822',
        contractorId: 4,
        jobId: 207,
        amount: 180,
        deductions: 20,
        status: 'Paid',
        paymentDate: '2025-09-01',
    },
];

// Demo Compliance Records
export const demoComplianceRecords: ComplianceRecord[] = [
    {
        contractorId: 3,
        w9: 'uploaded.pdf',
        insuranceCert: 'cert2025.pdf',
        insuranceExpiryDate: '2026-01-10',
        agreementsSigned: ['ICA', 'LW', 'PT'],
        complianceStatus: 'active',
    },
    {
        contractorId: 4,
        w9: null,
        insuranceCert: 'expiredCert.pdf',
        insuranceExpiryDate: '2024-12-01',
        agreementsSigned: ['ICA'],
        complianceStatus: 'blocked',
    },
];

// Helper functions
export const getUserByEmail = (email: string): User | undefined => {
    return demoUsers.find(user => user.email === email);
};

export const getJobsByTrade = (trade: string): Job[] => {
    return demoJobs.filter(job => job.trade === trade && job.status === 'Open');
};

export const getJobById = (jobId: number): Job | undefined => {
    return demoJobs.find(job => job.id === jobId);
};

export const getContractorStats = (contractorId: number): ContractorStats | undefined => {
    return demoStats.find(stat => stat.contractorId === contractorId);
};

export const getContractorPayouts = (contractorId: number): Payout[] => {
    return demoPayouts.filter(payout => payout.contractorId === contractorId);
};

export const getComplianceRecord = (contractorId: number): ComplianceRecord | undefined => {
    return demoComplianceRecords.find(record => record.contractorId === contractorId);
};

export const getActiveJobs = (contractorId: number): Job[] => {
    return demoJobs.filter(job => job.assignedContractorId === contractorId && job.status === 'InProgress');
};
