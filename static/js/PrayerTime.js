document.addEventListener("DOMContentLoaded", function () {
    const prayerTimesContainer = document.getElementById("prayerTimes");

    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'YOUR_API_KEY';
    const city = 'Manchester';

    // Fetch prayer times
    fetch(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=UK&method=2`)
        .then((response) => response.json())
        .then((data) => {
            const prayerTimes = data.data.timings;

            // Create an HTML table to display the prayer times
            
            const table = document.createElement('table');
            table.innerHTML = `
                <tr>
                    <th>Prayer</th>
                    <th>Time</th>
                </tr>
                <tr>
                    <td>Fajr</td>
                    <td>${prayerTimes.Fajr}</td>
                </tr>
                <tr>
                    <td>Dhuhr</td>
                    <td>${prayerTimes.Dhuhr}</td>
                </tr>
                <tr>
                    <td>Asr</td>
                    <td>${prayerTimes.Asr}</td>
                </tr>
                <tr>
                    <td>Maghrib</td>
                    <td>${prayerTimes.Maghrib}</td>
                </tr>
                <tr>
                    <td>Isha</td>
                    <td>${prayerTimes.Isha}</td>
                </tr>
            `;

            prayerTimesContainer.appendChild(table);
        })
        .catch((error) => {
            console.error('Error fetching prayer times:', error);
            prayerTimesContainer.innerText = 'Failed to fetch prayer times.';
        });
});
