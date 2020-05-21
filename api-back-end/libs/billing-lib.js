export function costCalculator(storage) {
  // if user wants to store less than 10 notes. We will charge them $4 per note. For 11 to 100 that
  // becomes $2 and anymore than 100 becomes $1.
  const rate = storage <= 10 ?
    4 :
    storage <= 100 ?
    2 :
    1;
  // Stripe wants it in pennies so we multiple by 100.
  return rate * storage * 100;
}

// We add another block to the yml file and add the billing handler as billing.main and we add to events. The
// path is billing, method is post, and the others remain defaulted.