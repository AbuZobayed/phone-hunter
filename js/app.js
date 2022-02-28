const loadPhoneGallery = () => {
    const searchBox = document.getElementById('search-box').value;
    if(searchBox == ''){
        const crrorShow = document.getElementById('errormasg')
        crrorShow.innerText='Not Fount'
    }

    else{
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchBox}`

        fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
    }

    
};

const displayPhones = (phones) =>{
    if(phones.lenght == 0){
         const errormag =document.getElementById('errormasg2');
         errormag.innerText = ' phone is not available'
    }
    const parentCard = document.getElementById('card-container');
    parentCard.textContent = ''
    for(const phone of phones){
        
        const div = document.createElement('div');
       
        div.innerHTML = `
        <div class="col">
              <div class="card h-100">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Phone Name:${phone.phone_name}</h5>
                  <p class="card-text">Brand:${phone.brand}</p>
                </div>
                
                <button type="button" class="btn btn-primary ">More Details</button>
                  

                
              </div>
            </div>
        `;
        parentCard.appendChild(div);
    };
    
}
