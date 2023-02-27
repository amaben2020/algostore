// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gql } from "graphql-request";
import type { NextApiRequest, NextApiResponse } from "next";
import { SwellService } from "../../src/base/services/swell/swell";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const swell = new SwellService();

    const data = await swell.getCartItems(
      gql`
        query getCart {
          cart {
            items {
              id
              quantity
              price
              product {
                id
                name
                currency
              }
            }
          }
        }
      `,
    );
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
}
