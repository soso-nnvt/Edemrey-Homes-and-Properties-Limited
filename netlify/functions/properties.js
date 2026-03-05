export const handler = async (event) => {
  const { id } = event.queryStringParameters || {};
  const WP_AUTH = process.env.WP_AUTH;
  
  if (!WP_AUTH) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'WP_AUTH environment variable is not set' })
    };
  }

  const baseUrl = 'http://demorealestate.iceiy.com/wp-json/wp/v2/property';
  const url = id ? `${baseUrl}/${id}?_embed` : `${baseUrl}?_embed`;

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Basic ${WP_AUTH}`
      }
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `WordPress API returned ${response.status}` })
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
