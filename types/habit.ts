export interface Habit {
  id: string;
  name: string;
  icon: string;
  frequency: 'Everyday' | 'Weekly' | 'Monthly';
  totalDays: number;
  status: 'ongoing' | 'suspended';
  checkIns: {
    date: string;
    completed: boolean;
  }[];
}

export interface Stats {
  thisWeek: number;
  thisMonth: number;
  total: number;
  streak: number;
}

