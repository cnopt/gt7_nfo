import data from "../gt7api.json" assert {type: "json"};

function log(string) {
    console.log(string);
}

const contentArea = document.getElementById('content-area');
const jsonPrintArea = document.getElementById('jsonPrint');

log(Object.keys(data.BrandCentral.Cars.Manufacturers).length + ' manufacturers found')

for (let i=0;i<Object.keys(data.BrandCentral.Cars.Manufacturers).length;i++) {
    //log(Object.values(data.BrandCentral.Cars.Manufacturers)[i][0].Model);
    // now looped thru the manufacturers,
    // now loop thru the cars themselves
    for (let x=0;x<Object.values(data.BrandCentral.Cars.Manufacturers)[i].length;x++) {
        log(Object.values(data.BrandCentral.Cars.Manufacturers)[i][x].Model);

        const carBox = Object.assign(
                    document.createElement('div'), {
                        id: 'carBox' + i,
                        className: Object.values(data.BrandCentral.Cars.Manufacturers)[i][x].Manufacturer + ' ' +
                                   Object.values(data.BrandCentral.Cars.Manufacturers)[i][x].Type,
                    })
                        carBox.insertAdjacentElement(
                            'beforeend', Object.assign(document.createElement('img'), {
                                className: 'car-img',
                                width: '200',
                                src: Object.values(data.BrandCentral.Cars.Manufacturers)[i][x].img
                        }));
                        carBox.insertAdjacentElement(
                            'beforeend', Object.assign(document.createElement('p'), {
                                className: 'model',
                                textContent: Object.keys(data.BrandCentral.Cars.Manufacturers)[i]
                        }));
                        carBox.insertAdjacentElement(
                            'beforeend', Object.assign(document.createElement('p'), {
                                className: 'model',
                                textContent: Object.values(data.BrandCentral.Cars.Manufacturers)[i][x].Model
                        }));
                        carBox.insertAdjacentElement(
                            'beforeend', Object.assign(document.createElement('p'), {
                                className: 'bhp',
                                textContent: Object.values(data.BrandCentral.Cars.Manufacturers)[i][x].Base_performance.MaxPower
                        }));
                        carBox.insertAdjacentElement( 'beforeend',
                            Object.assign(document.createElement('p'), {
                                className: 'pp',
                                textContent: Object.values(data.BrandCentral.Cars.Manufacturers)[i][x].Base_performance.PP
                        }));
            
            
            
                const documentFragment = document.createDocumentFragment();
                documentFragment.appendChild(carBox);
                contentArea.appendChild(documentFragment);
    }
}

