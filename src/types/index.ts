export type ServiceType = 'pos' | 'loans' | 'savings' | 'moniebook' | 'whatsapp';

export interface PosTerminal {
  id: string;
  name: string;
  badge?: string;
  description: string;
  price: string;
  dailyTurnoverSuggested: string;
  batteryLife: string;
  connectivity: string;
  printer: string;
  keyFeatures: string[];
  popularFor: string;
}

export interface CustomerDebtEntry {
  id: string;
  customerName: string;
  phoneNumber: string;
  itemPurchased: string;
  amount: number;
  date: string;
  isPaid: boolean;
}

export interface LeadEnquiry {
  id: string;
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  location: string;
  serviceRequested: ServiceType;
  additionalNotes?: string;
  posModelPreference?: string;
  loanAmountRequested?: number;
  monthlyTurnover?: string;
  createdAt: string;
  status: 'submitted' | 'contacted';
}
