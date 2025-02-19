import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/button";
import { Link } from "react-router-dom";
import "./product.scss";
import imageSapChieu1 from "~/assets/image/imagesapchieu/sapchieu1.jpg"
import imageSapChieu2 from "~/assets/image/imagesapchieu/sapchieu2.jpg"
import imageSapChieu3 from "~/assets/image/imagesapchieu/sapchieu3.jpg"
import imageSapChieu4 from "~/assets/image/imagesapchieu/sapchieu4.jpg"
import imageSapChieu5 from "~/assets/image/imagesapchieu/sapchieu5.jpg"
import imageProduct1 from "~/assets/image/imageproduct/product1.jpg"
import imageProduct2 from "~/assets/image/imageproduct/product2.jpg"
import imageProduct3 from "~/assets/image/imageproduct/product3.jpg"
import imageProduct4 from "~/assets/image/imageproduct/product4.jpg"
import imageProduct5 from "~/assets/image/imageproduct/product5.jpg"
import imageProduct6 from "~/assets/image/imageproduct/product6.jpg"
import imageProduct7 from "~/assets/image/imageproduct/product7.jpg"
import imageProduct8 from "~/assets/image/imageproduct/product8.jpg"
import imageProduct9 from "~/assets/image/imageproduct/product9.jpg"
import imageProduct10 from "~/assets/image/imageproduct/product10.jpg"
import imageProduct11 from "~/assets/image/imageproduct/product11.jpg"
import imageProduct12 from "~/assets/image/imageproduct/product12.jpg"
import imageProduct13 from "~/assets/image/imageproduct/product13.jpg"
import imageProduct14 from "~/assets/image/imageproduct/product14.jpg"
import imageProduct15 from "~/assets/image/imageproduct/product15.jpg"
import imageProduct16 from "~/assets/image/imageproduct/product16.jpg"
import imageProduct17 from "~/assets/image/imageproduct/product17.jpg"
import imageProduct18 from "~/assets/image/imageproduct/product18.jpg"
import imageProduct19 from "~/assets/image/imageproduct/product19.jpg"
import imageProduct20 from "~/assets/image/imageproduct/product20.jpg"
import imageProduct21 from "~/assets/image/imageproduct/product21.jpg"
import imageProduct22 from "~/assets/image/imageproduct/product22.jpg"
import imageProduct23 from "~/assets/image/imageproduct/product23.jpg"
import imageProduct24 from "~/assets/image/imageproduct/product24.jpg"

function Product() {
  return (
    <main id="main-two">
      <div className="main2">
        <div className="container infomaction">
          <div className="main-path">
            <p>
              Nhà Mot(MotChill) có địa chỉ duy nhất là
              <a href="#"> motchilli.net</a>, mọi trang khác đều là giả mạo!Xem
              phim lại <span>motchilli.net</span> là góp phần ủng hộ Subteam
            </p>
          </div>
          <div className="rectangular-box">
            <a href="#">MỌT CHILL /</a>
            <span> PHIM CỔ TRANG - THẦN THOẠI</span>
          </div>

          <div className="row bottom-imgnine">
            <div className="col-lg-9 wrapber">
              <div>
                <select className="select-box">
                  <option>--Sắp Xếp--</option>
                  <option>Ngày đăng phim</option>
                  <option>Tên phim</option>
                  <option>Năm sản xuất</option>
                  <option>Lượt xem</option>
                </select>
                <select className="select-box">
                  <option value="">-- Thể Loại --</option>
                  <option value="1">Cổ Trang - Thần Thoại</option>
                  <option value="2">Võ Thuật - Kiếm Hiệp</option>
                  <option value="3">Phiêu Lưu - Hành Động</option>
                  <option value="4">Tâm Lý - Tình Cảm</option>
                  <option value="5">Hoạt Hình</option>
                  <option value="6">Khoa Học - Viễn Tưởng</option>
                  <option value="7">Hình Sự - Chiến Tranh</option>
                  <option value="8">Tài Liệu - Khám Phá</option>
                  <option value="9">Văn Hóa - Tâm Linh</option>
                  <option value="10">Hài Hước</option>
                  <option value="11">Thể Thao - Âm Nhạc</option>
                  <option value="12">Kinh Dị - Ma</option>
                  <option value="13">Gia Đình - Học Đường</option>
                  <option value="14">TV Show</option>
                  <option value="15">Phim Chiếu Rạp</option>
                  <option value="16">Sitcom</option>
                  <option value="17">Thuyết Minh</option>
                  <option value="18">Lồng Tiếng</option>
                </select>
                <select className="select-box">
                  <option value="">-- Quốc gia --</option>
                  <option value="2">Trung Quốc</option>
                  <option value="3">Hàn Quốc</option>
                  <option value="4">Thái Lan</option>
                  <option value="5">Hồng Kông</option>
                  <option value="6">Âu - Mỹ</option>
                  <option value="7">Đài Loan</option>
                  <option value="8">Nhật Bản</option>
                  <option value="9">Ấn Độ</option>
                  <option value="10">Canada</option>
                  <option value="11">Khác</option>
                </select>
                <select className="select-box">
                  <option value="">-- Năm --</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                </select>
                <button className="btn-film">Lọc phim</button>
              </div>
              <ul id="img-ul1">
                <li className="img-right">
                  <span className="imformation-episode">
                    Full 24/24 Vietsub
                  </span>
                  <Link to="/detail">
                    <img src={imageProduct1} />
                  </Link>

                  <p>Tấn Giai Đích Chủ Mẫu</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Tập 16 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct2} />
                  </a>

                  <p>Gặp Lại Tiêu Đao</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Tập 20 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct3} />
                  </a>

                  <p>KIến Khanh Khanh</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Tập 16 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct4} />
                  </a>

                  <p>Tích Hoa Chỉ</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Tập 16 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct5} />
                  </a>

                  <p>Hồng Y Túy</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Full 39/39 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct6} />
                  </a>

                  <p>Dữ Phượng Hành</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Tập 10 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct7} />
                  </a>

                  <p>Khó Tìm</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Full 24/24 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct8} />
                  </a>

                  <p>Thỏ Tiên Vương Phi</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Full 24/24 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct9} />
                  </a>

                  <p>Sủng Phi Hoàng Đồ</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Tập 7 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct10} />
                  </a>

                  <p>Đại Tướng Quân</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Full 40/40 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct11
                    } />
                  </a>

                  <p>Liệt Diễm</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Full 28/28 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct12} />
                  </a>

                  <p>Uyển Uyển Như Mộng Tiêu</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Full 24/24 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct13} />
                  </a>

                  <p>Tử Xuyên : Quan Minh Tam Kiệt</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Full 32/32 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct14} />
                  </a>

                  <p>Hoa Gian Lệnh</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Full 18/18 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct15} />
                  </a>

                  <p>Đại Nội Mật Thám Chi Nhân Duyên kiếp</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Full 24/24 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct16} />
                  </a>

                  <p>Chấp Bút</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Full 24/24 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct17} />
                  </a>

                  <p>Chưởng Qũy Ca Ca Mau Đi Đi</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Full 25/25 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct18} />
                  </a>

                  <p>Giang Hồ Tuyệt Sắc Lục</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Full 24/24 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct19} />
                  </a>

                  <p>Kiếu Nguyệt Lưu Hỏa</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    HD Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct20} />
                  </a>

                  <p>Mạch Lộ Cuồng Đao</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Full 20/20 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct21} />
                  </a>

                  <p>Đoạt Kiêu</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    HD Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct22} />
                  </a>

                  <p>Địch Nhân Kiệt : Thông Thiên Huyền Ân</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    HD Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct23} />
                  </a>

                  <p>Hoa Thiên Cốt</p>
                </li>
                <li className="img-right">
                  <span className="imformation-episode">
                    Full 36/36 Vietsub
                  </span>
                  <a href="#">
                    <img src={imageProduct24} />
                  </a>

                  <p>Đại Lý Tự Thiếu Khanh Du</p>
                </li>
              </ul>
              <div className="paginnation">
                <button style={{backgroundColor: '#c58560'}} id='one'>
                  <a href="#">1</a>
                </button>
                <button>
                  <a href="#">2</a>
                </button>
                <button>
                  <a href="#">3</a>
                </button>
                <button>
                  <a href="#">4</a>
                </button>
                <button>
                  <a href="#">6</a>
                </button>
                <span>...</span>
                <button>
                  <a href="#">47</a>
                </button>
                <button>
                  <a href="#">Sau</a>
                </button>
              </div>
            </div>
            <div className="col-lg-3 img-left">
              <a href="#">
                <h1>PHIM SẮP CHIẾU</h1>
              </a>
              <ul className="fim-expected">
                <li className="img-small">
                  <a href="#">
                    <img src={imageSapChieu1} />
                  </a>
                  <p>
                    Dưới Họng Súng <br />
                    <span>2024</span>
                    <br />
                    <i>
                      {" "}
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i>
                      {" "}
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i>
                      {" "}
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i>
                      {" "}
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                  </p>
                </li>
                <li className="img-small">
                  <a href="#">
                    <img src={imageSapChieu2} />
                  </a>
                  <p>
                    Hồ Yêu Tiểu Hồng Nương : Trúc Nghiệp Thiên <br />
                    <span>2024</span>
                    <br />
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                  </p>
                </li>
                <li className="img-small">
                  <a href="#">
                    <img src={imageSapChieu3} />
                  </a>
                  <p>
                    Trộm Được Tướng Quân Nửa Ngày Nhàn <br />
                    <span>2023</span>
                    <br />
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                  </p>
                </li>
                <li className="img-small">
                  <a href="#">
                    <img src={imageSapChieu4} />
                  </a>
                  <p>
                    Thanh Xuân Trong Chiến Hỏa <br />
                    <span>2023</span>
                    <br />
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                  </p>
                </li>
                <li className="img-small">
                  <a href="#">
                    <img src={imageSapChieu5} />
                  </a>
                  <p>
                    Thao Thiết Kí <br />
                    <span>2023</span>
                    <br />
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                    <i>
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </i>
                  </p>
                </li>
                
                
              </ul>
              <div className="fim-trending row">
                <h1>TRENDING</h1>
                <span className="col-lg-4 day">Ngày</span>
                <span className="col-lg-4 week">Tuần</span>
                <span className="col-lg-4 month">Tháng</span>
                <div className="fim-interested">
                  <span className="number">1</span>
                  <div>
                    <span>
                      Đừng Rung Động Vì Anh
                      <br />
                    </span>
                    <span className="number-interested">
                      15 lượt quan tâm
                    </span>
                  </div>
                </div>
                <div className="fim-interested">
                  <span className="number">2</span>
                  <div>
                    <span>
                      Đừng Rung Động Vì Anh
                      <br />
                    </span>
                    <span className="number-interested">
                      15 lượt quan tâm
                    </span>
                  </div>
                </div>
                <div className="fim-interested">
                  <span className="number">3</span>
                  <div>
                    <span>
                      Đừng Rung Động Vì Anh
                      <br />
                    </span>
                    <span className="number-interested">
                      15 lượt quan tâm
                    </span>
                  </div>
                </div>
                <div className="fim-interested">
                  <span className="number">4</span>
                  <div>
                    <span>
                      Đừng Rung Động Vì Anh
                      <br />
                    </span>
                    <span className="number-interested">
                      15 lượt quan tâm
                    </span>
                  </div>
                </div>
                <div className="fim-interested">
                  <span className="number">5</span>
                  <div>
                    <span>
                      Đừng Rung Động Vì Anh
                      <br />
                    </span>
                    <span className="number-interested">
                      15 lượt quan tâm
                    </span>
                  </div>
                </div>
                <div className="fim-interested">
                  <span className="number">6</span>
                  <div>
                    <span>
                      Đừng Rung Động Vì Anh
                      <br />
                    </span>
                    <span className="number-interested">
                      15 lượt quan tâm
                    </span>
                  </div>
                </div>
                <div className="fim-interested">
                  <span className="number">7</span>
                  <div>
                    <span>
                      Đừng Rung Động Vì Anh
                      <br />
                    </span>
                    <span className="number-interested">
                      15 lượt quan tâm
                    </span>
                  </div>
                </div>
                <div className="fim-interested">
                  <span className="number">8</span>
                  <div>
                    <span>
                      Đừng Rung Động Vì Anh
                      <br />
                    </span>
                    <span className="number-interested">
                      15 lượt quan tâm
                    </span>
                  </div>
                </div>
                <div className="fim-interested">
                  <span className="number">9</span>
                  <div>
                    <span>
                      Đừng Rung Động Vì Anh
                      <br />
                    </span>
                    <span className="number-interested">
                      15 lượt quan tâm
                    </span>
                  </div>
                </div>
                <div className="fim-interested">
                  <span className="number">10</span>
                  <div>
                    <span>
                      Đừng Rung Động Vì Anh
                      <br />
                    </span>
                    <span className="number-interested">
                      15 lượt quan tâm
                    </span>
                  </div>
                </div>
              </div>
              <h1 id='keywords'>TỪ KHÓA NỔI BẬT</h1>
            </div>
          </div>
        </div>
      </div>
      <Button />
    </main>
  );
}

export default Product;
