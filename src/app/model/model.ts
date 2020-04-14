import { DateFloatingFilterComp } from 'ag-grid-community/dist/lib/filter/floatingFilter';

export class User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  profilePic: string;
  token: string;
}


export class Validation {
  key: string;
  message: string;
}

export class MoneyLionUser {
  name: any
  email: string
  clientId: string
}

export class LiquidationBatch {
  name: string
  createdOn: Date
  id: string
}

export class SearchResult {

  userId: string
  email: string
  dwAccountId: string
  dwAccountNo: string
  dwUserId: string
  firstName: string
  lastName: string

  /*
  ddd990ab-ae29-42f0-b210-05d66bc00bb6.1526536574314

  [{"userId":"5a92fa710c46be0001157d50","email":"23zzzewk_g5moc@moneylion.com",
  "dwAccountId":"ddd990ab-ae29-42f0-b210-05d66bc00bb6.1526536574314",
  "dwAccountNo":"DWBA000696","dwUserId":"5a92fa710c46be0001157d50","firstName":"wilford","lastName":"groen"}]
  */
}

export class DrivewealthUser {

  id: string
  userId: string
  accounts: DriveWealthAccount[]
  riskTolerances: DriveWealthRiskTolerance[]
  coreAccount: DriveWealthAccount
  onboardingStatus: string
  depositStatus: string
  driveWealthUserId: string
  riskTolerance: string
  userDefinedRiskTolerances: string
  fullRebalance: boolean;
}

export class DriveWealthWithdrawal {
  id: string
  statuses: any
  eventType: string
  amount: number
  status: string
  createdOn: Date
  type: string
  transactionIdStatus: string
  divestRequestId: string
  withdrawalRequestId: string
  transactionId: string
  description: string
  account: DriveWealthAccount;

}

export class DriveWealthDeposit {
  id: string
  status: string
  depositId: string
  userId: string
  driveWealthAccountId: string
  amount: number
  transactionId: string
  origin: string
  originRefId: string

}

export class DriveWealthInvestmentAccountTransaction {

  accountAmount: number;
  accountBalance: number;
  accountType: number;
  finTranTypeID: string;
  comment: string;
}

export class DriveWealthAccount {

  id: string;
  accountID: string;
  accountNo: string;
  withdrawals: DriveWealthWithdrawal[];
  hasPendingWithdrawal: boolean;
  cash: any;
  equity: any;
  accountStatus: any;
  riskTolerances: any[];
  internalType: string;


}

export class DriveWealthCashTransfer {
  amount: number;
  message: string;
  transactionid: string;
  program: string;
  eventType: any;
  statusHistories: any;
}

export class DriveWealthRiskTolerance {
  driveWealthPortfolioId: string;
  driveWealthPortfolioName: string;
  type: string;

}

export class DriveWealthAccountSnapshot {
  cash: any;
  equity: any;
  createdOn: any;
}

export class Event { }

export class BulkDataItem {
  index: number;
  payload: any;
}

export class DriveWealthFundDisplayCategoryType {
  displayText: string;
  id: string;
  imageUrl: string;
  edit: boolean;
}

export class DriveWealthPortfolio {
  id: string;
  portfolioId: string;
  name: string;
  description: string;
}

export class DriveWealthFund {
  id: string;
  createdOn: Date;
  fundId: string;
  name: string;
  type: string;
  clientFundId: string;
  description: string;
  displayTitle: string;
  displaySubtitle: string;
  displayDescription: string;
  displayCharacteristics: any[];
  imageUrl: string;
  displaySummary: string;
}
