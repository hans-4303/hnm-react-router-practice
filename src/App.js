import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './Components/Navbar';
import PrivateRoute from './route/PrivateRoute';
import { useSelector } from 'react-redux';

/* 1. 전체 상품 페이지, 로그인, 상품 상세 페이지 만들기
2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
  상품 디테일을 눌렀으나, 로그인이 안 되어있을 경우에는 로그인 페이지가 먼저 나온다
4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
  로그아웃이 되면 상품 디테일 페이지를 볼 수 없다, 다시 로그인 페이지가 보인다.
6. 로그인을 하면 로그아웃이, 로그아웃을 하면 로그인이 보인다.
7. 상품을 검색할 수 있다. */

function App() {
  /* const authenticate = useSelector((state) => state.auth.authenticate); */

   /* useEffect(() => {
    console.log("AAaa", authenticate)
   },[authenticate]); */

  return (
    <div className="App">
      {/* <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}></Navbar> */}
      <Navbar></Navbar>
      <Routes>
        {/* 페이지가 세 개 뿐이라고?? */}
        <Route path='/' element={<ProductAll></ProductAll>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/product/:id' element={<PrivateRoute></PrivateRoute>}></Route>
        {/* <Route path='/' element={<ProductAll authenticate={authenticate}></ProductAll>}></Route>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}></Login>}></Route>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}></PrivateRoute>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
