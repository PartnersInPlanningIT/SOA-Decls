import * as ins from "./insurance";
import * as bonds from "./bonds";
import * as superann from "./super";
import * as inv from "./investments";

export interface SOAState {
  id?: number;
  isUpdated: boolean; //for saving history  default value should be false
  clientInfo: ClientInfo;
  fees: SOAFees;
  insurance: ins.SOAInsurance;
  investments: inv.SOAInvestments;
  superann: superann.SOASuper;
  bonds: bonds.SOABonds;
  meetingDate: string;
  adviser: string;
  appendices: string[];
  summaryPage: string;
}

export interface SOAFees {
  soaFee: number;
  client: ClientFees;
  partner: ClientFees;
  computed?: {
    super: {
      client: superann.SuperDetails;
      partner: superann.SuperDetails;
    };
    ios: inv.InvestmentDetails;
    bonds: bonds.BondDetails;
    ins: ins.InsuranceDetails;
  };
}

export interface ClientFees {
  ongoingAdvice: number;
  currentSuper: number;
  proposedSuper: number;
  buySellSuper: number;
  brokerage: number;
  adviserPlacement: number;
  managedFund: number;
  buySellInvestment: number;
  bondAdmin: number;
  bondInvestment: number;
}

export interface BaseClientInfo {
  crmId: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  suburb: string;
  postcode: string;
  state: string;
  employmentType: string;
  income: string;
  dateOfBirth: string;
  occupation: string;
  employer: string;
  health: string;
  smokingStatus: string;
  maritalStatus: string;
  title: string;
  debt: string;
  superProvider: string;
  superType: string;
  riskProfile: string;
  googleDrive: string;
  spInfo: SPInfo;
}

export interface SPInfo {
  includeCentrelink: boolean;
  costRRP: number;
  costDiscounted: number;
  discountPartner: string;
}

export interface ClientInfo {
  client: BaseClientInfo;
  partnerPresent: boolean;
  partner: BaseClientInfo;
}
