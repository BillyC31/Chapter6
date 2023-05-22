import './App.css';
import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import {updateFilteredCars} from '../src/features/counter/carSlice'
import { useDispatch } from 'react-redux';

function Search() {
    const filteredCars = useSelector((state)=> state.car.filteredCars)
    const url ='https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json'
    const [cars,setCars] = useState([]);
    const [capacity, setcapacity] = useState([]);
    const [date, setdate] = useState([]);
    const [time, settime] = useState([]);
    const dispatch = useDispatch()

    const getCars = async ()=>{
        const response = await fetch(url);
        const dataCar = await response.json();
        setCars(dataCar);  
             
    }
    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data => { setCars(data); dispatch(updateFilteredCars(data))})
    },[dispatch])

    const Formatdate = (dateStr) => {
        const datetime =new Date(dateStr);
        const epochTime = datetime.getTime();
        return epochTime
    }
    const filterMobil=()=>{
        const datetimef = new Date(`${date} ${time}`);
        const epochTime =datetimef.getTime();

        const filterResult = cars.filter((i)=> i.capacity >= capacity && Formatdate(i.availableAt) >= epochTime)
        dispatch(updateFilteredCars(filterResult))
    }

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
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12 my-1" style={{"text-align": "right;","margin-bottom": "0 !important;"}}>
               <img className="img-car" src={require("./media/img_car.png")} alt="mobil"></img>
            </div>
        </div>
    </div>
    <section className="search__box">
            <div class="search__content"style={{"z-index":"2000"}}>
                <div className="input-group d-flex flex-column pe-2">
                    <p>Tipe Driver</p>
                    <select className="form-select" id="driver" required>
                        <option className="item" value="" selected hidden>
                            Pilih Tipe Driver
                        </option>
                        <option className="item" value="true">Dengan Sopir</option>
                        <option className="item" value="false">
                            Tanpa Sopir (Lepas Kunci)
                        </option>
                        </select>
                </div>
                <div className="input-group d-flex flex-column pe-2">
                    <p>Tanggal</p>
                    <input className="form-control" id="date" name="date" placeholder="Pilih Tanggal" type="date" value={date} onChange={(e)=> setdate(e.target.value)}/>
                </div>
                <div className="input-group d-flex flex-column pe-2">
                    <p>Waktu Jemput/Ambil</p>
                    <input className="form-control" id="time" name="time" placeholder="Disabled input" type="time" value={time} onChange={(e)=> settime(e.target.value)}/>
                </div>
                <div className="input-group d-flex flex-column pe-2" >
                    <p>Jumlah Penumpang(optional)</p>
                    <input className="form-control" id="capacity" type="number" placeholder="Jumlah Penumpang" value={capacity} onChange={(e)=> setcapacity(e.target.value)}/>
                </div>
                <button  className="btn btn-search" id="searchBtn" style={{"z-index":"2000"}} onClick={filterMobil}>
                    Cari Mobil
                </button>
            </div>
        </section>
        <div className="container result-container">
                <div className="result d-flex" id="cars-container">
                    {filteredCars.map((car)=>
                        <div className="col-lg-3 col-md-3 col-sm-12 mx-2">
                            <div className="card mx-0 my-4 g-0"  style={{ width:"18rem",boxShadow: "0px 0px 4px" }}>
                                <img src={require (`${car.image}`)} className="card-img-top img-fluid" alt={car.manufacture} style={{ height: "195px", borderRadius: "3px", objectFit: 'cover' }} />
                                <div className="card-body" style={{ fontSize: "14px" }}>
                                    <p className="card-title">{car.manufacture} {car.model}</p>
                                    <p className="fw-bold">Rp {car.rentPerDay} / hari</p>
                                    <p className="card-text" style={{ height: "90px" }}>{car.description}</p>
                                    <div className="my-2"><i className="bi bi-people me-2"></i>{car.capacity} Orang</div>
                                    <div className="my-2"><i className="bi bi-gear me-2"></i>{car.transmission}</div>
                                    <div className="my-2"><i className="bi bi-calendar4 me-2"></i>{car.year}</div>
                                    <a href="/#" className="btn btn-success text-white w-100 mt-2 fw-bold mt-4 " style={{ fontSize: "14px" }}>Pilih Mobil</a>
                                </div>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
    <div className="container" style={{"min-height":"100px"}}>
        <div className="row">
            <div className="row row-cols-auto justify-content-left" id="cars-container" style={{"margin-top": "0;", "padding-top": "0;"}}></div>
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
                    <img src={require("./media/icon_facebook.png")} alt="facebook"/>
                    <img src={require("./media/icon_instagram.png")} alt="instagram"/>
                    <img src={require("./media/icon_twitter.png")} alt="Twitter"/>
                    <img src={require("./media/icon_mail.png")} alt="mal"/>
                    <img src={require("./media/icon_twitch.png")} alt="Twitch"/>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                <p>Copyright Binar 2022</p>
                <img src={require("./media/logo.png")} alt="logo" />
            </div>
        </div>
    </footer>
</div>
  );
}

export default Search;
