 
 

 
 const buildItem = document.querySelectorAll('.build')
  const buildValue = document.querySelector('#build-value')
  const floorsValue = document.querySelector('#floors-value')
  const flatsValue = document.querySelector('#flats-value')
  const buildDescription = document.querySelector('.build-info-description')

  buildItem.forEach(item => {
      item.addEventListener('mouseover', function() {
          const dataBuildNumber = item.getAttribute('data-build-number');
          const dataFloorsNumber = item.getAttribute('data-floors-number');
          const dataFlatsValue = item.getAttribute('data-flats-number');
          const dataBuildDescription = item.getAttribute('data-description');


          flatsValue.innerHTML = dataFlatsValue;
          floorsValue.innerHTML = dataFloorsNumber;
          buildValue.innerHTML = dataBuildNumber;
          buildDescription.innerHTML = dataBuildDescription;


          console.log(dataBuildNumber);
      })
  })



  const floorItem = document.querySelectorAll('.floor')
    const allFlatsValue = document.querySelector('#all-value')
    const freeFlatsValue = document.querySelector('#free-value')
    const bookingFlatsValue = document.querySelector('#booking-value')
    const soldFlatsValue = document.querySelector('#sold-value')
    const floorDescription = document.querySelector('.floor-info-description')


    floorItem.forEach(item => {
        item.addEventListener('mouseover', function() {
            const dataFlatsAmount = item.getAttribute('data-flats-amount')
            const dataFreeAmount = item.getAttribute('data-free-amount')
            const dataBookAmount = item.getAttribute('data-book-amount')
            const dataSoldAmount = item.getAttribute('data-sold-amount')
            const dataFloorDescription = item.getAttribute('data-floor-description');

            allFlatsValue.innerHTML = dataFlatsAmount;
            freeFlatsValue.innerHTML = dataFreeAmount;
            bookingFlatsValue.innerHTML = dataBookAmount;
            soldFlatsValue.innerHTML = dataSoldAmount;
            floorDescription.innerHTML = dataFloorDescription;
        })
    })





  const buildLink = document.querySelectorAll('.build-link')
  buildLink.forEach(link => {
      console.log(link);

      link.addEventListener('click', function(event) {

          if (link.classList.contains('sold')) {
              event.preventDefault();
              alert('Дом продан')
          } else {
              null
          }
      })

  })



  const flat = document.querySelectorAll('.flat');

  flat.forEach(item => {

      if (item.classList.contains('booking')) {
          item.querySelector('.status-text').innerHTML = "Бронь";
      } else if (item.classList.contains('sold')) {
          item.querySelector('.status-text').innerHTML = "Продано"
      } else if (item.classList.contains('action')) {
          item.querySelector('.status-text').innerHTML = "Акция"
      } else {
          item.querySelector('.status-text').innerHTML = "Свободна"
      }


  })


  const flatArray = [{
          id: 1,
          house: "2",
          floor: "3",
          rooms: "2",
          square: "82.3 м.кв.",
          price: "700$",
          priceTotal: "52500$",
          flatNumber: 1,
          status: "booking",

          description: [{
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
          ]


      },


      {
          id: 2,
          house: "2",
          floor: "3",
          rooms: "3",
          square: "82.3 м.кв.",
          price: "700$",
          priceTotal: "42000$",
          flatNumber: 2,
          status: "sold",

          description: [{
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
          ]


      },

      {
          id: 3,
          house: "2",
          floor: "3",
          rooms: "3",
          square: "60.7  м.кв.",
          price: "700$",
          priceTotal: "42000$",
          flatNumber: 3,
          status: "action",

          description: [{
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
          ]


      },

      {
          id: 4,
          house: "2",
          floor: "3",
          rooms: "3",
          square: "67.7  м.кв.",
          price: "700$",
          priceTotal: "49000$",
          flatNumber: 4,
          status: "free",

          description: [{
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
          ]


      },

      {
          id: 5,
          house: "2",
          floor: "3",
          rooms: "3",
          square: "79.7  м.кв.",
          price: "700$",
          priceTotal: "55000$",
          flatNumber: 5,
          status: "sold",

          description: [{
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
          ]


      },

      {
          id: 6,
          house: "2",
          floor: "3",
          rooms: "3",
          square: "73.7  м.кв.",
          price: "700$",
          priceTotal: "51000$",
          flatNumber: 6,
          status: "booking",

          description: [{
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
          ]


      },

      {
          id: 7,
          house: "2",
          floor: "3",
          rooms: "2",
          square: "42 м.кв.",
          price: "700$",
          priceTotal: "39000$",
          flatNumber: 7,
          status: "action",

          description: [{
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
          ]


      },

      {
          id: 8,
          house: "2",
          floor: "3",
          rooms: "1",
          square: "39 м.кв.",
          price: "700$",
          priceTotal: "33000$",
          flatNumber: 8,
          status: "booking",

          description: [{
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
          ]


      },

      {
          id: 9,
          house: "2",
          floor: "3",
          rooms: "2",
          square: "79 м.кв.",
          price: "700$",
          priceTotal: "62000$",
          flatNumber: 9,
          status: "free",

          description: [{
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
              {
                  text: "Анрі-Барбюса 56/2",
              },
          ]


      },

  ]



  window.addEventListener('load', function() {
      document.querySelector('.floor-plan-page') ? installFloorPlan() : console.log('xtnjnj');

      function installFloorPlan() {
          const flatInfo = document.querySelector("#flat-info")
          
          const flatGroup = document.querySelectorAll('.flat')

          function deleteActiveClass()   {
            flatGroup.forEach(active => {
              active.classList.remove('active')
            })
          }



        const flatObj = [{
            id: 1,
            house: "2",
            floor: "3",
            rooms: "2",
            square: "82.3 м.кв.",
            price: "700$",
            priceTotal: "52500$",
            flatNumber: 1,
            status: "booking",
            description: [{
                text: "Анрі-Барбюса 56/2",
            },
            {
                text: "Анрі-Барбюса 56/2",
            },
            {
                text: "Анрі-Барбюса 56/2",
            },
            {
                text: "Анрі-Барбюса 56/2",
            },
            ]
        },]

        const renderInfo = (flatInfoTemplate) => {
            const flatInformation = flatInfoTemplate.map(item =>{
                return (`
                <div class="flat-item flat-info-house">
                Номер дома <b id="house-number">${item.house}</b>
                </div>
    
                <div class="flat-item flat-item--floor">
                   Этаж: <b id="floor-number">${item.floor}</b>
                </div>
                                                                  
                <div class="flat-item flat-item--rooms">
                    Кол-во комнат: <b id="room-quantity">${item.rooms}</b>
                </div>   
                <div class="flat-item flat-item--square">
                   Площадь квартиры: <b id="flat-square">${item.square}</b>
                </div>     
                <div class="flat-item flat-item--price">
                   Цена за м²: <b id="price-meter">${item.price}</b>
                </div>       
                <div class="flat-item flat-item--priceTotal">
                    Цена за квартиру: <b id="price-total">${item.priceTotal}</b>
                </div>  
                <div class="flat-item flat-item--title">
                    Номер квартири: <b id="flat-number">${item.flatNumber}</b>
                </div>      
                <div class="flat-item flat-item--status">
                    Статус квартиры: <b id="flat-status">${item.status}</b>
                </div> 
            `)

            }).join("")
    
        flatInfo.innerHTML = flatInformation
        }

        renderInfo(flatObj)





          flatGroup.forEach(flat => {
              flat.addEventListener("click", () => {

                deleteActiveClass()
                  flat.classList.add('active')

                let thisFlat = flat.getAttribute('data-number')
                console.log(thisFlat); 

                let flatNumber = flatArray.filter(obj => obj.flatNumber.toString() === thisFlat);
                console.table(flatNumber);

                renderInfo(flatNumber)
              })
          })

      }

  })