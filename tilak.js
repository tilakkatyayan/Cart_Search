const container = document.querySelector("#tb1")

const dataFetcher = async () => {
    const res = await fetch('data.json')
    const data = await res.json()
    // productDisplay(data)
    return data.items
}

const fillInitial = async () => {
    const data = await dataFetcher()
    productDisplay(data)
}

fillInitial()

const productDisplay = (data) => {
    for (var i = 0; i < data.length; i++) {
        let vid = data[i].id;
        let vtitle = data[i].title;
        let vdescription = data[i].description;
        let vprice = data[i].price;
        let vdiscountPercentage = data[i].discountPercentage;
        let vrating = data[i].rating
        let vstock = data[i].stock;;
        let vbrand = data[i].brand;
        let vcatogary = data[i].catogary;
        let vthumbnail = data[i].thumbnail;
        let vimages = data[i].images;
        const img = document.createElement('img')
        img.src = data[i].images[0];
        container.innerHTML += `
            <tr>
                <td>${vid}</td>
                <td>${vtitle}</td>
                <td>${vdescription}</td>
                <td>${vprice}</td>
                <td>${vdiscountPercentage}</td>
                <td>${vrating}</td>
                <td>${vstock}</td>
                <td>${vbrand}</td>
                <td>${vcatogary}</td>
                <td>${vthumbnail}</td>
            </tr>`;
        const td = document.createElement('td')
        td.appendChild(img)
        container.appendChild(td)
    }
}

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const search = document.querySelector('input')

search.addEventListener('input', async (e) => {
    const inp = e.target.value.toLowerCase()

    const initialData = await dataFetcher()

    removeChildren(container)

    filteredProducts = initialData.filter((el) =>
        el.description.toLowerCase().includes(inp) ||
        el.title.toLowerCase().includes(inp))

    productDisplay(filteredProducts)
})