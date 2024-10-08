import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const CheckoutForm = ({ onSuccess, onClose }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsProcessing(true)

    if (!stripe || !elements) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (error) {
      setErrorMessage(error.message)
      setIsProcessing(false)
    } else {
      // Send paymentMethod.id to your server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      })

      const result = await response.json()

      if (result.error) {
        setErrorMessage(result.error)
      } else {
        onSuccess()
      }
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
      <div className="mt-4 flex justify-end">
        <button type="button" onClick={onClose} className="mr-2 px-4 py-2 border rounded">
          Cancel
        </button>
        <button
          type="submit"
          disabled={isProcessing || !stripe}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          {isProcessing ? 'Processing...' : 'Pay $3'}
        </button>
      </div>
    </form>
  )
}

export default function PaymentModal({ isOpen, onClose, onSuccess }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl mb-4">Confirm Payment</h2>
        <p className="mb-4">You are about to pay $3 to upvote this celebrity.</p>
        <Elements stripe={stripePromise}>
          <CheckoutForm onSuccess={onSuccess} onClose={onClose} />
        </Elements>
      </div>
    </div>
  )
}