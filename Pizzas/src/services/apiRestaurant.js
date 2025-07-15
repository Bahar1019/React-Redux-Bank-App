const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

// Fetch the menu data
export async function getMenu() {
  try {
    const res = await fetch(`${API_URL}/menu`);

    if (!res.ok) throw new Error(`Failed getting menu. Status: ${res.status}`);

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching menu:', error.message); // Log detailed error
    throw new Error(error.message || 'Failed getting menu.');
  }
}

// export async function getOrder(id) {
//   const res = await fetch(`${API_URL}/order/${id}`);
//   if (!res.ok) throw new Error(`Couldn't find order #${id}`);

//   const { data } = await res.json();
//   return data;
// }

// Fetch a specific order by ID
export async function getOrder(id) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`);

    if (!res.ok)
      throw new Error(`Couldn't find order #${id}. Status: ${res.status}`);

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching order #${id}:`, error.message); // Log detailed error
    throw new Error(error.message || `Couldn't find order #${id}.`);
  }
}

// Create a new order
export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok)
      throw new Error(`Failed creating order. Status: ${res.status}`);

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error('Error creating order:', error.message); // Log detailed error
    throw new Error(error.message || 'Failed creating your order.');
  }
}

// Update an existing order by ID
export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok)
      throw new Error(`Failed updating order #${id}. Status: ${res.status}`);

    // Optionally, return the updated data if the API responds with it
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(`Error updating order #${id}:`, error.message); // Log detailed error
    throw new Error(error.message || `Failed updating your order.`);
  }
}
