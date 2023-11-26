export class User {
  authenticateResult: boolean | null;
  authToken: string | null;
  accessTokenExpireDate: Date | null;

  constructor(authenticateResult: boolean | null, authToken: string | null, accessTokenExpireDate: Date | null) {
    this.authenticateResult = authenticateResult;
    this.authToken = authToken;
    this.accessTokenExpireDate = accessTokenExpireDate;
  }
}
