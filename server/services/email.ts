import sgMail from '@sendgrid/mail'

// Configuration de la clé API SendGrid
sgMail.setApiKey('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')

export const sendContactEmail = async (data: {
  name: string
  email: string
  message: string
}) => {
  const msg = {
    to: 'contact@aramebusiness.com',
    from: 'contact@ndiagandiaye.com', // email vérifié
    subject: `Nouveau message de ${data.name}`,
    text: `
      Nom: ${data.name}
      Email: ${data.email}
      
      Message:
      ${data.message}
    `,
    html: `
      <h3>Nouveau message de contact</h3>
      <p><strong>Nom:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <br>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `
  }

  try {
    await sgMail.send(msg)
    return { success: true }
  } catch (error) {
    console.error('SendGrid Error:', error)
    throw new Error('Erreur lors de l\'envoi de l\'email')
  }
}
