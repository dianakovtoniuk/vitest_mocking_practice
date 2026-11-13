import { ValidationError } from './errors';

export function validateNotEmpty(
  text: string | null | undefined,
  errorMessage?: string
): asserts text is string {
  if (!text || text.trim().length === 0) {
    throw new ValidationError(errorMessage);
  }
}
