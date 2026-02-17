exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Support both local (.env) and production (Netlify) environment variable names
  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN_SPROUT || process.env.AIRTABLE_TOKEN;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID_SPROUT || process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_CONTACTS_TABLE = process.env.AIRTABLE_CONTACTS_TABLE || 'Contact Messages';

  try {
    const contactData = JSON.parse(event.body);

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_CONTACTS_TABLE}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fields: contactData
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to send message');
    }

    const result = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ success: true, message: result })
    };

  } catch (error) {
    console.error('Error submitting contact:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send message', message: error.message })
    };
  }
};
