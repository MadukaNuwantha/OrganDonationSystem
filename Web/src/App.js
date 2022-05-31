import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import Home from './components/Home';
import DonorReg from './components/DonorReg';
import Thanking from './components/Thanking';
import AdminLogin from './components/AdminLogin';
import PatientReg from './components/PatientReg';
import AdminPage from './components/AdminPage';
import AdminReg from './components/AdminReg';
import SuperAdminPage from './components/SuperAdminPage';
import PatientDetails from './components/PatientDetails';
import PatientOrgon from './components/PatientOrgon';
import DonorDetails from './components/DonorDetails';
import DonorView from './components/DonorView';
import PatientView from './components/PatientView';
import PatientEdit from './components/PatientEdit';
import OrgansReg from './components/OrgansReg';
import OrgansDetails from './components/OrgansDetails';

import SriLankaLaw from './components/SriLankaLaw';
import LivingDonor from './components/LivingDonor';
import GetInvolved from './components/GetInvolved';
import Donatekidney from './components/Donatekidney';
import Donateliver from './components/Donateliver';
import DonateBone from './components/DonateBone';
import Campaigns from './components/Campaigns';
import Comments from './components/Comments';
import Articals from './components/Articals';

import Howdonationsworks from './components/Howdonationsworks';
import Whocandonate from './components/Whocandonate';
import Whatcanbedonated from './components/Whatcanbedonated';
import Howdoisignup from './components/Howdoisignup';
import Whyshouldisignup from './components/Whyshouldisignup';
import Whathappensafterisignin from './components/Whathappensafterisignin';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <div className=''>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/admin' element={<AdminPage/>} />
            <Route path='/superadmin' element={<SuperAdminPage/>} />
            <Route path='/admin/login' element={<AdminLogin/>} />
            <Route path='/admin/signup' element={<AdminReg/>} />
            <Route path='/doner/reg' element={<DonorReg/>} />
            <Route path='/doner/details' element={<DonorDetails/>} />
            <Route path='/doner/view/:id' element={<DonorView/>} />
            <Route path='/doner/thank/:id' element={<Thanking/>} />
            <Route path='/patient/reg' element={<PatientReg/>} />
            <Route path='/patient/details' element={<PatientDetails/>} />
            <Route path='/patient/filter/:orgon' element={<PatientOrgon/>} />
            <Route path='/patient/view/:id' element={<PatientView/>} />
            <Route path='/patient/edit/:id' element={<PatientEdit/>} />
            <Route path='/availableorgans/reg' element={<OrgansReg/>} />
            <Route path='/availableorgans/details' element={<OrgansDetails/>} /> 

            <Route path='/law' element={<SriLankaLaw/>} />
            <Route path='/livingdonor' element={<LivingDonor/>} />
            <Route path='/getinvolved' element={<GetInvolved/>} />

            <Route path='/donatekidney' element={<Donatekidney/>} />
            <Route path='/donateliver' element={<Donateliver/>} />
            <Route path='/donatebone' element={<DonateBone/>} />
            <Route path='/comments' element={<Comments/>} />
            <Route path='/campaigns' element={<Campaigns/>} />
            <Route path='/articals' element={<Articals/>} />

            <Route path='/howdoisignup' element={<Howdoisignup/>} />
            <Route path='/whyshouldisignup' element={<Whyshouldisignup/>} />
            <Route path='/whathappensafterisignin' element={<Whathappensafterisignin/>} />

            <Route path='/howdonationsworks' element={<Howdonationsworks/>} />
            <Route path='/whocandonate' element={<Whocandonate/>} />
            <Route path='/whatcanbedonated' element={<Whatcanbedonated/>} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
