import React from 'react';

const Menu = () => {
  return (
    <>
      <h1>Menu</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src="https://www.vegrecipesofindia.com/wp-content/uploads/2015/04/neer-dosa-recipe-easy-2-1.jpg"
                alt="Indian Food 1"
                className="menu-image"
              />
              <h3>Neer Dosa</h3>
              <p>$8.99</p>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://sapanarestaurant.com/wp-content/uploads/2019/11/idli-sambar-900x600.jpg"
                alt="Indian Food 2"
                className="menu-image"
              />
              <h3>Idli Sambar</h3>
              <p>$7.99</p>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/biryani-recipe-2.jpg"
                alt="Indian Food 3"
                className="menu-image"
              />
              <h3>Veg Biryani</h3>
              <p>$12.99</p>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://static.toiimg.com/thumb/54289752.cms?width=800&height=800&imgsize=495844"
                alt="Indian Food 4"
                className="menu-image"
              />
              <h3>Masala Dosa</h3>
              <p>$9.99</p>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          /* Internal CSS */
          .card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 16px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .menu-image {
            width: 100%;
            height: auto;
            border-radius: 4px;
          }
        `}
      </style>
    </>
  );
};

export default Menu;
