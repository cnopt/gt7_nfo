import data from "../gt7api.json" assert {type: "json"};

function log(string) {
    console.log(string);
}

const contentArea = document.getElementById('content-area');
const jsonPrintArea = document.getElementById('jsonPrint');

for (let i = 0; i < data.BrandCentral.Cars.Manufacturers.Mazda.length; i++) {
    log(data.BrandCentral.Cars.Manufacturers.Mazda[i])
    
    const carBox = Object.assign(
        document.createElement('div'), {
            id: 'car' + i,
            textContent: data.BrandCentral.Cars.Manufacturers.Mazda[i].Model
        })

            carBox.insertAdjacentElement(
                'beforeend', Object.assign(document.createElement('p'), {
                    className: 'bhp',
                    textContent: data.BrandCentral.Cars.Manufacturers.Mazda[i].Base_performance.MaxPower
            }));
            carBox.insertAdjacentElement( 'beforeend',
                Object.assign(document.createElement('p'), {
                    className: 'pp',
                    textContent: data.BrandCentral.Cars.Manufacturers.Mazda[i].Base_performance.PP
            }));



    const documentFragment = document.createDocumentFragment();
    documentFragment.appendChild(carBox);
    contentArea.appendChild(documentFragment);
    
    // jsonPrintArea.textContent = JSON.stringify(data.BrandCentral.Cars.Manufacturers.Mazda[0], undefined, 2)
}

