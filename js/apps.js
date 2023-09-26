const loadUniverseHub= async()=>{
    const url=`https://openapi.programming-hero.com/api/ai/tools`;
    const res=await fetch(url);
    const data=await res.json();
    displayLoadUniverseHub(data.data.tools);
}

const displayLoadUniverseHub=(universe)=>{
    // console.log(universe);

    const phoneContainer=document.getElementById('phone-container');

    universe.forEach(universe1 => {
        console.log(universe1);

        const divContainer=document.createElement('div');
        divContainer.classList.add('col');
        divContainer.innerHTML=`
        <div class="card h-100 shadow-lg rounded-3">
        <img src="${universe1.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="fw-bold ms-2">Features</h5>
            <ol>
            <li>${universe1.features[0]}</li>
            <li>${universe1.features[1]}</li>
            <li>${universe1.features[2]}</li>
            </ol>
        </div>
        <div class="card-footer">
          <h5>${universe1.name}</h5>
        </div>
    </div>
        `
        phoneContainer.appendChild(divContainer);
    });

}
loadUniverseHub();





// const loadUniverseHub=()=>{
//     const url=`https://openapi.programming-hero.com/api/ai/tools`;
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>console.log(data));
// }
// loadUniverseHub();