


export interface SOASuper {
  client: ClientSuper;
  partner: ClientSuper;
  includeClient: boolean;
  includePartner: boolean;
}

export interface ClientSuper {
  currentSuper: SuperAccount[];
  currentInvestmentOptions: SuperInvestmentOption[];
  proposed: SuperProposed;
  allocations: AssetAllocation[];
  blocks: SuperBlock[];
  proposedInvestments: ProposedSuperInvestment[];
  assetClassAllocations: ProposedAssetClassAllocation;
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

export interface ProposedSuperInvestment {
  name: string;
  newBalance: number;
  allocation: number;
}

export interface SuperBlock {
  name: string;
}


export interface AssetAllocation {
  name: string;
  currApproxAlloc: number;
  targetAlloc: number;
  proposedAlloc: number;
}



export interface SuperAccount {
  provider: string;
  type: string;
  name: string;
  balance: number;
}


export interface SuperProposed {
  nccAmt: number;
  salarySacrificeAmt: number;
  summaryPages: string;
  totalProposedBalance: number;
  recommendedPensionPA: number;
  dateOfMeeting: Date;
  proposedInvestments: SuperInvestmentOption[];
}


export interface SuperInvestmentOption {
  name: string;
  currAllocation: number;
  newAllocation: number;
  currBalance: number;
  newBalance: number;
}



export interface SuperDetails {
  totalCurrBalance: number;
  currMainSuper: string;
  product: string;
  productType: string;
  riskProfile: string;
  SOAFee: number;
  adviserServiceFee: number;
  feeSavingSingle: number;
  feeSavingBoth: number;
  minPension: number;
  minPensionPA: number;
  recPensionPF: number;
  initialFee: number;
  feeThroughProduct: number;
  feePaidByYou: number;
  totalFeePaid: number;
  totalOngoingAdviserServiceFee: number;
  buySellSuperFee: number;
  currProductFee: number;
  proposedProductFee: number;
}

