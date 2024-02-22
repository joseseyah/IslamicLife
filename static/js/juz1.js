function fetchAndDisplayQuranicData() {
    const quranDataElement = document.getElementById('quran');

    // Fetch the JSON data from the external file
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranacademy/juzs/1.json')
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            // Process and format the data
            let formattedData = '';
            data.juzs.forEach(item => {
              if (item.verse === 1) {
                formattedData += '<br> Chapter   ' + item.chapter + '<br>';
            }
                //formattedData += `${item.chapter}: ${item.verse}. ${item.text}<br>`;
                formattedData += `${item.text} (${item.verse})<br>`;
                formattedData += `-------------------------------<br>`;

            });

            // Display the formatted data on the website
            quranDataElement.innerHTML = formattedData;
        })
        .catch(error => console.error('Error:', error)); // Handle errors
}

fetchAndDisplayQuranicData();