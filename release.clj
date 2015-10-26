(require 'cljs.build.api)

(cljs.build.api/build "src"
                      {:main 'guardian-alerts.core
                       :output-to "scraper.js"
                       :target :nodejs})

