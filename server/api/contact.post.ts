import { H3Event } from 'h3'
import { sendContactEmail } from '../services/email'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event)
    
    // Validation
    if (!body.name || !body.email || !body.message) {
      throw createError({
        statusCode: 400,
        message: 'Tous les champs sont requis'
      })
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        message: 'Email invalide'
      })
    }

    // Récupération de la clé API SendGrid
    const config = useRuntimeConfig()
    if (!config.sendgridApiKey) {
      throw createError({
        statusCode: 500,
        message: 'Configuration SendGrid manquante'
      })
    }

    await sendContactEmail(body)

    return { success: true }
  } catch (error: any) {
    return {
      success: false,
      error: error.message || 'Une erreur est survenue'
    }
  }
}) 