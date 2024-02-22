const accessToken = 'WL3FTRISPFKTGGMYAEI4'; // Replace with your actual access token

const apiUrl = 'https://www.eventbriteapi.com/v3/users/me/';

fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})
  .then(response => response.json())
  .then(data => {
    console.log('User details:', data);
  })
  .catch(error => {
    console.error('Error fetching user details:', error);
  });
