/**
 * @desc format a float number to a single decimal
 * @param metric the float number to format
 * @returns float number
 */
export function FormatDecimalNumber(metric: number): number {
  return parseFloat(metric.toString().match(/^-?\d+(?:\.\d{0,1})?/)?.[0] || '');
}

/**
 * @desc format a float number to celcius or farenheit
 * @param metric the float number to format
 * @param convert the boolean validate format
 * @returns integer
 */
export function FormatMetricConvert(metric: number, convert: boolean = true): number {
  return convert ? Math.floor(metric) : Math.floor(metric * 1.609344);
}

/**
 * @desc format a float number to kilometers or miles
 * @param metric the float number to format
 * @param convert the bollean validate format
 * @returns float number
 */
export function FormartToKilometer(metric: number, convert?: boolean): number {
  return convert ? Math.floor(metric * 1.609344) : FormatDecimalNumber(metric * 1.609344);
}
