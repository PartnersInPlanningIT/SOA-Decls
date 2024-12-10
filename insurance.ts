

export interface SOAInsurance {
  client: ClientInsurance;
  partner: ClientInsurance;
  includeClient: boolean;
  includePartner: boolean;
  combinedSavings: number;
}

export interface ClientInsurance {
  productProvider: string;
  currentCover: InsuranceCoverage[];
  proposedCover: InsuranceCoverage[];
  premiumInSuper: boolean;
}

export interface InsuranceCoverage {
  provider: string;
  insuranceType: string;
  coverageAmount: number;
  annualPremium: number;
  premiumPostRebate: number;
  waitPeriod: number;
  benefitPeriod: string;
  monthlyPremium: number;
}

export interface InsuranceDetails {
  annualPremium: number;
  lifeTPDPremium: number;
  premiumsOutsideSuper: number;
  premiumsOutsideSuperPM: number;
  lifeTPDRebatePremium: number;
  initCommissionPerc: number;
  initCommission: number;
  ongoingCommissionPerc: number;
  ongoingCommission: number;
  premiumsInSuper: number;
  taxRebate: number;
  lifeTPDCover: number;
  traumaCover: number;
  IPCover: number;
  IPWaitPeriod: number;
  IPBenefitPeriod: number;
  replacementOfIncome: number;
  otherPremiums: number;
  otherPremiumsPM: number;
  traumaPremiumPM: number;
  IPPremiumPM: number;
  productProvider: string;
}

