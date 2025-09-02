export interface BondDetails {
  productFee: number;
  feePercentage: number;
  yearlyAmt: number;
}

export interface AssetClassAllocation {
  defensive: { [key: string]: number };
  growth: { [key: string]: number };
}

export interface ProposedAssetClassAllocation {
  current: AssetClassAllocation;
  target: AssetClassAllocation;
  proposed: AssetClassAllocation;
}

export interface SOABonds {
  client: ClientBonds;
  includeClient: boolean;
}

export interface ClientBonds {
  provider: string;
  owner: string;
  initialAmt: number;
  currBonds: BondAccount[];
  assetClassAllocations: ProposedAssetClassAllocation;
  riskProfile: string;
  proposedInvestmentOptions: BondInvestmentOption[];
}

export interface BondAccount {
  name: string;
  balance: number;
  investments: {
    name: string;
    balance: number;
    newBalance: number;
  }[];
}

export interface BondInvestmentOption {
  regularContribAmt: number;
  regularContribPeriod: string;
  investments: {
    name: string;
    balance: number;
  }[];
  beneficiaries: BondBeneficiary[];
}

export interface BondBeneficiary {
  name: string;
  alloc: number;
  restrictionPA: number;
  accessToFunds: string;
}
