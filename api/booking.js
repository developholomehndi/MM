
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  try {
    const formData = req.body;

    const response = await fetch(
      `https://formsubmit.co/ajax/${process.env.FORMSUBMIT_EMAIL}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      }
    );

    const result = await response.json();

    return res.status(response.status).json(result);

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Booking submission failed'
    });
  }
}
