import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import HomePage from './pages/HomePage.tsx'
import BlogPage from './pages/BlogPage.tsx'
import BlogPost from './pages/BlogPost.tsx'
import NotFound from './pages/NotFound.tsx'
import CalendarPage from './pages/CalendarPage.tsx'
import NewsletterPage from './pages/NewsletterPage.tsx'
import AdoptPage from './pages/AdoptPage.tsx'
import AdoptionProcessPage from './pages/AdoptionProcessPage.tsx'
import AdoptionApplicationPage from './pages/AdoptionApplicationPage.tsx'
import LostAndFoundPage from './pages/LostAndFoundPage.tsx'
import DonationPage from './pages/DonationPage.tsx'
import VolunteerPage from './pages/VolunteerPage.tsx'  
import ScrollToTop from './components/ScrollToTop.tsx'
import FosteringPage from './pages/FosteringPage.tsx'
import FundraisersPage from './pages/FundraisersPage.tsx'
import EuthanasiaPage from './pages/EuthanasiaPage.tsx'
import ClinicsPage from './pages/ClinicsPage.tsx'
import PetSurrenderPage from './pages/PetSurrenderPage.tsx'


function App() {
  return (
    <>
      <ScrollToTop />
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
            <Route path="donation" element={<DonationPage />} />
            <Route path="volunteering" element={<VolunteerPage />} /> 
            <Route path="fostering" element={<FosteringPage />} />
            <Route path="fundraisers" element={<FundraisersPage />} />
          </Route>

          <Route path="services">
            <Route path="euthanasia" element={<EuthanasiaPage />} />
            <Route path="clinics" element={<ClinicsPage />} />
            <Route path="surrender" element={<PetSurrenderPage />} />
          </Route>

          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App