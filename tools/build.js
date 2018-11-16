/* eslint-disable no-console */
import webpack from "webpack";
import webpackConfig from "../webpack.config.prod";
import colors from "colors";

process.env.NODE_ENV = "production"; // this ensures the Babel dev config does not apply

console.log(
  colors.blue("Generating minified bundle for production via Webpack. This will take a moment...")
);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(colors.red.bold(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(colors.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(colors.yellow.bold("Webpack generating the following warnings: "));
    jsonStats.warnings.map(warning => console.log(colors.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log(colors.green(
    "Your app has been compiled in production mode and written to /dist. It is ready to roll!")
      
  );
  return 0;
});
