var userFeed = new Instafeed({
  get: 'user',
  userId: '227942832',
  limit: 9,
  link: 'https://www.instagram.com/redbuttegarden/',
  resolution: 'standard_resolution',
  accessToken: '227942832.403f1ba.7b1911b4b8634fcd90f27e7ce3600d47',
  sortBy: 'most-recent',
  template: '<a href="{{link}}" target="_blank"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i> {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"/></div></div></a>'
});

userFeed.run();
