export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  try {
    const data = req.body || {};

    const formData = new URLSearchParams();

    Object.keys(data).forEach(function (key) {
      const value = data[key];

      if (Array.isArray(value)) {
        value.forEach(function (item) {
          formData.append(key, item);
        });
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    const response = await fetch(
      `https://formsubmit.co/ajax/${process.env.FORMSUBMIT_EMAIL}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        body: formData.toString()
      }
    );

    const result = await response.json();

    return res.status(response.status).json(result);

    } catch (error) {
    console.error('BOOKING ERROR:', error);

    return res.status(500).json({
      success: false,
      error: 'Booking submission failed'
    });
  }
}
