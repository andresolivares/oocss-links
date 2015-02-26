var gulp = require("gulp");
var sass = require("gulp-ruby-sass");
var sync = require("browser-sync");
var reload = sync.reload;

// Browser Sync

gulp.task("server", function(){
  sync({
    server: {
      baseDir: "./"
    }
  })
});

gulp.task("reload", function(){
  sync.reload();
});

gulp.task("sass", function(){
  sass("./sass/link.sass", {
    style: "compressed"
  })
  .on("error", function(error){console.log(error.message)})
  .pipe(gulp.dest("./css/"))
  .pipe(reload({stream: true}));
});

gulp.task("default", ["server"], function(){
  gulp.watch("./sass/*.sass", ["sass"]);
  gulp.watch("*.html", ["reload"]);
});
