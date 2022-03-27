document.addEventListener('DOMContentLoaded', function(){
    // Табы для секции "Каталог"
    document.querySelectorAll('.step__link').forEach(function(tabsBtn){
      tabsBtn.addEventListener('click',function(event) {
        const path = event.currentTarget.dataset.path;
        console.log(path);

        document.querySelectorAll('.tab-content').forEach(function(tabContent){
          tabContent.classList.remove('tab-content-active');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
      });
    });



  // реализация dropdown меню
  const params = {
    btnClassName: "js-header-dropdown-btn", // кнопки меню
    dropClassName: "js-header-drop", // само dropdown меню
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  }

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  };

  setMenuListener();

});
