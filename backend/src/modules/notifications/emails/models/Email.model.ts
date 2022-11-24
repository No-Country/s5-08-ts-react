export class Email {
  constructor(
    readonly from: string,
    readonly toEmail: string,
    readonly subject: string,
    readonly body: string,
  ) {}
}
