var userFeed = new Instafeed({
  get: 'user',
  userId: '227942832',
  limit: 12,
  link: 'https://www.instagram.com/redbuttegarden/',
  resolution: 'standard_resolution',
  accessToken: '227942832.403f1ba.7b1911b4b8634fcd90f27e7ce3600d47',
  sortBy: 'most-recent',
  template: '<div class="col-lg-3 gallery instaimg"><a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
});

userFeed.run();
