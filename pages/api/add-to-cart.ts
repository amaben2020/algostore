// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gql } from "graphql-request";
import type { NextApiRequest, NextApiResponse } from "next";
import { SwellService } from "../../src/base/services/swell/swell";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const { productId, qty } = req.body;

    console.log(productId, qty);
    console.log(req.body);

    const swell = new SwellService();

    const QUERY_VAR = {
      productId,
      qty,
    };

    const data = await swell.addToCart(
      gql`
        mutation addToCart($productId: ID, $quantity: Int) {
          addCartItem(input: { productId: $productId, quantity: $quantity }) {
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
      productId,
      qty,
    );
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
}
