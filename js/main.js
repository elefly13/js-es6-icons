const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];



//arrow FUNCTION---------------
const print = (array, container) => {
    container.innerHTML = ''; //pulisce ogni volta il codice html della sezione presa prima
    array.forEach((element) => {
        const {name, family, prefix, color} = element;
        container.innerHTML += `
        <div>
            <i class="${family} ${prefix + name}" style= "color: ${color}"></i>
            <div class="title">${name.toLocaleUpperCase()}</div>
        </div>
        `;
    });
};

const colors = ['blue', 'orange', 'purple'];


//prendo l'elemento con id icons
const iconsContainer = document.getElementById('icons');

const coloredArray = colorIcons(icons, colors);
print(icons, iconsContainer);

const types = getTypes(coloredArray);
const select = document.getElementById('type');
printOptions(types, select);


//al change mostrare solo le icone filtrate
select.onchange = function(element) {
    const filtred = filterValues(icons, element.target.value);

    print(filtred, iconsContainer);
};

//   FUNZIONI ----------

// function print(array, container) {
//     container.innerHTML = ''; //pulisce ogni volta il codice html della sezione presa prima
//     array.forEach((element) => {
//         const {name, family, prefix, type} = element;
//         container.innerHTML += `
//         <div>
//             <i class="${family} ${prefix + name}" style= "color: blue"></i>
//             <div class="title">${name.toLocaleUpperCase()}</div>
//         </div>
//         `;
//     });
// }

function colorIcons(array, colors) {
    const types = getTypes(array);
    // console.log(types);
    const coloredArray = array.map((element) => {
        const indexType = types.indexOf(element.type);
        // console.log(indexType);
        
        element.color = colors[indexType];
        return element;
    });
    console.log(coloredArray);
}

function getTypes(array) {
    const types = [];

    array.forEach((element) => {
        if (!types.includes(element.type)) {
            types.push(element.type);
        }
    });
    return types;
} 

function printOptions(array, select) {
    array.forEach((element) => {
        select.innerHTML += `<option value="${element}">${element}</option>`;
    });
}

function filterValues(array, type) {
    const filteredIcons = array.filter((element) => {
        if (element.type === type) {
            return true;
        }
        return false;
    });
    if (type === "") {
        return array;
    }
    return filteredIcons;
}