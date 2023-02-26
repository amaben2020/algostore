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

    const data = await swell.getAllProducts(gql`
      query getAllProducts {
        products {
          results {
            id
            name
            slug
            price
            currency
            images {
              file {
                url
              }
            }
            options {
              id
              attributeId
              name
              inputType
              active
              required
              variant
              values {
                id
                name
                price
                description
              }
            }
            purchaseOptions {
              standard {
                price
                sale
                salePrice
              }
              subscription {
                plans {
                  id
                  name
                  price
                  billingSchedule {
                    interval
                    intervalCount
                  }
                }
              }
            }
          }
        }
      }
    `);
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
}
