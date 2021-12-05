function handleClick(myRadio) {
  var all_title_time = document.querySelectorAll(".card-title-time.active")
  for (var i=0; i < all_title_time.length; i++) {
    all_title_time[i].classList.remove('active');
  }

  var all_default_time = document.querySelectorAll(".default-text.active")
  for (var i=0; i < all_default_time.length; i++) {
    all_default_time[i].classList.remove('active');
  }

  if(myRadio.value == "weekly") {
    activeClass('weekly')
  } else if(myRadio.value == "monthly") {
    activeClass('monthly')
  } else if(myRadio.value == "daily") {
    activeClass('daily')
  }
}

function activeClass(type) {
  var title_time = document.querySelectorAll(`.card-title-time.time-${type}`)
  for (var i=0; i < title_time.length; i++) {
    title_time[i].classList.add('active');
  }

  var default_time = document.querySelectorAll(`.default-text.time-${type}`)
  for (var i=0; i < default_time.length; i++) {
    default_time[i].classList.add('active');
  }
}