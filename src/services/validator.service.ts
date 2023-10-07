function validateMeasurement(measurement: any): boolean {
  console.log('validating from device: ' + measurement.device);

  if (
    measurement &&
    measurement.device !== undefined &&
    measurement.humidity !== undefined &&
    measurement.temperature !== undefined
  ) {
    return true;
  }
  return false;
}

export { validateMeasurement };
