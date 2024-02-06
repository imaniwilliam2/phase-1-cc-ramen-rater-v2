// index.js
const ramenMenuDiv = document.getElementById('ramen-menu')
// Callbacks
const handleClick = (ramen) => {
  const ramenName = document.getElementsByClassName('name')[0]
  ramenName.textContent = ramen.name 

  const restaurantName = document.getElementsByClassName('restaurant')[0]
  restaurantName.textContent = ramen.restaurant

  const ramenDisplayImage = document.getElementsByClassName('detail-image')[0]
  ramenDisplayImage.src = ramen.image

  const ramenRatingDisplay = document.getElementById('rating-display')
  ramenRatingDisplay.textContent = ramen.rating

  const ramenCommentDisplay = document.getElementById('comment-display')
  ramenCommentDisplay.textContent = ramen.comment

  
  
};

const addSubmitListener = () => {
  const addRamenForm = document.getElementById('new-ramen')
  addRamenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newNameInput = document.getElementById('new-name').value
    const newRestaurantInput = document.getElementById('new-restaurant').value
    const newImageInput = document.getElementById('new-image').value
    const newRatingInput = document.getElementById('new-rating').value
    const newCommentInput = document.getElementById('new-comment').value

    const newRamen = {
      name: newNameInput,
      restaurant: newRestaurantInput,
      image: newImageInput,
      rating: newRatingInput,
      comment: newCommentInput
    }

    const newRamenImage = document.createElement('img')
    newRamenImage.src = newImageInput
    ramenMenuDiv.appendChild(newRamenImage)

    newRamenImage.addEventListener('click', () => {
      handleClick(newRamen)
    })

    addRamenForm.reset()
  })
}

const displayRamens = () => {
  fetch('http://localhost:3000/ramens')
  .then(res => res.json())
  .then(ramens => {
    ramens.forEach((ramen) => {
      const ramenMenuImages = document.createElement('img')
      ramenMenuImages.src = ramen.image
      ramenMenuDiv.appendChild(ramenMenuImages)

      ramenMenuImages.addEventListener('click', () => {
        handleClick(ramen)
      })

      
    })
    handleClick(ramens[0])
    
  })
};

const main = () => {
  displayRamens()
  addSubmitListener()
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

