import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <div id="root">
        <div className='first'>
            <h1>Internal style</h1>
            <hr/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime repellendus sequi error quam aut quia, excepturi quibusdam beatae doloremque sunt voluptas incidunt modi cum dolorem amet dolores eum ut iusto eaque pariatur a! Ipsa saepe obcaecati ex mollitia sit dolorum in excepturi amet corrupti consequuntur, at doloremque et tempore, praesentium libero! Necessitatibus nulla est quo! Repudiandae, eligendi id facilis, aperiam quod nihil vel quidem fuga error, at officia dicta explicabo atque ad obcaecati! Deserunt dicta fugit vel similique voluptates natus laboriosam iusto quibusdam molestias nemo. Fugit, quae aliquid vitae suscipit molestiae aperiam excepturi, voluptatibus maxime quas iste adipisci, a architecto.</p>
        </div>
        <div className='second'>
            <p>praesentium libero! Necessitatibus nulla est quo! Repudiandae, eligendi id facilis, aperiam quod nihil vel quidem fuga error, at officia dicta explicabo atque ad obcaecati! Deserunt dicta fugit vel similique voluptates natus laboriosam</p>
        </div>
    </div>
    </>
  </React.StrictMode>
);

reportWebVitals();
