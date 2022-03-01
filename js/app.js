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
    <div class="d-block mx-auto"> <img src="${details.image}" class="card-img-top" alt="..."> </div>
    `;
    const detailsInfo = document.getElementById('details-info');
    detailsInfo.innerHTML = `
    <p><span class="fw-bold">Release Date:</span> ${details.releaseDate}</P>
    <h6 class="fw-bold">Main Features</h6>
    <p><span class="fw-bold">ChipSet:</span> <small>${details.mainFeatures.chipSet}</small></P>
    <p><span class="fw-bold">Display Size:</span> <small>${details.mainFeatures.displaySize}</small></P>
    <p><span class="fw-bold">Memory:</span> <small>${details.mainFeatures.memory}</small></P>
    <p><span class="fw-bold">Sensor:</span> <small>${details.mainFeatures.sensors}
    <h6 class="fw-bold">Others</h6>
    <p><span class="fw-bold">Bluetooth:</span> <small>${details.others.Bluetooth}
    <p><span class="fw-bold">Bluetooth:</span> <small>${details.others.GPS}
    <p><span class="fw-bold">Bluetooth:</span> <small>${details.others.NFC}
    <p><span class="fw-bold">Bluetooth:</span> <small>${details.others.Radio}
    <p><span class="fw-bold">Bluetooth:</span> <small>${details.others.USB}
    <p><span class="fw-bold">Bluetooth:</span> <small>${details.others.WLAN}
    <p><span class="fw-bold">Bluetooth:</span> <small>${details.others.releaseDate}
    <p><span class="fw-bold">Bluetooth:</span> <small>${details.others.slug}
    <p><span class="fw-bold">Bluetooth:</span> <small>${details.others.status}
    

    `
  }