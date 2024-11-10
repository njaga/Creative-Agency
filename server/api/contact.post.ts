import { sendContactEmail } from '../services/email'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validation basique
    if (!body.name || !body.email || !body.message) {
      throw new Error('Tous les champs sont requis')
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw new Error('Email invalide')
    }

    await sendContactEmail(body)

    return { success: true }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }
  }
}) 