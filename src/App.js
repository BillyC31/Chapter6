import './App.css';
import {useNavigate} from 'react-router-dom';
function App() {
    const navigate = useNavigate();
    const navigateToSearch = () => {
        // 👇️ navigate to /contacts
        navigate('/Search');
      };
  return (
    <div className="body "style={{"overflow-x":"hidden;"}}>
    <div className="atas">
        <div className="container px-2">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <a className="navbar-brand" href="#none" style={{"padding-left":" 50px;"}}><img src={require('./media/logo.png')} className="img-responsive" alt="logo"></img></a>
              <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end" tabindex="1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BCR</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-1">
                    <li className="nav-item px-3 py-2">
                      <a className="nav-link" href="#Service">Our Services</a>
                    </li>
                    <li className="nav-item px-3 py-2">
                        <a className="nav-link" href="#whyUS">Why Us</a>
                    </li>
                    <li className="nav-item px-3 py-2">
                        <a className="nav-link" href="#testimonial">Testimonial</a>
                    </li>
                    <li className="nav-item px-3 py-2">
                        <a className="nav-link" href="#FAQ">FAQ</a>
                    </li>
                    <li className="nav-item px-3 py-2">
                        <a className="nav-link active mx-auto" aria-current="page" href="#Register">Register</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            </div>
        <div className="row" style={{"margin-top": "50px"}}>
            <br></br>
            <div className="col-lg-6 col-sm-12 col-xs-12 my-3" style={{"padding":" 70px;"}}>
                <h1>Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <br></br>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <button type="button" className="btn btn-success" onClick={navigateToSearch} style={{"font-weight": "bold;"}}>Mulai Sewa Mobil</button>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12 my-1" style={{"text-align": "right;","margin-bottom": "0 !important;"}}>
               <img className="img-car" src={require("./media/img_car.png")} alt="mobil"></img>
            </div>
        </div>
    </div>
    <div className="kedua" id="Service">
        <div className="row">
            <div className="col-lg-6 myservice">
                <img className="mx-auto d-block" src={require("./media/img_service.png")} alt="service"></img>
            </div>
            <div className="col-lg-6">
                <div className="box">
                    <h1 style={{"font-weight": "bold;"}}>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                    <br></br>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <div className="list-check">
                        <img src={require("./media/Group 53.png")} alt="check" style={{"float": "left","margin-right": "20px;"}}  />
                        <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                    </div>
                    <div className="list-check">
                        <img src={require("./media/Group 53.png")} alt="check" style={{"float": "left","margin-right": "20px;"}}></img>
                        <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                    </div>
                    <div className="list-check">
                        <img src={require("./media/Group 53.png")} alt="check" style={{"float": "left","margin-right": "20px;"}}></img>
                        <p>Sewa Mobil Jangka Panjang Bulanan</p>
                    </div>
                    <div className="list-check">
                        <img src={require("./media/Group 53.png")} alt="check" style={{"float": "left","margin-right": "20px;"}}></img>
                        <p>Gratis Antar - Jemput Mobil di Bandara</p>
                    </div>
                    <div className="list-check">
                        <img src={require("./media/Group 53.png")} alt="check" style={{"float": "left","margin-right": "20px;"}}></img>
                        <p>Layanan Airport Transfer / Drop In Out</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="ketiga" id="whyUS">
        <h1>Why US?</h1>
        <br></br>
        <p className="why">Mengapa harus pilih Binar Car Rental?</p>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card my-3" style={{"width":"1fr;"}}>
                    <div className="card-body">
                        <img src={require("./media/icon_complete.png")} width="30" alt="" style={{"margin-bottom": "20px;"}}></img>
                        <h5 className="card-title">Mobil Lengkap</h5>
                        <p className="card-text">Tersedia banyak pilihan mobil kondisi masih baru, bersih dan terawat</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card my-3" style={{"width":"1fr;"}}>
                    <div className="card-body">
                        <img src={require("./media/icon_price.png")} width="30" alt="" style={{"margin-bottom": "20px;"}}></img>
                        <h5 className="card-title">Harga Murah</h5>
                        <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card my-3" style={{"width":"1fr;"}}>
                    <div className="card-body">
                        <img src={require("./media/icon_24hrs.png")} width="30" alt="" style={{"margin-bottom": "20px;"}}></img>
                        <h5 className="card-title">Layanan 24 jam</h5>
                        <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card my-3" style={{"width":"1fr;"}}>
                    <div className="card-body">
                        <img src={require("./media/icon_professional.png")} width="30" alt="" style={{"margin-bottom": "20px;"}}></img>
                        <h5 className="card-title">Sopir Profesional</h5>
                        <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="keempat" id="testimonial">
        <h2>Testimonial</h2>
        <br></br>
        <p>Berbagai review positif dari para pelanggan kami</p>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div id="carouselExampleControls" className="carousel slide mx-auto" style={{"max-width": "80%;"}} data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{"background-color":"aliceblue !important;" ,"color":"black;","text-align":"left;"}}>
                        <div className="row mx-4 my-5">
                            <div className="col-xl-2 m-auto">
                                <img src={require("./media/photo1-testimoni.png")} className="d-block testimonial-img m-auto" alt="Person"></img>
                            </div>
                            <div className="col-xl-10">
                                <div className="carousel-img">
                                    <img src={require("./media/Rate.png")} className="testimonial-rating" alt="Rating"></img>
                                </div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                <p className="testimonial-name">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{"background-color":"aliceblue !important;" ,"color":"black;","text-align":"left;"}}>
                        <div className="row mx-4 my-5">
                            <div className="col-xl-2 m-auto">
                                <img src={require("./media/photo2-testimoni.png")} className="d-block testimonial-img m-auto" alt="Person"></img>
                            </div>
                            <div className="col-xl-10">
                                <div className="carousel-img">
                                    <img src={require("./media/Rate.png")} className="testimonial-rating" alt="Rating"></img>
                                </div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””</p>
                                <p className="testimonial-name">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item bg-aliceblue" style={{"background-color":"aliceblue !important;" ,"color":"black;","text-align":"left;"}}>
                        <div className="row mx-4 my-5">
                            <div className="col-xl-2 m-auto">
                                <img src={require("./media/photo1-testimoni.png")} className="d-block testimonial-img m-auto" alt="Person"></img>
                            </div>
                            <div className="col-xl-10">
                                <div className="carousel-img">
                                    <img src={require("./media/Rate.png")} className="testimonial-rating" alt="Rating"></img>
                                </div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””</p>
                                <p className="testimonial-name">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" className="testimonial-media" href='#none'>&#8249;</a>
                    <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" className="testimonial-media" href='#none'>&#8250;</a>
                </div>
            </div>
        </div>
    </div>
    <div className="kelima">
        <div className="card">
            <div className="card-body">
                <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                <br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br>tempor incididunt ut labore et dolore magna aliqua. </p>
                <br></br>
                <button type="button" className="btn btn-success" style={{"font-weight": "bold;"}}>Mulai Sewa Mobil</button>
            </div>
          </div>
    </div>
    <div className="keenam" id="FAQ">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <h3>Frequently Asked Question</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="accordion" id="accordionSection">
                    <div className="accordion-item mb-3" style={{"border": "1px solid #d4d4d4;" ,"border-radius":"4px;"}}>
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                          Apa saja syarat yang dibutuhkan?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionSection">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                      </div>
                    </div>
                    <div className="accordion-item mb-3"  style={{"border": "1px solid #d4d4d4;" ,"border-radius":"4px;"}}>
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                            Berapa hari minimal sewa mobil lepas kunci?
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionSection">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                        </div>
                      </div>
                      <div className="accordion-item mb-3" style={{"border": "1px solid #d4d4d4;" ,"border-radius":"4px;"}}>
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                            Berapa hari sebelumnya sabaiknya booking sewa mobil?
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionSection">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                        </div>
                      </div>
                      <div className="accordion-item mb-3" style={{"border": "1px solid #d4d4d4;" ,"border-radius":"4px;"}}>
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                            Apakah Ada biaya antar-jemput?
                          </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionSection">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                        </div>
                      </div>
                      <div className="accordion-item mb-3" style={{"border": "1px solid #d4d4d4;" ,"border-radius":"4px;"}}>
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                            Bagaimana jika terjadi kecelakaan?
                          </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionSection">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                <ul>
                    <li>
                        <a href="#Service">Our Service</a>
                    </li>
                    <li>
                        <a href="#whyUS">Why Us</a>
                    </li>
                    <li>
                        <a href="#testimonial">Testimonial</a>
                    </li>
                    <li>
                        <a href="#FAQ">FAQ</a>
                    </li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                <p>Contact Us</p>
                <div className="row-lg-12">
                    <img src={require("./media/icon_facebook.png")} alt="facebook"></img>
                    <img src={require("./media/icon_instagram.png")} alt="instagram"></img>
                    <img src={require("./media/icon_twitter.png")} alt="Twitter"></img>
                    <img src={require("./media/icon_mail.png" )}alt="mal"></img>
                    <img src={require("./media/icon_twitch.png")} alt="Twitch"></img>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                <p>Copyright Binar 2022</p>
                <img src={require("./media/logo.png")} alt="logo"></img>
            </div>
        </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</div>
  );
}

export default App;
