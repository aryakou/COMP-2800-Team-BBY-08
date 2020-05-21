import stripeAPI from "stripe";
import handler from "./libs/handler-lib";
import { costCalculator } from "./libs/billing-lib";

export const main = handler(async (event, context) => {
  const { storage, source } = JSON.parse(event.body);
  const amount = costCalculator(storage);
  const description = "Scratch charge";

  // Load our secret key from the  environment variables
  const stripe = stripeAPI(process.env.stripeSecretKey);

  await stripe.charges.create({
    source,
    amount,
    description,
    currency: "usd"
  });
  return { status: true };
});