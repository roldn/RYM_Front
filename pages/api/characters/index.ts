// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import character from '@/dbmodels/character'
import { dbConnect } from '@/utils/mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = string

dbConnect()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const characters = await character.find()
  console.log(characters)
  res.status(200).json("Characters")
}
