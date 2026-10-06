export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  try {
    const response = await fetch(
      process.env.DRIVE_UPLOAD_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: typeof req.body === 'string'
          ? req.body
          : JSON.stringify(req.body)
      }
    );

    const text = await response.text();

    return res.status(response.status).send(text);

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Image upload failed'
    });
  }
}
