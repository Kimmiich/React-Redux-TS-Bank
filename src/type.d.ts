export type BankUser = {
  user: string;
  balance: number | null;
};

export type Action = {
  type: string;
  balance: number;
};
