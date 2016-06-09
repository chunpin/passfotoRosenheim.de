// Define the `app` module
var app = angular.module('app', []);

// Define the `testimonialCtrl` controller on the `app` module
app.controller('testimonialCtrl', function app($scope) {
  $scope.comments = [
    { author: 'James',
      text: 'Fast just got faster with Nexus S.',
      img:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-01.png',
      alt:'quick-shot-kunden-01',
      date: new Date(2016, 3, 02)
    }, 
    { author: 'Veroll',
      text: 'The Next, Next Generation tablet.',
      img:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-02.png',
      alt:'quick-shot-kunden-02',
      date: new Date(2016, 3, 25)
    }, 
    { author: 'Maya',
      text: 'The Next, Next Generation tablet.',
      img:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-03.png',
      alt:'quick-shot-kunden-03',
      date: new Date(2016, 2, 28)
    }
    , 
    { author: 'Basti',
      text: 'The Next, Next Generation tablet.',
      img:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-04.png',
      alt:'quick-shot-kunden-03',
      date: new Date(2016, 1, 28)
    }
    , 
    { author: 'Nani',
      text: 'The Next, Next Generation tablet.',
      img:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-05.png',
      alt:'quick-shot-kunden-03',
      date: new Date(2016, 7, 28)
    }
    , 
    { author: 'Paulina',
      text: 'The Next, Next Generation tablet.',
      img:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-06.png',
      alt:'quick-shot-kunden-03',
      date: new Date(2016, 6, 09)
    }
    , 
    { author: 'Bibi',
      text: 'The Next, Next Generation tablet.',
      img:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-07.png',
      alt:'quick-shot-kunden-03',
      date: new Date(2016, 11, 20 )
    }
  ];
});