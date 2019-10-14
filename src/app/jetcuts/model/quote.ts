export class Quote {
  constructor(
    public id: number,
    public contactCompany: string,
    public contactName: string,
    public contactPhone: string,
    public contactEmail: string,
    public notes: string
  ) {}
}
