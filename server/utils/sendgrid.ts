import sgMail from '@sendgrid/mail'

// Configuration de l'API SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export const sendEmail = async (emailData: any) => {
  try {
    await sgMail.send(emailData)
  } catch (error: any) {
    console.error('SendGrid Error:', error)
    if (error.response) {
      console.error('SendGrid Error Body:', error.response.body)
    }
    throw error
  }
}
