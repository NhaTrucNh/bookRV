import React from 'react';
import classNames from 'classnames/bind';
import styles from './ShowNews.module.scss';

const cx = classNames.bind(styles);

export default class shownews extends React.Component {
    render() {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className="newsshow">
                        <div className={cx('title')}>
                            <h2>
                                [THÔNG BÁO PHÁT HÀNH] CHUYỆN LẠ Ở BỆNH VIỆN TƯ NHÂN HIỆP TẾ ĐƯỜNG ĐỒNG HOA TRUNG bởi Nam
                                Lang
                            </h2>
                        </div>
                        <div className={cx('date')}>20/10/2021</div>
                        <hr />
                        <div className={cx('ct')}>
                            <img
                                src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/164909256_392422801926965_3604752747847229015_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=UPSKS5e-l2QAX8AgGQw&_nc_ht=scontent.fdad4-1.fna&oh=00_AfCwdtmKrEvJ7uC7FNmllAuqRrHwiApoFo-V7WBOZioeFQ&oe=63C52A3D"
                                alt=""
                            />
                            <div className={cx('text')}>
                                <p>
                                    Trong mỗi thành phố, nơi tập trung đông người sinh sống đều sẽ sản sinh tội nghiệt,
                                    những tội nghiệt này sẽ dồn hết về một góc nào đấy của thành phố đó, nơi chúng tập
                                    trung lại được gọi là “huyệt”. Nếu đã lỡ bước vào nơi đây, không có khả năng hóa
                                    giải, cũng chẳng thể thoát được, chỉ có thể chạy trốn không ngừng. Rất nhiều người
                                    chỉ do vô tình đã rơi vào nơi đó rồi cứ thế bị nuốt chửng, vĩnh viễn bị cầm tù ở chỗ
                                    ấy.
                                </p>
                                <br />
                                <p>
                                    Tôn Chính đến bệnh viện Hiệp Tế trên đường Đồng Hoa Trung để khám răng, trùng hợp
                                    gặp Lộ Hà cũng đến bệnh viện. Hai người bạn cũ gặp nhau, rồi không biết vì sao lại
                                    vô tình bị kéo vào huyệt.
                                </p>
                                <br />
                                <p>
                                    Không gian tối tăm, hai người chỉ có thể dựa vào nhau, từng bước từng bước tìm cách
                                    thoát ra ngoài. Chỉ có một chiếc đèn pin, một cuốn sổ ghi chép những lần chạy trốn
                                    của lớp người đi trước để tìm kiếm manh mối giữa trùng trùng lớp lớp ma quỷ ẩn hiện
                                    trong bóng tối.
                                </p>
                                <br />
                                <p>
                                    Tất cả chỉ là vô tình hay đã được sắp đặt từ trước? Liệu Tôn Chính và Lộ Hà có thể
                                    thoát ra khỏi “huyệt”?
                                </p>
                                <br />
                                <p>
                                    Theo bước chân của hai nhân vật chính, những bi kịch và bí ẩn kinh khủng nơi bệnh
                                    viện đã xưa cũ dần được hé lộ…
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
