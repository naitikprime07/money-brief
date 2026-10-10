import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InterstitialProvider from './components/InterstitialAd/InterstitialProvider';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <InterstitialProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogDetail />} />
            <Route path="category/:category" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </InterstitialProvider>
    </BrowserRouter>
  );
}
