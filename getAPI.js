
// bài 3

let domain1 = document.getElementById('domain1');
let domain2 = document.getElementById('domain2');
let domain3 = document.getElementById('domain3');

async function link_shorter() {
    let url = document.getElementById('input').value;
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();
    const {
        result
    } = data;



    console.log(result);
    domain1.innerHTML = result.short_link;
    domain1.href = result.full_short_link;

    domain2.innerHTML = result.short_link2;
    domain2.href = result.full_short_link2;

    domain3.innerHTML = result.short_link3;
    domain3.href = result.full_short_link3;
}