import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { ProductList } from 'src/homeworks/homework-5/ProductList';
import { PageBucket } from 'src/pages/bucket-page';
import { ErrorPage } from 'src/pages/error-page';
import { HomePage } from 'src/pages/home-page';
import { AddProductForm } from 'src/stories/components/hw-6-Forms/AddProductForm';
import { RedoUserProfileForm } from 'src/stories/components/hw-6-Forms/RedoUserProfileForm';
import { UserRegisterForm } from 'src/stories/components/hw-6-Forms/UserRegisterForm';
import ModalWindow from 'src/stories/components/modal/ModalWindow';
import { Header } from 'src/stories/components/header/Header';
import { Logo } from 'src/stories/components/logo/Logo';

function App() {
  const AppHeader = () => {
    return (
      <Header>
        <NavLink to={'/'}>
          <Logo />
        </NavLink>
        <NavLink to={'products'}>Товары</NavLink>
        <NavLink to={'edit-products'}>Создание/редактирование товара</NavLink>
        <NavLink to={'bucket'}>Корзина</NavLink>
        <NavLink to={'register'}>Регистрация</NavLink>
        <NavLink to={'profile'}>Профиль</NavLink>
      </Header>
    );
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppHeader />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<RedoUserProfileForm />} />
          <Route path="products" element={<ProductList />} />
          <Route
            path="edit-products"
            element={
              <ModalWindow
                modalContent={<AddProductForm />}
                onClick={() => {
                  console.log('click');
                }}
                visible={true}
              ></ModalWindow>
            }
          />
          <Route path="create-product" element={<ErrorPage />} />
          <Route path="bucket" element={<PageBucket />} />
          <Route path="register" element={<UserRegisterForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
