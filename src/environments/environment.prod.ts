export const environment = {
  production: true,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiYnJhc2thbSIsImEiOiJja3NqcXBzbWoyZ3ZvMm5ybzA4N2dzaDR6In0.RUAYJFnNgOnn80wXkrV9ZA',
  },
  routes:{
    base: 'http://localhost:8002',
    url: '/v1/api/',
    users: '/users',
    auth: '/auth'
  },
  data:{
    id: "generic",
    date: new Date(),
    address: "Cra 89D # 32 15 Sur",
    video: "http://player.vimeo.com/video/4749536",
    latitude: 4.635517934252235,
    longitude: -74.14845602276542  
  }
};
