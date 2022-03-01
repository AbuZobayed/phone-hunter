const loadPhoneGallery = () => {
    const searchBox = document.getElementById('search-box').value;
    if(searchBox == ''){
        const crrorShow = document.getElementById('error-massages')
        crrorShow.innerText='Not Fount'
    }
  
    else{
        const url =` https://openapi.programming-hero.com/api/phones?search=${searchBox}`
  
        fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data))
  
        const crrorShow = document.getElementById('error-massages')
        crrorShow.innerText='';
    }
  
  };
  
  const displayPhones = (phones) =>{
    let phoneInfo = phones.data.slice(0,20);
    if(phoneInfo.length == 0){
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
                    
                    <button  onclick="phoneDetalis('${phone.slug}')" data-bs-toggle="modal" data-bs-target="#exampleModal"  type="button" class="btn btn-primary ">More Details</button>
                  </div>
                </div>
            `;
            parentCard.appendChild(div);
        };
    };
    
  };
  
  const phoneDetalis = info => {
    const url = `https://openapi.programming-hero.com/api/phone/${info}`
  
    fetch(url)
    .then(res => res.json())
    .then(data => deriveDetails(data.data))
    // console.log(info);
  };
  
  const deriveDetails = details => {
    
    const detailsimg = document.getElementById('details-img');
    detailsimg.innerHTML = `
    <img src="${details.image}" class="card-img-top" alt="...">
    `;
    const detailsInfo = document.getElementById('details-info');
    detailsInfo.innerHTML = `
     <h6>Relese Date: ${details.releaseDate}
    `
  }