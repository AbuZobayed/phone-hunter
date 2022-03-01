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
    <div class="d-block mx-auto image "> <img src="${details.image}" class="card-img-top" alt="..."> </div>
    `;
    const detailsInfo = document.getElementById('details-info');
    detailsInfo.innerHTML = `
    <tr>
    <th scope="row">Brand</th>
    <td>${details.brand}</td>
  </tr>
    
    <tr>
    <th scope="row">Release Date</th>
    <td>${details.releaseDate ?details.releaseDate :'No Release Date Found'}</td>
  </tr>
    <tr>
    <th scope="row">processor</th>
    <td>${details.mainFeatures.chipSet}</td>
  </tr>
    
    <tr>
    <th scope="row">displaySize</th>
    <td>${details.mainFeatures.displaySize}</td>
  </tr>
  
  <tr>
  <th scope="row">Memory</th>
  <td>${details.others.Bluetooth}</td>
</tr>
  <tr>
  <th scope="row">sensors</th>
  <td>${details.mainFeatures.sensors[0]} , ${details.mainFeatures.sensors[1]} , ${details.mainFeatures.sensors[2]} , ${details.mainFeatures.sensors[3]} , ${details.mainFeatures.sensors[4]}</td>
  
</tr>
    
  <tr>
  <th scope="row">GPS</th>
  <td>${details.others.GPS}</td>
</tr>
    
  <tr>
  <th scope="row">Memory</th>
  <td>${details.others.Memory}</td>
</tr>
  <tr>
  <th scope="row">WLAN</th>
  <td>${details.others.WLAN}</td>
</tr>
    
    `
  }



  