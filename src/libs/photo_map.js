


  document.addEventListener('DOMContentLoaded', function() => {
    const imatges = ${JSON.stringify(imatges)};
    const container = document.querySelector('.swiper-wrapper');

    imatges.map((img, i) => {
      const nom = img.split("/")[2].split(".")[0];
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `
        <a href="/imatge/${nom}/">
          <img src="${img}" class="max-h-[25vh]" alt="${nom}" />
          <p>${i + 1}</p>
        </a>
      `;
      container.appendChild(slide);
    });
  });