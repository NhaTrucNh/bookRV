import React from 'react';
import classNames from 'classnames/bind';
import styles from './News.module.scss';
import { Pagination } from 'antd';

const cx = classNames.bind(styles);

export default class news extends React.Component {
    render() {
        return (
            <div className={cx('wrapper')}>
                <h2>Tin tức xuất bản</h2>
                <div className={cx('content')}>
                    <a href="shownews">
                        <div className={cx('news')}>
                            <img
                                src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/164909256_392422801926965_3604752747847229015_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=UPSKS5e-l2QAX8AgGQw&_nc_ht=scontent.fdad4-1.fna&oh=00_AfCwdtmKrEvJ7uC7FNmllAuqRrHwiApoFo-V7WBOZioeFQ&oe=63C52A3D"
                                alt=""
                            />
                            <div className={cx('item')}>
                                <div className={cx('date')}>20/10/2021</div>
                                <div className={cx('title')}>
                                    [THÔNG BÁO PHÁT HÀNH] CHUYỆN LẠ Ở BỆNH VIỆN TƯ NHÂN HIỆP TẾ ĐƯỜNG ĐỒNG HOA TRUNG bởi
                                    Nam Lang
                                </div>
                                <div className={cx('text')}>
                                    Trong mỗi thành phố, nơi tập trung đông người sinh sống đều sẽ sản sinh tội nghiệt,
                                    những tội nghiệt này sẽ dồn hết về một góc nào đấy của thành phố đó, nơi chúng tập
                                    trung lại được gọi là “huyệt”. Nếu đã lỡ bước vào nơi đây, không có khả năng hóa
                                    giải, cũng chẳng thể thoát được, chỉ có thể chạy trốn không ngừng.
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="shownews">
                        <div className={cx('news')}>
                            <img
                                src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/164909256_392422801926965_3604752747847229015_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=UPSKS5e-l2QAX8AgGQw&_nc_ht=scontent.fdad4-1.fna&oh=00_AfCwdtmKrEvJ7uC7FNmllAuqRrHwiApoFo-V7WBOZioeFQ&oe=63C52A3D"
                                alt=""
                            />
                            <div className={cx('item')}>
                                <div className={cx('date')}>20/10/2021</div>
                                <div className={cx('title')}>
                                    [THÔNG BÁO PHÁT HÀNH] CHUYỆN LẠ Ở BỆNH VIỆN TƯ NHÂN HIỆP TẾ ĐƯỜNG ĐỒNG HOA TRUNG bởi
                                    Nam Lang
                                </div>
                                <div className={cx('text')}>
                                    Trong mỗi thành phố, nơi tập trung đông người sinh sống đều sẽ sản sinh tội nghiệt,
                                    những tội nghiệt này sẽ dồn hết về một góc nào đấy của thành phố đó, nơi chúng tập
                                    trung lại được gọi là “huyệt”. Nếu đã lỡ bước vào nơi đây, không có khả năng hóa
                                    giải, cũng chẳng thể thoát được, chỉ có thể chạy trốn không ngừng.
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="shownews">
                        <div className={cx('news')}>
                            <img
                                src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/164909256_392422801926965_3604752747847229015_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=UPSKS5e-l2QAX8AgGQw&_nc_ht=scontent.fdad4-1.fna&oh=00_AfCwdtmKrEvJ7uC7FNmllAuqRrHwiApoFo-V7WBOZioeFQ&oe=63C52A3D"
                                alt=""
                            />
                            <div className={cx('item')}>
                                <div className={cx('date')}>20/10/2021</div>
                                <div className={cx('title')}>
                                    [THÔNG BÁO PHÁT HÀNH] CHUYỆN LẠ Ở BỆNH VIỆN TƯ NHÂN HIỆP TẾ ĐƯỜNG ĐỒNG HOA TRUNG bởi
                                    Nam Lang
                                </div>
                                <div className={cx('text')}>
                                    Trong mỗi thành phố, nơi tập trung đông người sinh sống đều sẽ sản sinh tội nghiệt,
                                    những tội nghiệt này sẽ dồn hết về một góc nào đấy của thành phố đó, nơi chúng tập
                                    trung lại được gọi là “huyệt”. Nếu đã lỡ bước vào nơi đây, không có khả năng hóa
                                    giải, cũng chẳng thể thoát được, chỉ có thể chạy trốn không ngừng.
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="shownews">
                        <div className={cx('news')}>
                            <img
                                src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/164909256_392422801926965_3604752747847229015_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=UPSKS5e-l2QAX8AgGQw&_nc_ht=scontent.fdad4-1.fna&oh=00_AfCwdtmKrEvJ7uC7FNmllAuqRrHwiApoFo-V7WBOZioeFQ&oe=63C52A3D"
                                alt=""
                            />
                            <div className={cx('item')}>
                                <div className={cx('date')}>20/10/2021</div>
                                <div className={cx('title')}>
                                    [THÔNG BÁO PHÁT HÀNH] CHUYỆN LẠ Ở BỆNH VIỆN TƯ NHÂN HIỆP TẾ ĐƯỜNG ĐỒNG HOA TRUNG bởi
                                    Nam Lang
                                </div>
                                <div className={cx('text')}>
                                    Trong mỗi thành phố, nơi tập trung đông người sinh sống đều sẽ sản sinh tội nghiệt,
                                    những tội nghiệt này sẽ dồn hết về một góc nào đấy của thành phố đó, nơi chúng tập
                                    trung lại được gọi là “huyệt”. Nếu đã lỡ bước vào nơi đây, không có khả năng hóa
                                    giải, cũng chẳng thể thoát được, chỉ có thể chạy trốn không ngừng.
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="shownews">
                        <div className={cx('news')}>
                            <img
                                src="https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/164909256_392422801926965_3604752747847229015_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=UPSKS5e-l2QAX8AgGQw&_nc_ht=scontent.fdad4-1.fna&oh=00_AfCwdtmKrEvJ7uC7FNmllAuqRrHwiApoFo-V7WBOZioeFQ&oe=63C52A3D"
                                alt=""
                            />
                            <div className={cx('item')}>
                                <div className={cx('date')}>20/10/2021</div>
                                <div className={cx('title')}>
                                    [THÔNG BÁO PHÁT HÀNH] CHUYỆN LẠ Ở BỆNH VIỆN TƯ NHÂN HIỆP TẾ ĐƯỜNG ĐỒNG HOA TRUNG bởi
                                    Nam Lang
                                </div>
                                <div className={cx('text')}>
                                    Trong mỗi thành phố, nơi tập trung đông người sinh sống đều sẽ sản sinh tội nghiệt,
                                    những tội nghiệt này sẽ dồn hết về một góc nào đấy của thành phố đó, nơi chúng tập
                                    trung lại được gọi là “huyệt”. Nếu đã lỡ bước vào nơi đây, không có khả năng hóa
                                    giải, cũng chẳng thể thoát được, chỉ có thể chạy trốn không ngừng.
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={cx('pagina')}>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
        );
    }
}
