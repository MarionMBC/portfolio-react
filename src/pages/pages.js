import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

export const sendEmail = functions.https.onCall(async (data, context) => {
  const { name, email, message } = data;

  const mailOptions = {
    from: "noreply@example.com",
    to: "destinatario@example.com",
    subject: "Nuevo mensaje de contacto",
    text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`,
  };

  try {
    await admin.firestore().collection("emails").add(mailOptions);
    return { success: true };
  } catch (error) {
    return { error: "Error al enviar el correo." };
  }
});


