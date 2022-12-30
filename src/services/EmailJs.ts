import IsendEmail from '../Interfaces/IsendEmail';
import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_APP_SERVICE_ID
const templateId = import.meta.env.VITE_APP_TEMPLATE_ID
const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY

const sendEmail = async ({name, email, message}: IsendEmail) => {

  const templateParams = {
    fromName: name,
    fromEmail: email,
    toName: 'Caio Galvão',
    message,
  };

  await emailjs.send(
    serviceId,
    templateId,
    templateParams,
    publicKey);
}

export default sendEmail;