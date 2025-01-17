```javascript
// pages/api/users.js
export default async function handler(req, res) {
  // Some logic to fetch users
  const users = await fetchUsers();

  if (req.method === 'GET') {
    return res.status(200).json(users);
  } else {
    return res.status(405).end(); // Method Not Allowed
  }
}
```
This API route fetches a list of users and responds with a JSON array if the request method is GET. However, if you make a POST or any other request type, it responds with a 405 status code, which is correct but doesn't provide additional details.  This may not be a problem during development but could lead to issues in production or in client applications expecting more helpful error messages. 