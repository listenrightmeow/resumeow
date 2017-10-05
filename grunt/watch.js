module.exports = {
  sass: {
    files: ['application/stylesheets/*.scss'],
    tasks: ['sass'],
    options: {
      atBegin: true
    }
  },
  html: {
    files: ['application/html/**'],
    tasks: ['copy:html'],
    options: {
      atBegin: true
    }
  },
  images: {
    files: ['application/images/**'],
    tasks: ['copy:images'],
    options: {
      atBegin: true
    }
  }
}
