

export interface ClientInvestments {
  proposedShareProv: string;
  proposedMngdFundProv: string;
  totalProposedShareBalance: number;
  totalProposedMngdFundBalance: number;
  currShareAccts: Account[];
  currMngdFundAccts: Account[];
  currShareInvOpts: InvestmentOption[];
  currMngdFundInvOpts: InvestmentOption[];
  riskProfile: string;
  assetClassAllocations: AssetClassAllocation;
}

export interface InvestmentDetails {
  totalAdviserPlacementFee: number;
  brokerageFee: number;
  buySellFee: number;
  totalShareTradesFee: number;
  mngdFundFee: number;
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



export interface SOAInvestments {
  client: ClientInvestments;
  partner: ClientInvestments;
  includeClient: boolean;
  includePartner: boolean;
}

export interface Account {
  name: string;
  balance: number;
}

export interface InvestmentOption {
  name: string;
  investmentName: string;
  balance: number;
  proposedAdjust: number;
}
