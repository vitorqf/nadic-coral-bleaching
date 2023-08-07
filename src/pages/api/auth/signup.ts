import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';

const saltRounds = 10;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;

  switch (method) {
    case 'POST': {
      const { fullname, email, password, notifications_agreement } = req.body;

      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser) {
        return res.status(422).json({
          error: 'Esse e-mail já está em uso. Tente outro.',
        });
      }

      if (!fullname || !email || !password) {
        return res
          .status(422)
          .json({ error: 'Um dos campos necessários está vazio.' });
      }

      if (password.length < 6) {
        return res.status(422).json({
          error: 'A senha deve ter pelo menos 6 caracteres.',
        });
      }

      if (!email.includes('@')) {
        return res.status(422).json({
          error: 'O e-mail informado não é válido.',
        });
      }

      const user = await prisma.user.create({
        data: {
          name: fullname,
          email,
          password: bcrypt.hashSync(password, saltRounds),
          notificationsAgreement: notifications_agreement,
        },
      });

      return res.status(201).json(user);
    }
  }
}

export default handler;
