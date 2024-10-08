import prisma from '../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const celebrities = await prisma.celebrity.findMany({
        orderBy: { votes: 'desc' },
      })
      res.status(200).json(celebrities)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch celebrities' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}