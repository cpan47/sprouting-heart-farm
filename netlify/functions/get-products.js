exports.handler = async function(event, context) {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_PRODUCTS_TABLE = process.env.AIRTABLE_PRODUCTS_TABLE || 'Products';

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_PRODUCTS_TABLE}?filterByFormula={Available}=1`,
      {
        headers: {
          'Authorization': `Bearer ${AIRTABLE_TOKEN}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Airtable API error: ${response.status}`);
    }

    const data = await response.json();

    // Transform Airtable records to product format
    const products = data.records.map(record => {
      const productId = record.fields['Product ID'] || record.id;

      return {
        id: String(productId),
        name: record.fields['Product Name'],
        price: record.fields['Price'],
        unit: record.fields['Unit'],
        emoji: record.fields['Emoji'] || '🥬',
        image: record.fields['Image']?.[0]?.url || null,
        description: record.fields['Description'],
        season: record.fields['Season'] || 'All Season',
        organic: true
      };
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ products })
    };

  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch products', message: error.message })
    };
  }
};
