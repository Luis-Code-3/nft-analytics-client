import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TrendingCollectionsPage from './pages/TrendingCollectionsPage';
import TopSalesPage from './pages/TopSalesPage';
import HomePage from './pages/HomePage';
import CollectionDetailsPage from './pages/CollectionDetailsPage';
import NftDetailsPage from './pages/NftDetailsPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import BlogPage from './pages/BlogPage';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/collection-analytics' element={<TrendingCollectionsPage/>} />
        <Route path='/top-sales' element={<TopSalesPage/>} />
        <Route path='/collection-details/:collectionId' element={<CollectionDetailsPage/>} />

        <Route path='/collection-details/:collectionId/tokens' element={<CollectionDetailsPage/>} />
        <Route path='/collection-details/:collectionId/top-sales' element={<CollectionDetailsPage/>} />
        <Route path='/collection-details/:collectionId/analytics' element={<CollectionDetailsPage/>} />

        <Route path='/nft-details/:collectionId/:nftId' element={<NftDetailsPage/>} />
        {/* <Route path='/blog' element={<BlogPage/>} /> */}
        
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/> 







    </div>
  );
}

export default App;
