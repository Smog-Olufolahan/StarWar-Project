function main() {let url = "https://swapi.dev/api/people/";
fetch(url)
.then(res => {
    if(!res.ok) {
        throw Error("Error")
    }
    return res.json();   
})
.then(data => {
  let arr = data.results;
  console.log(arr)
    let image = ["../images/luke-skywalker.jpeg",
    "./images/cp30.jpeg",
    "./images/Robot.jpeg",
    "./images/darth-vader.jpeg",
    "./images/Princess.jpeg",
    "./images/owen.jpeg",
    "./images/berulars.jpeg",
    "../images/r5d4.jpeg",
    "./images/biggs-darklight.jpeg",
    "./images/obi-wan.jpeg"
];
    let j = 0;
    
    let id;
    let results = arr.map((i, index) => {
        id = index + 1;
        return `
        <div id="#${id}" class="card">
            <img class="img" src=${image[index]}
                alt="${i.name}">
                <div class="details">
                  <p>${i.name}</p>
                  <button id="btn" data-modal-target="#modal${id}">more info...</button>
                </div>
        </div>

        <div class="modal" id="modal${id}">
            <div class="modal-header">
                <div class="title">Biography</div>
                <button data-close-button class="close-button">&times;</button>
            </div>
            <div class="modal-body">
                <div>Name: ${i.name}</div>
                <div>Gender: ${i.gender}</div>
                <div>Height: ${i.height}</div>
            </div>
        </div>
        `;
    }).join('');

    document.querySelector('.cards').innerHTML = results;
    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')
    

    openModalButtons.forEach(button => { 
        button.addEventListener('click', () => {
            console.log(button.dataset.modalTarget)
          const modal = document.querySelector(button.dataset.modalTarget)
          openModal(modal)
        })
      })

      overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
          closeModal(modal)
        })
      })
      
      closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
          const modal = button.closest('.modal')
          closeModal(modal)
        })
      })
      
      function openModal(modal) {
        if (modal == null) return
        modal.classList.add( 'active')
        overlay.classList.add('active')
      }
      
      function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')}
})
.catch(error => {
    console.warn(error);
});
}

main()
