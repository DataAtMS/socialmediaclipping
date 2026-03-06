import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import CategoryPage from "./pages/CategoryPage";
import Sitemap from "./pages/Sitemap";
import { Link } from "wouter";

function NotFound() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: "#d2cd32", letterSpacing: "0.12em", marginBottom: "16px" }}>
          404 — NOT FOUND
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", color: "#f0f0f0", marginBottom: "16px" }}>
          Page not found
        </h1>
        <Link href="/">
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#d2cd32", cursor: "pointer", letterSpacing: "0.06em" }}>
            ← BACK TO CLIPPING FOR ECOMMERCE
          </span>
        </Link>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/articles/:slug" component={ArticlePage} />
      <Route path="/sitemap" component={Sitemap} />
      <Route path="/clipping-tactics" component={CategoryPage} />
      <Route path="/social-media-content" component={CategoryPage} />
      <Route path="/instagram-content" component={CategoryPage} />
      <Route path="/youtube-shorts" component={CategoryPage} />
      <Route path="/tiktok-content-strategy" component={CategoryPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return <Router />;
}
