import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <div style={{width:"70%",padding:"3%",margin:"auto",marginTop:"5%",backgroundColor:"lightgreen"}}>
        <div style={{}}>
          <h1>Inline react app</h1>
          <hr/>
        </div>
        <div className='content'>
        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi dolorem nisi? Sint fugit, assumenda illum doloremque praesentium vel saepe ab quisquam nam tenetur officia deserunt illo dolor autem facere dolore veniam distinctio repudiandae? Delectus temporibus vel magnam impedit mollitia numquam voluptatum quo necessitatibus adipisci maxime. Magnam ullam, doloribus mollitia nostrum rerum rem maxime amet suscipit explicabo dolore, qui nihil sint quos fugiat impedit officiis deserunt minima dolorem velit? Accusantium molestias pariatur quos reprehenderit voluptatem distinctio. Nisi, officia enim reiciendis, alias accusantium a sapiente natus voluptatum aliquam quia delectus facilis quod tenetur debitis quas modi ab earum laboriosam ad magni.</p>
        </div>
      </div>
    </>
  </React.StrictMode>
);

reportWebVitals();
