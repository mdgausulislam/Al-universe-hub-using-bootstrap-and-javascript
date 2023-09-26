// const loadUniverseHub = async () => {
//     const url = `https://openapi.programming-hero.com/api/ai/tools`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayLoadUniverseHub(data.data.tools);
// }
// const displayLoadUniverseHub = (universe) => {
//     const phoneContainer = document.getElementById('phone-container');
//     // universe = universe.slice(0, 6);
//     const showMore = document.getElementById('show-more');
//     const seeMoreButton = document.getElementById('btn-see-more');

//     let cardsDisplayed = 6; 

//     if (universe.length > cardsDisplayed) {
//         universe = universe.slice(0, cardsDisplayed); 
//         showMore.classList.remove('d-none');
//     } else {
//         showMore.classList.add('d-none');
//     }
//     universe.forEach((universe1) => {
//         const divContainer = document.createElement('div');
//         divContainer.classList.add('col');
//         divContainer.innerHTML = `
//         <div class="card h-100 shadow-lg rounded-3">
//         <img src="${universe1.image}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="fw-bold ms-2">Features</h5>
//             <ol>
//             <li>${universe1.features[0]}</li>
//             <li>${universe1.features[1]}</li>
//             <li>${universe1.features[2]}</li>
//             </ol>
//         </div>
//         <div class="card-footer">
//           <h5>${universe1.name}</h5>
//           <div class="d-flex justify-content-between">
//           <div class="d-flex align-items-sm-start"> 
//           <img src="Frame.svg">
//           <p class="ps-2">${universe1.published_in}</p>f</div>
//           <div>
//           <img src="Frame1.svg">
//           </div>
//           </div>
//         </div>
//     </div>
//         `
//         phoneContainer.appendChild(divContainer);
//     });
//     //  showMore.classList.add('d-none');
// }

// document.getElementById('btn-see-more').addEventListener('click', function () {
//     if (cardsDisplayed < universe.length) {
//        cardsDisplayed = universe.length; 
//        displayLoadUniverseHub();
//    }

// })
// loadUniverseHub();




// 2nd part





// let cardsDisplayed = 6; // Define cardsDisplayed outside the function
// let universe;

// const loadUniverseHub = async () => {
//     const url = `https://openapi.programming-hero.com/api/ai/tools`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayLoadUniverseHub(data.data.tools);
// }

// const displayLoadUniverseHub = (universe) => {
//     const phoneContainer = document.getElementById('phone-container');
//     const showMore = document.getElementById('show-more');
//     const seeMoreButton = document.getElementById('btn-see-more');

//     if (universe.length > cardsDisplayed) {
//         universe = universe.slice(0, cardsDisplayed);
//         showMore.classList.remove('d-none');
//     } else {
//         showMore.classList.add('d-none');
//     }

//     universe.forEach((universe1) => {
//         const divContainer = document.createElement('div');
//         divContainer.classList.add('col');
//         divContainer.innerHTML = `
//         <div class="card h-100 shadow-lg rounded-3">
//         <img src="${universe1.image}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="fw-bold ms-2">Features</h5>
//             <ol>
//             <li>${universe1.features[0]}</li>
//             <li>${universe1.features[1]}</li>
//             <li>${universe1.features[2]}</li>
//             </ol>
//         </div>
//         <div class="card-footer">
//           <h5>${universe1.name}</h5>
//           <div class="d-flex justify-content-between">
//           <div class="d-flex align-items-sm-start"> 
//           <img src="Frame.svg">
//           <p class="ps-2">${universe1.published_in}</p>f</div>
//           <div>
//           <img src="Frame1.svg">
//           </div>
//           </div>
//         </div>
//     </div>
//         `
//         phoneContainer.appendChild(divContainer);
//     });
// }

// document.getElementById('btn-see-more').addEventListener('click', function () {
//     console.log("button clicked");
//     const phoneContainer = document.getElementById('phone-container');
//     if (cardsDisplayed < universe.length) {
//         cardsDisplayed = universe.length;
//         phoneContainer.innerHTML = ''; // Clear existing cards
//         displayLoadUniverseHub(universe); // Display all cards
//     }
// });

// loadUniverseHub();




let cardsDisplayed = 6; // Define cardsDisplayed outside the function
let universe; // Define the universe variable here

const loadUniverseHub = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    universe = data.data.tools; // Assign data to the universe variable
    displayLoadUniverseHub(universe);
}

const displayLoadUniverseHub = (universe) => {
    const phoneContainer = document.getElementById('phone-container');
    const showMore = document.getElementById('show-more');
    const seeMoreButton = document.getElementById('btn-see-more');

    if (universe.length > cardsDisplayed) {
        universe = universe.slice(0, cardsDisplayed);
        showMore.classList.remove('d-none');
    } else {
        showMore.classList.add('d-none');
    }

    universe.forEach((universe1) => {
        const divContainer = document.createElement('div');
        divContainer.classList.add('col');
        divContainer.innerHTML = `
        <div class="card h-100 shadow-lg rounded-3">
        <img src="${universe1.image}" class="card-img-top" alt="...">
        <div class="card-body">             <h5 class="fw-bold ms-2">Features</h5>
            <ol>
             <li>${universe1.features[0]}</li>
             <li>${universe1.features[1]}</li>
            <li>${universe1.features[2]}</li>
             </ol>
         </div>
         <div class="card-footer">
           <h5>${universe1.name}</h5>
          <div class="d-flex justify-content-between">
          <div class="d-flex align-items-sm-start"> 
           <img src="Frame.svg">
           <p class="ps-2">${universe1.published_in}</p>f</div>
           <div>
           <img src="Frame1.svg">
           </div>
           </div>
         </div>
     </div>
        `;
        phoneContainer.appendChild(divContainer);
    });
}

document.getElementById('btn-see-more').addEventListener('click', function () {
    console.log("button clicked");
    const phoneContainer = document.getElementById('phone-container');
    if (cardsDisplayed < universe.length) {
        cardsDisplayed = universe.length;
        phoneContainer.innerHTML = ''; // Clear existing cards
        displayLoadUniverseHub(universe); // Display all cards
    }
});

loadUniverseHub();