export class Settings {
  createdAt:    string;
  kmPrice:      number;

  constructor() {}

  public static build( kmPrice: number ) {
    const settings = new Settings();
    settings.kmPrice = kmPrice;
    settings.createdAt = new Date().toISOString();
    return settings;
  }
}
