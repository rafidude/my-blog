import { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql'
import db from '../../lib/db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'GET') {
        const posts = await db.query('SELECT * from posts')
        await db.end()
        res.status(200).json(posts)
    } else if (req.method == 'POST') {
        let body: { title: string; content: string } = req.body

        const result = await db.query<mysql.OkPacket>(
            'INSERT INTO posts (title, content) VALUES (?, ?)',
            [body.title, body.content]
        )

        await db.end()
        res.statusCode = 201
        res.json({
            id: result.insertId,
            title: body.title,
            content: body.content,
        })
    }
}
