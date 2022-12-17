import classNames from 'classnames/bind';
import styles from './BookShow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Rate, Avatar, Progress } from 'antd';
import { UserOutlined, LikeOutlined, DislikeOutlined, DeleteOutlined } from '@ant-design/icons';
import CSPACAT3 from '../../asset/images/CSPACAT3.png';
import Popup from '../../components/Popup';
import { useState } from 'react';

const cx = classNames.bind(styles);

function BookShow() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('column')}>
                    <div className={cx('container')}>
                        <aside className={cx('BookPage-LeftColumn')}>
                            <div className={cx('BookCover')}>
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1551980663i/43664228.jpg"
                                    alt="BP4"
                                />
                            </div>
                            <div className={cx('ActionButton')}>
                                <div className={cx('AddBtn')}>
                                    <button className={cx('Add')}>Thêm vào tủ sách</button>
                                    <button className={cx('Change-btn')} onClick={() => setShowPopup(true)}>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </button>
                                    <Popup trigger={showPopup} setTrigger={setShowPopup}>
                                        <div className={cx('popup-content')}>
                                            <h3>Chọn kệ tủ cho cuốn sách</h3>
                                            <div className={cx('StepShelving')}>
                                                <button className={cx('ButtonShelving')}>Muốn đọc</button>
                                                <button className={cx('ButtonShelving')}>Đang đọc đọc</button>
                                                <button className={cx('ButtonShelving')}>Đã đọc</button>
                                                <button className={cx('ButtonShelving')}>Ngừng đọc</button>
                                            </div>
                                            <div className={cx('DeleteBtn')}>
                                                <DeleteOutlined />
                                                <div>Bỏ khỏi tủ sách</div>
                                            </div>
                                        </div>
                                    </Popup>
                                </div>
                                <div className={cx('BuyBtn')}>
                                    <button className={cx('Add')}>Nơi bán</button>
                                </div>
                                <div className={cx('Rate')}>
                                    <Rate style={{ fontSize: 36 }} />
                                    <p>Xếp hạng quyển sách này</p>
                                </div>
                            </div>
                        </aside>
                        <section className={cx('BookPage-RightColumn')}>
                            <h1 className={cx('Title')}>Blue Period - Tập 4</h1>
                            <a className={cx('Author')} href="##">
                                Yamaguchi Tsubasa
                            </a>
                            <a href="#Rtg" className={cx('textStats')}>
                                <div id="RS" className={cx('RatingStats')}>
                                    <div className={cx('Rating')}>
                                        <Rate allowHalf disabled defaultValue={4.5} style={{ fontSize: 36 }} />
                                    </div>
                                    <div>
                                        <h1>4.55</h1>
                                    </div>
                                    <div className={cx('Statistic')}>
                                        <div>21,301</div>
                                        <div className={cx('space')}>Đánh giá</div>
                                    </div>
                                    <div className={cx('Statistic')}>
                                        <div>21,301</div>
                                        <div className={cx('space')}>Cảm nhận</div>
                                    </div>
                                </div>
                            </a>
                            <div className={cx('Summary')}>
                                <p>
                                    Yataro Yaguchi là một học sinh xuất sắc nhưng có lối sống buông thả, không mục đích.
                                    Một ngày nọ, tận mắt chiêm ngưỡng bức tranh của một chị lớp trên ở CLB Mỹ thuật,
                                    Yataro hoàn toàn bị hút hồn và lần đầu tiên trong đời, cậu đã tìm ra thứ mình thật
                                    sự đam mê và đặt mọi tâm huyết vào đó. Yataro quyết định tham gia vào CLB mỹ thuật
                                    và nuôi hy vọng thi vào trường ĐH mỹ thuật Tokyo danh tiếng. Thế nhưng, cậu liên tục
                                    vấp phải sự phản đối từ cha mẹ và bạn bè. Đứng trước tình thế khó xử này, Yataro đã
                                    quyết định tự mình thuyết phục mọi người bằng các bức vẽ đầy tâm huyết.
                                </p>
                                <br />
                                <p>
                                    Bộ truyện đã đạt giải Manga Taisho và giải thưởng Kodansha năm 2019. Năm 2020, bộ
                                    truyện tiếp tục đạt hai giải Manga Taisho và Kodansha, đồng thời nhận giải thưởng
                                    danh giá Tezuka Osamu.
                                </p>
                            </div>
                            <div className={cx('Info')}>
                                <p className={cx('InfoTitle')}>Thể loại:</p>
                                <p className={cx('InfoTag')}>
                                    Manga, Truyện tranh, Seinen, Mỹ Thuật, Đời thường, Giả tưởng
                                </p>
                            </div>
                            <br />
                            <div className={cx('Info')}>
                                <p className={cx('InfoTitle')}>Thể loại:</p>
                                <p className={cx('InfoContent')}>NXB Trẻ</p>
                            </div>
                            <br />
                            <div className={cx('Info')}>
                                <p className={cx('InfoTitle')}>Ngày xuất bản:</p>
                                <p>22/02/2019</p>
                            </div>
                            <br />
                            <div className={cx('Info')}>
                                <p className={cx('InfoTitle')}>Số trang:</p>
                                <p>248 trang</p>
                            </div>
                            <br />
                            <p className={cx('TieuDe')}>TỰA SÁCH CÙNG DANH MỤC</p>
                            <hr></hr>
                            <div className={cx('sameGenre')}>
                                <a href="##">
                                    <img className={cx('imgProduct')} src={CSPACAT3} alt="P1" />
                                </a>
                                <a href="##">
                                    <img className={cx('imgProduct')} src={CSPACAT3} alt="P1" />
                                </a>
                                <a href="##">
                                    <img className={cx('imgProduct')} src={CSPACAT3} alt="P1" />
                                </a>
                                <a href="##">
                                    <img className={cx('imgProduct')} src={CSPACAT3} alt="P1" />
                                </a>
                                <a href="##">
                                    <img className={cx('imgProduct')} src={CSPACAT3} alt="P1" />
                                </a>
                            </div>

                            <hr />

                            <h2 className={cx('ratingTitle')}>Đánh giá và cảm nhận</h2>
                            <div className={cx('Mine')}>
                                <h3>Của tôi</h3>
                                <div className={cx('MyReviewCard')}>
                                    <div className={cx('ReviewProfile')}>
                                        <Avatar size={60} icon={<UserOutlined />} />
                                        <div>
                                            <a className={cx('Name')} href="##">
                                                Nhã Trúc
                                            </a>
                                        </div>
                                        <div className={cx('ReviewInfo')}>
                                            <div>2</div>
                                            <div>
                                                <p>cảm nhận</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('WriteReview')}>
                                        <div className={cx('Rate')}>
                                            <Rate style={{ fontSize: 30 }} />
                                            <p>Xếp hạng quyển sách này</p>
                                        </div>
                                        <ah href="##">
                                            <button className={cx('write')}>Viết cảm nhận</button>
                                        </ah>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className={cx('Communicate')}>
                                <h3>Đánh giá của cộng đồng</h3>
                                <div id="Rtg" className={cx('ReviewsSectionStatistic')}>
                                    <div className={cx('RatingStats')}>
                                        <div className={cx('Rating')}>
                                            <Rate allowHalf disabled defaultValue={4.5} style={{ fontSize: 36 }} />
                                        </div>
                                        <div>
                                            <h1>4.55</h1>
                                        </div>
                                        <div className={cx('Statistic')}>
                                            <div>21,301</div>
                                            <div className={cx('space')}>Đánh giá</div>
                                        </div>
                                        <div className={cx('Statistic')}>
                                            <div>21,301</div>
                                            <div className={cx('space')}>Cảm nhận</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('HistogramBar')}>
                                    <div className={cx('TitleStar')}>5 sao</div>
                                    <div className={cx('ProgressBar')}>
                                        <Progress
                                            percent={63}
                                            size="big"
                                            status="active"
                                            showInfo={false}
                                            strokeColor={{ '0%': '#FADB14', '100%': '#FADB14' }}
                                            strokeWidth={12}
                                        />
                                    </div>
                                    <div className={cx('RatingHistogram')}>13,478 (63%)</div>
                                </div>
                                <div className={cx('HistogramBar')}>
                                    <div className={cx('TitleStar')}>4 sao</div>
                                    <div className={cx('ProgressBar')}>
                                        <Progress
                                            percent={30}
                                            size="big"
                                            status="active"
                                            showInfo={false}
                                            strokeColor={{ '0%': '#FADB14', '100%': '#FADB14' }}
                                            strokeWidth={12}
                                        />
                                    </div>
                                    <div className={cx('RatingHistogram')}>6,474 (30%)</div>
                                </div>
                                <div className={cx('HistogramBar')}>
                                    <div className={cx('TitleStar')}>3 sao</div>
                                    <div className={cx('ProgressBar')}>
                                        <Progress
                                            percent={5}
                                            size="big"
                                            status="active"
                                            showInfo={false}
                                            strokeColor={{ '0%': '#FADB14', '100%': '#FADB14' }}
                                            strokeWidth={12}
                                        />
                                    </div>
                                    <div className={cx('RatingHistogram')}>1,237 (63%)</div>
                                </div>
                                <div className={cx('HistogramBar')}>
                                    <div className={cx('TitleStar')}>2 sao</div>
                                    <div className={cx('ProgressBar')}>
                                        <Progress
                                            percent={1}
                                            size="big"
                                            status="active"
                                            showInfo={false}
                                            strokeColor={{ '0%': '#FADB14', '100%': '#FADB14' }}
                                            strokeWidth={12}
                                        />
                                    </div>
                                    <div className={cx('RatingHistogram')}>79 (1%)</div>
                                </div>
                                <div className={cx('HistogramBar')}>
                                    <div className={cx('TitleStar')}>1 sao</div>
                                    <div className={cx('ProgressBar')}>
                                        <Progress
                                            percent={1}
                                            size="big"
                                            status="active"
                                            showInfo={false}
                                            strokeColor={{ '0%': '#FADB14', '100%': '#FADB14' }}
                                            strokeWidth={12}
                                        />
                                    </div>
                                    <div className={cx('RatingHistogram')}>33 (1%)</div>
                                </div>
                            </div>
                            <div className={cx('ReviewList')}>
                                <div className={cx('ReviewerProfile')}>
                                    <div className={cx('ReviewProfile')}>
                                        <Avatar size={60} icon={<UserOutlined />} />
                                        <div>
                                            <a className={cx('Name')} href="##">
                                                Nhã Trúc
                                            </a>
                                        </div>
                                        <div className={cx('ReviewInfo')}>
                                            <div>2</div>
                                            <div>
                                                <p>cảm nhận</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('ReviewCardContent')}>
                                    <div className={cx('ReviewCard_Row')}>
                                        <div className={cx('ShelfStatus')}>
                                            <Rate disabled defaultValue={4} />
                                        </div>
                                        <div className={cx('TextDate')}>22/01/2019</div>
                                    </div>
                                    <div className={cx('TruncatedContent')}>
                                        <div className={cx('CommentText')}>
                                            In Volume 4 of Spy x Family, Anya steals the scene once more as she is
                                            promised a dog as a reward for achieving her first Stella Star at school. A
                                            day of shopping for a new addition is thrown into chaos when Twilight is
                                            called away as he was informed about an assassination plot against Minister
                                            Barintz.
                                        </div>
                                    </div>
                                    <div className={cx('SocialFooter_statsContainer')}>
                                        <div className={cx('LabelItemDT')}>
                                            114<span>Đồng tình</span>
                                        </div>
                                        <div className={cx('LabelItemKDT')}>
                                            10<span>Không đồng tình</span>
                                        </div>
                                    </div>
                                    <div className={cx('SocialFooter_actionsContainer')}>
                                        <div className={cx('ActionItemDT')}>
                                            <LikeOutlined />
                                            <span>Đồng tình</span>
                                        </div>
                                        <div className={cx('ActionItemKDT')}>
                                            <DislikeOutlined />
                                            <span>Đồng tình</span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookShow;
