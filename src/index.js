import { Hono } from "hono";
import { cors } from "hono/cors";
import index from "./routes/index";
import reviews from "./routes/reviews";
import title from "./routes/title";
import cache from "./helpers/cache";
import search from "./routes/search";
import userRoutes from "./routes/user";
import movie from "./routes/movie";
import links from "./routes/links";
import subtitles from "./routes/subtitles";

const app = new Hono();

app.use("*", cors());
app.use("*", cache);

app.route("/search", search);
app.route("/movie", movie);
app.route("/title", title);
app.route("/subtitles", subtitles);
app.route("/reviews", reviews);
app.route("/user", userRoutes);
app.route("/links", links);
app.route("/", index);

app.fire();
