import {
  faBars,
  faEnvelope,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import imageLogo from "~/assets/image/img_logo.png";
import "./Header.scss";
function Header() {
  return (
    <header>
      <div className="container header">
        <div className="row header-all">
          <div className="col-lg-4 header-logo">
            <img title="Mot Phim" src={imageLogo} />
          </div>
          <div className="col-lg-4 header-text">
            <input type="text" />
            <button>
              <i>
                <FontAwesomeIcon icon={faSearch} />
              </i>
            </button>
            <p>Công cụ tìm kiếm</p>
          </div>
          <div className="col-lg-4 header-log">
            <span className="siban">
              <a href="#">Đăng Nhập</a>
            </span>
            <span>
              <a href="#">Đăng Kí</a>
            </span>
          </div>

          <div className="headertwohide">
            <label for="nav-mobile-input">
              <button className="click">
                <FontAwesomeIcon icon={faBars} />
              </button>
            </label>
            <input type="checkbox" className="nav__input" id="nav-mobile-input"/>
           
            <div className="menu-mobi">
              <ul>
                <li>
                  <Link to="/">Trang Chủ</Link>
                  <i>
                    <FontAwesomeIcon icon={faPlus} />
                  </i>
                </li>
                <li>
                  <a>Thể Loại</a>
                  <i>
                    <FontAwesomeIcon icon={faPlus} />
                  </i>
                </li>
                <li>
                  <a>Quốc Gia</a>
                  <i>
                    <FontAwesomeIcon icon={faPlus} />
                  </i>
                </li>
                <li>
                  <a>Phim Mới</a>
                  <i>
                    <FontAwesomeIcon icon={faPlus} />
                  </i>
                </li>
                <li>
                  <a>Phim Bộ</a>
                  <i>
                    <FontAwesomeIcon icon={faPlus} />
                  </i>
                </li>
                <li>
                  <a>Phim Lẻ</a>
                  <i>
                    <FontAwesomeIcon icon={faPlus} />
                  </i>
                </li>
                <li>
                  <Link icon="/product">Phim Thuyết Minh</Link>
                  <i>
                    <FontAwesomeIcon icon={faPlus} />
                  </i>
                </li>
                <li>
                  <Link to="/product">Phim Chiếu Rạp</Link>
                  <i>
                    <FontAwesomeIcon icon={faPlus} />
                  </i>
                </li>
                <li>
                  <a>TV Show</a>
                  <i>
                    <FontAwesomeIcon icon={faPlus} />
                  </i>
                </li>
              </ul>
            </div>
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
      <nav className="hide-header">
        <div className="header-navbarall">
          <div className="header-navbar">
            <ul>
              <li>
                <Link to="/">TRANG CHỦ</Link>
              </li>
              <li id="category">
                THỂ LOẠI
                <div className="category">
                  <ul className="category1">
                    <li>
                      <Link to="/product">Cổ Trang-Thần Thoại</Link>
                    </li>
                    <li>
                      <a href="">Khoa Học-Viễn Tưởng</a>
                    </li>
                    <li>
                      <a href="">Thể Thao-Âm Nhạc</a>
                    </li>
                    <li>
                      <a href="">Bí Ẩn-Siêu Nhiên</a>
                    </li>
                  </ul>
                  <ul className="category2">
                    <li>
                      <a href="">Võ Thuật-Kiếm Hiệp</a>
                    </li>
                    <li>
                      <a href="#">Hình Sự-Chiến Tranh</a>
                    </li>
                    <li>
                      <a href="#">Kinh Dị-Ma</a>
                    </li>
                    <li>
                      <a href="#">Thuyết Minh</a>
                    </li>
                  </ul>
                  <ul className="category3">
                    <li>
                      <a href="#">Phiêu Lưu-Hành Động</a>
                    </li>
                    <li>
                      <a href="#">Tài Liệu-Khám Phá</a>
                    </li>
                    <li>
                      <a href="#">Gia Đình-Học Đường</a>
                    </li>
                    <li>
                      <a href="#">Lồng Tiếng</a>
                    </li>
                  </ul>
                  <ul className="category4">
                    <li>
                      <a href="#">Tâm Lý-Tình Cảm</a>
                    </li>
                    <li>
                      <a href="#">Văn Hóa-Tâm Linh</a>
                    </li>
                    <li>
                      <a href="#">TV Show</a>
                    </li>
                    <li>
                      <a href="#">Boy Love</a>
                    </li>
                  </ul>
                  <ul className="category5">
                    <li>
                      <a href="#">Hoạt Hình</a>
                    </li>
                    <li>
                      <a href="#">Hài Hước</a>
                    </li>
                    <li>
                      <a href="#">Siêu Nhân</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="header-nationall">
                QUỐC GIA
                <div className="nation">
                  <ul className="nation1">
                    <li>
                      <a href="">Trung Quốc</a>
                    </li>
                    <li>
                      <a href="">Đài Loan</a>
                    </li>
                  </ul>
                  <ul className="nation2">
                    <li>
                      <a href="">Hàn Quốc</a>
                    </li>
                    <li>
                      <a href="">Nhật Bản</a>
                    </li>
                  </ul>
                  <ul className="nation3">
                    <li>
                      <a href="">Thái Lan</a>
                    </li>
                    <li>
                      <a href="">Ấn Độ</a>
                    </li>
                  </ul>
                  <ul className="nation4">
                    <li>
                      <a href="">Hồng Kông</a>
                    </li>
                    <li>
                      <a href="">Canada</a>
                    </li>
                  </ul>
                  <ul className="nation5">
                    <li>
                      <a href="">Âu-Mỹ</a>
                    </li>
                    <li>
                      <a href="">Quốc Gia Khác</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="header-newfim">
                PHIM MỚI
                <div className="newfim">
                  <ul>
                    <li>
                      <a href="#">Phim 2024</a>
                    </li>
                    <li>
                      <a href="#">Phim 2023</a>
                    </li>
                    <li>
                      <a href="#">Phim 2022</a>
                    </li>
                    <li>
                      <a href="#">Phim 2021</a>
                    </li>
                    <li>
                      <a href="#">Phim 2020</a>
                    </li>
                    <li>
                      <a href="#">Phim 2019</a>
                    </li>
                    <li>
                      <a href="#">Phim 2018</a>
                    </li>
                    <li>
                      <a href="#">Phim 2017</a>
                    </li>
                    <li>
                      <a href="#">Phim 2016</a>
                    </li>
                    <li>
                      <a href="#">Phim 2015</a>
                    </li>
                    <li>
                      <a href="#">Phim 2014</a>
                    </li>
                    <li>
                      <a href="#">Phim 2013</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li title="Phim Bộ">
                <a href="#">PHIM BỘ</a>
              </li>
              <li title="Phim Lẻ">
                <a href="#">PHIM LẺ</a>
              </li>
              <li title="Phim Thuyết Minh">
                <a href="#">PHIM THUYẾT MINH</a>
              </li>
              <li title="Phim Chiếu Rạp">
                <a href="#">PHIM CHIẾU RẠP</a>
              </li>
              <li title="TV Show">
                <a href="#">TV SHOW</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <a className="message" href="#">
        <i>
          <FontAwesomeIcon icon={faEnvelope} />
        </i>
      </a>
    </header>
  );
}

export default Header;
