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
    <img src="${universe1.image}" class="card-img-top p-3 rounded-5" alt="...">
    <div class="card-body">
        <h5 class="fw-bold ms-2"> Features </h5>
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
                <p class="ps-2">${universe1.published_in}</p>
            </div>

            <div>
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="Frame1.svg">
        </button>
            </div>
        </div>
    </div>
</div> 
`;
        phoneContainer.appendChild(divContainer);
    });
}

document.getElementById('btn-see-more').addEventListener('click', function () {
    const phoneContainer = document.getElementById('phone-container');
    if (cardsDisplayed < universe.length) {
        cardsDisplayed = universe.length;
        phoneContainer.innerHTML = ''; // Clear existing cards
        displayLoadUniverseHub(universe); // Display all cards
    }
});


const loadDetails = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/01`;
    const res = await fetch(url);
    const data = await res.json();
    displayLoadDetails(data.data);
}

const displayLoadDetails = universe => {
    console.log(universe);

    const detailsModal=document.getElementById('details-modal');
    detailsModal.innerHTML=` 
    <h5>${universe.description}</h5>
    <div class="d-flex justify-content-between pt-3">
        <div>
        <p style="width: 50.35px; height: 50px;" class="text-success text-center fw-bold">${universe.pricing[0].price} <br> ${universe.pricing[0].plan} </p>
        </div>
        <div>
        <p style="width: 50px;" class="text-warning text-center fw-bold">${universe.pricing[1].price}<br>${universe.pricing[1].plan}</p>
        </div>
        <div>
        <p style="width: 80px;" class="text-danger text-center fw-bold">${universe.pricing[2].price} <br> ${universe.pricing[2].plan}</p>
        </div> 
    </div>

    <div class="d-flex">
        <div>
        <h5>Features</h5>
        <ol>
            <li>${universe.features[1].feature_name}</li> 
            <li>${universe.features[2].feature_name}</li> 
            <li>${universe.features[3].feature_name}</li>
        </ol>
        </div>
        <div>
        <h5>integrations</h5>
        <ol>
            <li>${universe.integrations[0]}</li> 
            <li>${universe.integrations[1]}</li> 
            <li>${universe.integrations[2]}</li>
        </ol>
        </div>
    </div> `;


    const detailsModal1=document.getElementById('details-modal1');
    detailsModal1.innerHTML=`
    <img src="${universe.image_link[0]}" class="card-img-top p-3 rounded-5" alt="...">
    <h5 class="text center p-3">${universe.input_output_examples[0].input}</h5>
    <p class="p-3">${universe.input_output_examples[0].output} </p>
    `;
}
loadDetails();


loadUniverseHub();