import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import HomePage from './pages/HomePage.tsx'
import BlogPage from './pages/BlogPage.tsx'
import BlogPost from './pages/BlogPost.tsx'
import NotFound from './pages/NotFound.tsx'
import CalendarPage from './pages/CalendarPage.tsx'
import NewsletterPage from './pages/NewsletterPage.tsx'
import AdoptPage from './pages/AdoptPage.tsx';
import AdoptionProcessPage from './pages/AdoptionProcessPage.tsx';
import AdoptionApplicationPage from './pages/AdoptionApplicationPage.tsx';
import LostAndFoundPage from './pages/LostAndFoundPage.tsx';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />

          <Route path="about">
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:id" element={<BlogPost />} />
            <Route path="newsletter" element={<NewsletterPage />} />
            <Route path="calendar" element={<CalendarPage />} />
          </Route>

          <Route path="adopt">
            <Route path="how-to" element={<AdoptionProcessPage />} />
            <Route path="application" element={<AdoptionApplicationPage />} />
            <Route path="pets" element={<AdoptPage />} />
          </Route>

          <Route path="lost-found" element={<LostAndFoundPage />} />

          <Route path="get-involved">
            <Route path="donation" element={<div>Donation Page</div>} />
            <Route path="volunteering" element={<div>Volunteering Page</div>} />
            <Route path="fostering" element={<div>Fostering Page</div>} />
            <Route path="fundraisers" element={<div>Fundraisers Page</div>} />
          </Route>

          <Route path="services">
            <Route path="euthanasia" element={<div>Euthanasia Page</div>} />
            <Route path="clinics" element={<div>Clinics Page</div>} />
            <Route path="surrender" element={<div>Pet Surrender Page</div>} />
          </Route>

          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
