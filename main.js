function fet() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const acBtn = document.getElementById('ac');
        const caBtn = document.getElementById('ca');
        let area = document.getElementById('card-area');
  
        acBtn.addEventListener('click', function sorter(e) {
          data.sort((a, b) => a.price - b.price);
          renderUI(data); 
        });
        
        caBtn.addEventListener('click', function sorter(e) {
            data.sort((a, b) =>  b.price - a.price);
            renderUI(data);
        }); 
        
        function renderUI(data) {
          area.innerHTML = '';
          for (let i = 0; i < data.length; i++) {
            let card = document.createElement("div");
            card.classList.add("card");
  
            let cardTitle = document.createElement('h3');
            cardTitle.classList.add('title');
            cardTitle.textContent = data[i].title;
  
            let cardBody = document.createElement('span');
            cardBody.classList.add('card-body');
            cardBody.textContent = data[i].price;

            let cardImg = document.createElement('img');
            cardImg.classList.add('card-body');
            cardImg.src = data[i].image;
  
            card.append(cardTitle, cardBody,cardImg);
            area.append(card);
          }
        }
  
        renderUI(data);
      });
  }
  
  fet();


  function searchPost(){
    const searchTerm = document.getElementById("searchInp").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {

    const title = cards[i].querySelector(".title").textContent.toLowerCase();

    if(title.includes(searchTerm)){
        cards[i].style.display="block"
    }else{
        cards[i].style.display="none"

    }
    
}

  }
  document.getElementById("btn").addEventListener("click",searchPost)