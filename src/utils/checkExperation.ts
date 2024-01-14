import type { UniqueIngredient } from "@/@types";

export function isExperationThisWeek(
  uniqueIngredient: UniqueIngredient
): boolean {
  const expirationDate = new Date(uniqueIngredient.expirationDate);
  const currentDate = new Date();

  // Calculate the difference in days between the current date and the expiration date
  const timeDifference = expirationDate.getTime() - currentDate.getTime();

  // Check if the expiration date is within the next 7 days
  const daysUntilExpiration = Math.ceil(timeDifference / (1000 * 3600 * 24));
  if (daysUntilExpiration <= 7) {
    return true;
  } else {
    return false;
  }
}

export function isExperationToday(uniqueIngredient: UniqueIngredient): boolean {
  const expirationDate = new Date(uniqueIngredient.expirationDate);
  const currentDate = new Date();

  // Calculate the difference in days between the current date and the expiration date
  const timeDifference = expirationDate.getTime() - currentDate.getTime();

  // Check if the expiration date is within the next 7 days
  const daysUntilExpiration = Math.ceil(timeDifference / (1000 * 3600 * 24));
  if (daysUntilExpiration == 0) {
    return true;
  } else {
    return false;
  }
}
