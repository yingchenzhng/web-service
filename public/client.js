document.addEventListener('DOMContentLoaded', function() {
  const breedForm = document.getElementById('breedForm');
  breedForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const breedInput = document.getElementById('breedInput');
    const breed = breedInput.value.trim();

    if (breed) {
      try {
        const imageUrl = await fetchCatImage(breed)
        console.log(imageUrl)

        // [[image1], [image2], ]]
        if (imageUrl) {
          displayCatImage(imageUrl.url);
        } else {
          displayNoImageFound();
        }
      } catch (error) {
        console.error('Error fetching cat image:', error);
        displayError();
      }
    } else {
      alert('Please enter a cat breed.');
    }
  });
});

async function fetchCatImage(breed) {
  try {
    const response = await fetch(`/getCatImage?breed=${breed}`);
    const data = await response.json();
    return data[0];
  } catch (error) {
    throw error; 
  }
}

function displayCatImage(imageUrl) {
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = `<img src="${imageUrl}" alt="Cat Image">`;
}

function displayNoImageFound() {
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = '<p>No image found for this breed.</p>';
}

function displayError() {
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = '<p>There was an error fetching the image.</p>';
}
