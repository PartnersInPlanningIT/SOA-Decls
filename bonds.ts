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
  partner: ClientBonds;
  includeClient: boolean;
  includePartner: boolean;
}

export interface ClientBonds {
  provider: string;
  initialAmt: number;
  regularContribAmt: number;
  regularContribPeriod: string;
  currBondAccts: BondAccount[];
  currBondOptions: BondOption[];
  beneficiaries: BondBeneficiary[];
  assetClassAllocations: ProposedAssetClassAllocation;
  riskProfile: string;
  proposedInvestments: ProposedInvestment;
}

export interface ProposedInvestment {
  name: string;
  alloc: number;
}

export interface BondAccount {
  name: string;
  balance: number;
}

export interface BondOption {
  accountName: string;
  investmentName: string;
  balance: number;
  newBalance: number;
}


export interface BondBeneficiary {
  name: string;
  alloc: number;
  restrictionPA: number;
  accessToFunds: string;
}
