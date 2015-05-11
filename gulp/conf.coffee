# configure

D =
  PATH: '/'
  SRC: 'src'
  DEST: 'dest'
  BUILD: 'build'

module.exports =
  D: D

  serve:
    notify: false
    startPath: D.PATH
    server:
      baseDir: './'
      index: "#{D.DEST}#{D.PATH}/"
      routes:
        "#{D.PATH}": "#{D.DEST}#{D.PATH}/"

  scripts:
    browserifyOpts:
      entries: ["./#{D.SRC}/js/main.jsx"]
      extensions: ['.jsx']
      transform: ['babelify']
    dest: "#{D.DEST}#{D.PATH}/js"

  uglify:
    src: "./#{D.DEST}#{D.PATH}/js/main.js"
    dest: "#{D.BUILD}#{D.PATH}/js"

  jade:
    src: [
      "#{D.SRC}/**/*.jade"
      "!#{D.SRC}/**/_**/*.jade"
      "!#{D.SRC}/**/_*.jade"
    ]
    dest: "#{D.DEST}#{D.PATH}"

  stylus:
    src: [
      "#{D.SRC}/**/*.styl"
      "!#{D.SRC}/**/_**/*.styl"
      "!#{D.SRC}/**/_*.styl"
    ]
    dest: "#{D.DEST}#{D.PATH}/css"

  minifyCss:
    src: "./#{D.DEST}#{D.PATH}/css/main.css"
    dest: "#{D.BUILD}#{D.PATH}/css"

  clean: ["#{D.BUILD}#{D.PATH}"]

  replace:
    src: "#{D.DEST}#{D.PATH}/index.html"
    dest: "#{D.BUILD}#{D.PATH}"
    replacements: [
      ['main.js?v', "main.min.js?v#{Date.now()}"]
      ['main.css?v', "main.min.css?v#{Date.now()}"]
    ]

  copy:
    src: [
      "#{D.DEST}/**"
      "!#{D.DEST}/css/**"
      "!#{D.DEST}/js/**"
      "!#{D.DEST}/img/**"
    ]
    dest: D.BUILD
