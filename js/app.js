const loadPhoneGallery = () => {
    const searchBox = document.getElementById('search-box').value;
    if(searchBox == ''){
        const crrorShow = document.getElementById('error-massages')
        crrorShow.innerText='Not Fount'
    }

    else{
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchBox}`

        fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data))

        const crrorShow = document.getElementById('error-massages')
        crrorShow.innerText='';
    }

};

const displayPhones = (phones) =>{
    let phoneInfo = phones.data.slice(0,20);
    if(phoneInfo.lenght == 0){
        const crrorShow = document.getElementById('error-massages')
        crrorShow.innerText=`Not Fount`
    }

    else{
        const parentCard = document.getElementById('card-container');
        parentCard.textContent = '';
        for(const phone of phoneInfo){
        
            const div = document.createElement('div');
           
            div.innerHTML = `
            <div class="col">
                  <div class="card h-100">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Phone Name:${phone.phone_name}</h5>
                      <p class="card-text">Brand:${phone.brand}</p>
                    </div>
                    
                    <button  onclick="phoneDetalis('${phone.slug}')"  type="button" class="btn btn-primary ">More Details</button>
                      
    
                    
                  </div>
                </div>
            `;
            parentCard.appendChild(div);
        };
    }
    
}

const phoneDetalis = info => {
    console.log(info);
}

