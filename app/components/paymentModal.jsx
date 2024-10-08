import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function PaymentModal({ isOpen, onClose, onSuccess }) {
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)
    const stripe = await stripePromise
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
    })
    const session = await response.json()
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    })
    if (result.error) {
      console.error(result.error.message)
    } else {
      onSuccess()
    }
    setIsProcessing(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl mb-4">Confirm Payment</h2>
        <p>You are about to pay $3 to upvote this celebrity.</p>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="mr-2 px-4 py-2 border rounded">Cancel</button>
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {isProcessing ? 'Processing...' : 'Pay $3'}
          </button>
        </div>
      </div>
    </div>
  )
}