import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import HomePage from './pages/HomePage.tsx'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />

          <Route path="about">
            <Route path="blog" element={<div>Blog Page</div>} />
            <Route path="calendar/hours" element={<div>Hours Page</div>} />
            <Route path="calendar/fundraising" element={<div>Fundraising Page</div>} />
            <Route path="calendar/clinics" element={<div>Clinics Page</div>} />
          </Route>

          <Route path="adopt">
            <Route path="how-to" element={<div>How to Adopt Page</div>} />
            <Route path="application" element={<div>Adoption Application</div>} />
            <Route path="pets" element={<div>Adopt a Pet</div>} />
          </Route>

          <Route path="lost-found" element={<div>Lost & Found Page</div>} />

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
        </Routes>
      </Layout>
    </>
  )
}

export default App
