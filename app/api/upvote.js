import prisma from '../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { celebrityId } = req.body

    try {
      const updatedCelebrity = await prisma.celebrity.update({
        where: { id: parseInt(celebrityId) },
        data: { votes: { increment: 1 } },
      })
      res.status(200).json(updatedCelebrity)
    } catch (error) {
      res.status(500).json({ error: 'Failed to upvote celebrity' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}