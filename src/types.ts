export type ProductCategory = 'belt' | 'modular' | 'roller' | 'special';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  features: string[];
  svgKind: 'flat' | 'incline' | 'modular' | 'roller' | 'chainmod' | 'curve' | 'long';
  typicalApplications?: string;
  loadCapacity?: string;
}

export interface ClientStory {
  id: string;
  name: string;
  sector: string;
  description: string;
  logoUrl: string;
  projectHighlights?: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  typicalConveyors: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface SavingsInputs {
  workers: number;
  hoursPerShift: number;
  shiftsPerDay: number;
  workingDaysPerYear: number;
  labourCostPerHour: number;
}

export interface SavingsResults {
  annualManualCost: number;
  runningCostEst: number;
  annualSavings: number;
  hoursFreed: number;
  workersRedeployed: number;
}
