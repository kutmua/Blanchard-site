document.addEventListener('DOMContentLoaded', function(){
  // tooltips
  // let projectsText = document.querySelector('.projects__descr');
  // let selectedTooltip;

  // projectsText.onclick = function(event){
  //   let tooltips = event.target.closest('.projects__descr-tooltips-container');

  //   if (!tooltips) return;
  //   if (!projectsText.contains(tooltips)) return;

  //   tooltipsOn(tooltips);
  // }

  // function tooltipsOn(tp) {
  //   if (selectedTooltip) { // убрать существующий тултип, если есть
  //     selectedTooltip.classList.remove('tooltips-open');
  //   }
  //   selectedTooltip = tp;
  //   selectedTooltip.classList.add('tooltips-open'); // вывести на экран новый тултип
  // };

  function tooltipsOn(){
    let tooltips = document.querySelectorAll('.projects__descr-tooltips-container');

    for (let e of tooltips) {
      e.addEventListener('click', ()=>{
        e.classList.toggle('tooltips-open');
      });

    }
  };

  tooltipsOn();
});
