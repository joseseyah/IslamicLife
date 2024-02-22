function fetchEventDetails(eventId) {
    const apiKey = 'WL3FTRISPFKTGGMYAEI4'; // Replace with your actual API key
    const apiUrl = `https://www.eventbriteapi.com/v3/events/${eventId}/`;
  
    const params = {
      'token': apiKey,
    };
  
    const queryString = new URLSearchParams(params).toString();
    const url = `${apiUrl}?${queryString}`;
  
    return fetch(url)
      .then(response => response.json());
  }


  
  // Example usage
  const eventIds = ['747696750107', '747697000857'];
  
  // Fetch details for each event
  eventIds.forEach(eventId => {
    fetchEventDetails(eventId)
      .then(data => {
        console.log(`Details for Event ID ${eventId}:`, data);
      })
      .catch(error => {
        console.error(`Error fetching details for Event ID ${eventId}:`, error);
      });
  });
  
  
  // Function to generate HTML for an event
  function generateEventHtml(event) {
    return `
      <div class="col-md-6 d-flex align-items-stretch">
        <div class="card">
          <div class="card-img">
            <img src="${event.logo ? event.logo.url : 'placeholder.jpg'}" alt="Event Image">
          </div>
          <div class="card-body">
            <h5 class="card-title"><a href="${event.url}" target="_blank">${event.name.text}</a></h5>
            <p class="fst-italic text-center">${new Date(event.start.local).toDateString()} at ${new Date(event.start.local).toLocaleTimeString()}</p>
            <p class="card-text">${event.description.text}</p>
          </div>
        </div>
      </div>
    `;
  }
  
// Function to fetch events for specific event IDs
function fetchAndDisplayEvents() {
    const eventIds = ['747696750107', '747697000857'];
    const eventsContainer = document.getElementById('eventContainer');
    eventsContainer.innerHTML = 'Loading events...';

    // Function to fetch event details for a specific event ID
    const fetchEventDetails = eventId => {
        const apiKey = 'WL3FTRISPFKTGGMYAEI4'; // Replace with your actual API key
        const apiUrl = `https://www.eventbriteapi.com/v3/events/${eventId}/`;

        return fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            },
        })
        .then(response => response.json());
    };

    // Use Promise.all to wait for all events to be fetched
    Promise.all(eventIds.map(eventId => fetchEventDetails(eventId)))
        .then(eventDetails => {
            // Clear existing content in the container
            eventsContainer.innerHTML = '';

            // Loop through eventDetails and create HTML elements
            eventDetails.forEach(event => {
                const eventHtml = generateEventHtml(event);
                eventsContainer.innerHTML += eventHtml;
            });
        })
        .catch(error => {
            console.error('Error fetching event details:', error);
            eventsContainer.innerHTML = 'Error fetching event details. Please try again later.';
        });
}

// Function to generate HTML for an event
function generateEventHtml(event) {
    return `
      <div class="col-md-6 d-flex align-items-stretch">
        <div class="card">
          <div class="card-img">
            <img src="${event.logo ? event.logo.url : 'placeholder.jpg'}" alt="Event Image">
          </div>
          <div class="card-body">
            <h5 class="card-title"><a href="${event.url}" target="_blank">${event.name.text}</a></h5>
            <p class="fst-italic text-center">${new Date(event.start.local).toDateString()} at ${new Date(event.start.local).toLocaleTimeString()}</p>
            <p class="card-text">${event.description.text}</p>
          </div>
        </div>
      </div>
    `;
}

  