import { GraphQLClient } from "graphql-request";

export class SwellService {
  private client: GraphQLClient;
  constructor() {
    this.client = new GraphQLClient(`${process.env.SWELL_PUBLIC_URL}`, {
      headers: {
        Authorization: `${process.env.NEXT_PUBLIC_SWELL_KEY}`,
      },
    });
  }

  public async getAllProducts(query: string) {
    try {
      const data = await this.client.request(query);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
  public async addToCart(query: string, productId: string, quantity: number) {
    try {
      const data = await this.client.request(query, {
        productId,
        quantity,
      });
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }

  public async getCartItems(query: string) {
    try {
      const data = await this.client.request(query);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
}
