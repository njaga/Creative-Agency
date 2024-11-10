import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configuration SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Route pour l'envoi d'email de contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Tous les champs sont requis'
      });
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Email invalide'
      });
    }

    const msg = {
      to: process.env.CONTACT_EMAIL,
      from: process.env.SENDER_EMAIL,
      subject: `Nouveau message de ${name}`,
      text: `
        Nom: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>Nouveau message de contact</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    await sgMail.send(msg);
    res.json({ success: true });
  } catch (error) {
    console.error('SendGrid Error:', error);
    res.status(500).json({
      success: false,
      error: 'Erreur lors de l\'envoi de l\'email'
    });
  }
});

// Route pour l'envoi de devis
app.post('/api/devis', async (req, res) => {
  try {
    const { name, email, phone, projectType, budget, description } = req.body;

    // Validation
    if (!name || !email || !phone || !projectType || !budget || !description) {
      return res.status(400).json({
        success: false,
        error: 'Tous les champs sont requis'
      });
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Email invalide'
      });
    }

    // Validation téléphone (format international)
    const phoneRegex = /^\+?[0-9\s-]{8,}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        error: 'Numéro de téléphone invalide'
      });
    }

    const getBudgetRange = (budgetCode) => {
      const ranges = {
        small: '< 3 000 000 FCFA',
        medium: '3 000 000 - 10 000 000 FCFA',
        large: '10 000 000 - 30 000 000 FCFA',
        xlarge: '> 30 000 000 FCFA'
      };
      return ranges[budgetCode] || budgetCode;
    };

    const getProjectType = (type) => {
      const types = {
        materiel: 'Matériel informatique',
        logiciel: 'Logiciel sur mesure',
        maintenance: 'Maintenance',
        autre: 'Autre'
      };
      return types[type] || type;
    };

    const msg = {
      to: process.env.CONTACT_EMAIL,
      from: process.env.SENDER_EMAIL,
      subject: `Nouvelle demande de devis de ${name}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Téléphone: ${phone}
        
        Type de projet: ${getProjectType(projectType)}
        Budget estimé: ${getBudgetRange(budget)}
        
        Description du projet:
        ${description}
      `,
      html: `
        <h3>Nouvelle demande de devis</h3>
        <div style="margin-bottom: 20px;">
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${phone}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <p><strong>Type de projet:</strong> ${getProjectType(projectType)}</p>
          <p><strong>Budget estimé:</strong> ${getBudgetRange(budget)}</p>
        </div>
        
        <div>
          <p><strong>Description du projet:</strong></p>
          <p style="white-space: pre-wrap;">${description.replace(/\n/g, '<br>')}</p>
        </div>
      `
    };

    await sgMail.send(msg);
    res.json({ success: true });
  } catch (error) {
    console.error('SendGrid Error:', error);
    res.status(500).json({
      success: false,
      error: 'Erreur lors de l\'envoi de l\'email'
    });
  }
});

// Route de test
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
