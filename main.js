// Ikke se på koden... er bare noe jeg har kastet sammen
// For MVC bare sett det opp som dette

/* 

function view() {
    document.getElementById("root").innerHTML = `
        <header> ${makeHeader()} </header>
        <main> ${makeMain()} </main>
        <footer> ${makeFooter()} </footer>
    `
}

*/

let sectionCount = 1;

const editRoot = (delta) => {
  const root = document.getElementById("root");

  root.innerHTML = "";

  sectionCount += delta;

  for (let i = 0; i < sectionCount; i++) {
    root.innerHTML += `<section> ${makeHTwo(i)} ${loremIpsum()} </section>`;
  }
};

const makeHTwo = (index) => {
  return `<h2>Dette er seksjon ${index + 1}</h2>`;
};

const loremIpsum = () => {
  return `
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    `;
};

editRoot(0);
