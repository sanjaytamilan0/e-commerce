import { FCM } from 'firebase-admin';

// Initialize FCM with your Firebase Cloud Messaging Server Key
const fcm = new FCM('YOUR_FCM_SERVER_KEY');

export const pushNotification = async (req, res) => {
  try {
    const { token, title, body, data } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Token is required.' });
    }

    const message = {
      notification: {
        title,
        body,
      },
      data, // Optional custom data
    };

    const response = await fcm.send(message, token);

    res.status(200).json({ message: 'Push notification sent successfully', response });
  } catch (error) {
    console.error('Error sending push notification:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};