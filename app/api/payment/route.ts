import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET as string)

interface Data {
  title: string
  price: number
  image: string
}

export const POST = async (request: NextRequest) => {

  try {
    const data: Data = await request.json()

    const customer = await stripe.customers.create({
      email: "customer@example.com",
      address:{
        country: "US",
        postal_code: "00000",
        line1: "Rue de la paix",
        state: "CA"
      },
      name: "Johan LEPINAY"
    })
    console.log(customer)

    const amountInCents = Math.round(data.price * 100)

    if (amountInCents < 10) {
      throw new Error("Le prix doit être supérieur à 1 centimes")
    }

    const checkOutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer: customer.id,
      mode: "payment",
      success_url: "http://localhost:300/success?token="+customer.id,
      cancel_url: "http://localhost:300/cancel?token="+customer.id,
      line_items: [{
        quantity: 1,
        price_data: {
          product_data: {
            name: data.title
          },
          currency: "EUR",
          unit_amount: amountInCents
        }
      }]
    })
    console.log(checkOutSession.url)
    return NextResponse.json({msg: checkOutSession, url: checkOutSession.url}, {status: 200})
    
  } catch (error: any) {
    console.error("Erreur: ", error)
    return NextResponse.json({error: error.message}, {status: 500})
    
  }
}