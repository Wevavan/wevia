// pages/api/admin/login.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // Récupérer les identifiants depuis les variables d'environnement
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  // Vérifier que les variables d'environnement sont configurées
  if (!adminEmail || !adminPasswordHash) {
    console.error('Variables d\'environnement ADMIN_EMAIL ou ADMIN_PASSWORD_HASH non configurées');
    return res.status(500).json({ message: 'Configuration serveur manquante' });
  }

  // Vérifier l'email
  if (email !== adminEmail) {
    return res.status(401).json({ message: 'Identifiants invalides' });
  }

  // Vérifier le mot de passe avec bcrypt
  const isPasswordValid = await bcrypt.compare(password, adminPasswordHash);

  if (isPasswordValid) {
    const token = jwt.sign(
      { email: adminEmail, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Identifiants invalides' });
  }
}
