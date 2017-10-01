module.exports = {
  html: {
    files: [
      {
        expand: true,
        cwd: 'application/html/',
        src: '**',
        dest: 'application/dist/'
      }
    ]
  },
  images: {
    files: [
      {
        expand: true,
        cwd: 'application/images',
        src: '**',
        dest: 'application/dist/images/'
      }
    ]
  }
}
