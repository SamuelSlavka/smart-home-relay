export default interface Measurement {
  measuredAt: string | undefined;
  humidity: number;
  temperature: number;
  device: string;
}
