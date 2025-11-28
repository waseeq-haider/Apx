import { LucideIcon } from 'lucide-react';

export enum PageView {
    HOME = 'HOME',
    CHAT = 'CHAT',
    QUOTE = 'QUOTE'
}

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    colorClass: string;
    bgClass: string;
    span?: string;
}

export interface ChatMessage {
    id: string;
    sender: 'user' | 'ai';
    text: string;
    image?: string;
    timestamp: Date;
}
