
import "./footer.scss";
import imageFooter from '~/assets/image/img-footer.png'

function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div className='row'>
            <div className="footer-right col-lg-9">
              <p>
                <b>
                  <a href="/">Xem phim online</a>
                </b>{" "}
                miễn phí chất lượng cao với phụ đề tiếng việt - thuyết minh - lồng
                tiếng. Mọt phim - Mot chill có nhiều thể loại phim phong phú, đặc
                sắc, nhiều bộ phim hay nhất - mới nhất.
              </p>
              <p>
                Website{" "}
                <b>
                  <a href="/">Motchill</a>
                </b>{" "}
                với giao diện trực quan, thuận tiện, tốc độ tải nhanh, thường xuyên
                cập nhật các bộ phim mới, motphim hứa hẹn sẽ đem lại những trải
                nghiệm tốt cho người dùng.
              </p>
            </div>
            <div className="footer-left col-lg-3 row footer-hide">
                <div className='col-lg-6'>
                    <p>Quy định</p>
                    <p>Điều khoản chung</p>
                    <p>Chính sách riêng tư</p>
                </div>
                <div className='col-lg-6'>
                    <p>Giới thiệu</p>
                   <a href="#"> <img src={imageFooter} /></a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
