const container = document.querySelector(".container");

try {
  fetch("pictures.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      let display = "";
      data.forEach(picture => {
        display += `<div><img 
            src=${picture.url}
            alt="picture"
            class="picture"
            />
            </div>`;
      });
      container.innerHTML = display;
      $(document).ready(function() {
        $(".container").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          arrows: true,
          dots: true
        });
      });
    });
} catch (msg) {
  alert("failed to fetch");
}
