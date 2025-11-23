import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Use environment variable for the webhook URL
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('Discord webhook URL is not set in environment variables');
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }

  const payload = {
    embeds: [{
      title: 'New Contact Form Submission',
      fields: [
        { name: 'Name', value: name },
        { name: 'Email', value: email },
        { name: 'Message', value: message }
      ],
      color: 0x00ff00 // Green color
    }]
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'Message sent successfully' });
    } else {
      throw new Error('Failed to send message to Discord');
    }
  } catch (error) {
    console.error('Error sending message to Discord:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}