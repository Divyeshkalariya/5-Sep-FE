import React from "react";
import { Container, Button, Row, Form } from "react-bootstrap";
// service images
import bestdeal from '../images/service/best-deal.png';
import specialoffer from '../images/service/special-offer.png';
import newarriving from '../images/service/new-arriving.png';
// electronics images
import blutooth from '../images/Electronics/Bluetooth.jpg';
import spaker from '../images/Electronics/spaker.webp';
import watch from '../images/Electronics/watch.webp';
import earbuds from '../images/Electronics/earbuds.jpg';
// shoes images
import puma from "../images/shoes/puma.png";
import snickers from "../images/shoes/snickers.png";
import reebok from "../images/shoes/reebok.png";
import nike from "../images/shoes/nike.png";
// mens cloths
import menshirt from "../images/mens-cloths/shirt.jpg";
import mentshirt from "../images/mens-cloths/t-shitr.jpg";
import menpent from "../images/mens-cloths/pant.jpg";
import mennightdress from "../images/mens-cloths/nightdress.png";
// womens cloths
import womenshirt from "../images/women-cloths/women-shirt.jpg";
import womentshirt from "../images/women-cloths/women-tshirt.jpg";
import womenpent from "../images/women-cloths/women-jeans.png";
import womennightdress from "../images/women-cloths/women-nightdress.jpg";
// children cloths
import boycloth from '../images/children-cloths/small-boy-dress.png';
import girlcloth from '../images/children-cloths/small-girl-dress.jpg';
import childnightware from '../images/children-cloths/children-nightdress.jpg';
import newbornbaby from '../images/children-cloths/new-born-baby.png';

function Content() {
  return (
    <>
      <section id="krupali-isha-content">
        {/* our services  */}
        <div className="container p-5">
          <div className="row">
            <div className="col-md-4 shadow">
              <div className="row">
                <div className="col-4">
                  <img src={bestdeal} className="img-fluid mt-md-3" />
                </div>
                <div className="col-8 p-3">
                  <h5>Best Deals</h5>
                  <p>Find out what the best destinations in the World are as awarded by millions of
                    real...</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 shadow">
              <div className="row">
                <div className="col-4">
                  <img src={specialoffer} className="img-fluid mt-md-3" />
                </div>
                <div className="col-8 p-3">
                  <h5>Special Offers</h5>
                  <p>Find out what the best destinations in the World are as awarded by millions of real...</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 shadow">
              <div className="row">
                <div className="col-4">
                  <img src={newarriving} className="img-fluid mt-md-3" />
                </div>
                <div className="col-8 p-3">
                  <h5>New Arrivrng</h5>
                  <p>Find out what the best destinations in the World are as awarded by millions of real...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* sale */}
        <Container className="mt-2 sale">
          <Row>
            <div className="col-md-4 m-md-2 p-2 shadow ps-5">
              <h3 class=" mb-3">
                Select Categories <i className="bi bi-person"></i>
              </h3>
              <h5>Electronics</h5>
              <h5>Home & Kitchen</h5>
              <h5>Office Product</h5>
              <h5>Jewellery</h5>
              <h5>Beauty Products</h5>
              <h5>Video Games</h5>
              <h5>Shoes & Handbags</h5>
              <h5>Music Instruments</h5>
            </div>

            <div className="col-md-7 m-md-2 ms-md-5 p-2 mt-sm-5 shadow">
              <Row>
                <div className="d-flex justify-content-between aligh-item-center ">
                  <div>
                    <h1>Sale</h1>
                  </div>
                  <div>
                    <Button variant="primary" size="sm" >View all</Button>
                  </div>
                </div>
                <div className="col-4 ">
                  <div className="card  text-center">
                    <div className="card-body ">
                      <h5 className="card-title">Electronics</h5>
                      <img src={blutooth} className="img-fluid" alt="not found" />
                      <hr className="bg-dark" />
                      <p className="card-text">
                        <b>RS. 1199</b> &nbsp;<del>1599</del>
                      </p>
                      <a href="#">View details</a>
                    </div>
                  </div>
                </div>

                <div className="col-4 ">
                  <div className="card  text-center">
                    <div className="card-body ">
                      <h5 className="card-title">Men's Cloths</h5>
                      <img src={menshirt} className="img-fluid " alt="not found" />
                      <hr className="bg-dark" />
                      <p className="card-text">
                        <b>RS. 450</b> &nbsp;<del>600</del>
                      </p>
                      <a href="#">View details</a>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card  text-center">
                    <div className="card-body ">
                      <h5 className="card-title">Men's Cloths</h5>
                      <img src={womentshirt} className="img-fluid" alt="not found" />
                      <hr className="bg-dark" />
                      <p className="card-text">
                        <b>RS. 300</b> &nbsp;<del>450</del>
                      </p>
                      <a href="#">View details</a>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </Row>
        </Container>

        <Container className="mt-md-5 mt-sm-5 electronics">
          <Row>
            <div className="d-flex justify-content-between">
              <div>
                <h1>Electronics</h1>
              </div>
              <div>
                <Button variant="primary" size="sm" className="mt-md-3">View all</Button>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title"> Headphones</h5>
                  <img src={blutooth} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 1199</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Bluetooth Speaker</h5>
                  <img src={spaker} className="img-fluid " alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 899</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 ">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Smart Watch</h5>
                  <img src={watch} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 2999</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 ">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Earbuds</h5>
                  <img src={earbuds} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 1399</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>
          </Row>
        </Container>


        {/* shoes */}
        <Container className="mt-5 shoes">
          <Row>
          <div className="d-flex justify-content-between">
              <div>
                <h1>Shoes</h1>
              </div>
              <div>
                <Button variant="primary" size="sm" className="mt-md-3">View all</Button>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Reebok </h5>
                  <img src={reebok} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 2500</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Nike </h5>
                  <img src={nike} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 3000</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 ">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Puma </h5>
                  <img src={puma} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 3500</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 ">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Snickers</h5>
                  <img src={snickers} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 2500</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>
          </Row>
        </Container>


        {/* Mens Cloths */}
        <Container className="mt-5 mencloths">
          <Row>
          <div className="d-flex justify-content-between">
              <div>
                <h1>Men's Cloths</h1>
              </div>
              <div>
                <Button variant="primary" size="sm" className="mt-md-3">View all</Button>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Shirt</h5>
                  <img src={menshirt} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 450</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">T-shirt</h5>
                  <img src={mentshirt} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 400</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 ">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Pent</h5>
                  <img src={menpent} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 500</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 ">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Nightware</h5>
                  <img src={mennightdress} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 800</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>
          </Row>
        </Container>


        {/* Womens cloths */}
        <Container className="mt-5 womencloths">
          <Row>
          <div className="d-flex justify-content-between">
              <div>
                <h1>Women's Cloths</h1>
              </div>
              <div>
                <Button variant="primary" size="sm" className="mt-md-3">View all</Button>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Shirt</h5>
                  <img src={womenshirt} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 400</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">T-shirt</h5>
                  <img src={womentshirt} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 300</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mt-xs-4">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Jeans</h5>
                  <img src={womenpent} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 500</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mt-xs-4">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Nightware</h5>
                  <img src={womennightdress} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 850</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>
          </Row>
        </Container>

        {/* children cloths */}
        <Container className="mt-5 childrencloths">
          <Row>
          <div className="d-flex justify-content-between">
              <div>
                <h1>Children's Cloths</h1>
              </div>
              <div>
                <Button variant="primary" size="sm" className="mt-md-3">View all</Button>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Boy's Cloths</h5>
                  <img src={boycloth} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 800</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Girl's Cloths</h5>
                  <img src={girlcloth} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 1500</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 ">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">Nightware</h5>
                  <img src={childnightware} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 600</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 ">
              <div className="card  text-center">
                <div className="card-body ">
                  <h5 className="card-title">New-born-baby</h5>
                  <img src={newbornbaby} className="img-fluid" alt="not found" />
                  <hr className="bg-dark" />
                  <p className="card-text">
                    <b>RS. 1000</b>
                  </p>
                  <a href="#">View details</a>
                </div>
              </div>
            </div>
          </Row>
        </Container>


        {/* 50% off */}
        <div className="container mt-5">
          <h3 className="text-center">Top Deals</h3>
          <hr className="booking-form border-1 w-25 mx-auto border-dark" />
          <p className="text-center"></p>
          <div className="row d-flex justify-content-evenly">
            <div className="col-md-3 p-5 loc-destinations1 text-center rounded-4">
              <h2 className="text-white mt-3">Kitchen Ware</h2>
              <Button variant="outline-white" size="md" className="m-3 fs-5 fw-bold">Visit</Button>
            </div>
            <div className="col-md-3 p-5 loc-destinations3 text-center rounded-4">
              <h2 className="text-white mt-5 ">Fashion</h2>
              <Button variant="outline-white" size="md" className="m-3 fs-5 fw-bold">Visit</Button>
            </div>
            <div className="col-md-3 p-5 loc-destinations2 text-center rounded-4">
              <h2 className="text-white mt-3">Mobile Accessories</h2>
              <Button variant="outline-white" size="md" className="m-3 fs-5 fw-bold">Visit</Button>
            </div> 
          </div>
        </div>

        {/* discounted section */}
        <div className="container-fluid  mt-2 discounted-offer">
          <div className="text-overlay"></div>
          <h3 className="text-center text-white mt-5 p-5 pb-0">Get Upto 50% discount</h3>
          <p className="text-center text-white p-0 m-0 mt-0" style={{letterSpacing:"3px"}}>Incredible Sale for Incredible People</p>

          <div className="paragraph text-center mt-4">
            <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quis a, fuga tempora labore fugiat doloribus nihil voluptas voluptate provident? Mollitia id veritatis, consequuntur perferendis facere asperiores sed fugiat nam qui. Est repellat, qui assumenda quis veritatis sit magni maxime, placeat dolore ullam nesciunt maiores.</p>

            <p className="mt-5"> Temporibus suscipit veniam ipsa perspiciatis dignissimos corporis voluptatibus cum ut et dicta sequi aliquam quidem! Quos repudiandae obcaecati dolorum, inventore iusto, sunt modi alias laboriosam suscipit eum consequatur libero aliquam recusandae consequuntur molestiae accusantium officiis non reprehenderit velit. Perferendis quos asperiores excepturi tempore mollitia rerum quam recusandae, minus, cupiditate amet, officiis cumque sapiente iste minima?</p>
            <p className="">
            <Button>View all Offers</Button>

            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
