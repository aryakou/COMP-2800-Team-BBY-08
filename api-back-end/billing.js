import stripeAPI from "stripe";
import handler from "./libs/handler-lib";
import { costCalculator } from "./libs/billing-lib";

export const main = handler(async (event, context) => {
  // We get storage and source from the request body. Storage = the amount of notes
  // and source is Stripe token for card to be charged.
  const { storage, source } = JSON.parse(event.body);
  // We can create a conditional to calculate how much user is to be charged.
  const amount = costCalculator(storage);
  const description = "Log charge";

  // A new object is created using the Secret key. We use this as an environment variable,
  // because do not want to put our secret keys in the code and commit that to Git.
  const stripe = stripeAPI(process.env.stripeSecretKey);

  // This method charges the user and responds to the request, pending it is successful.
  await stripe.charges.create({
    source,
    amount,
    description,
    currency: "usd"
  });
  return { status: true };
});