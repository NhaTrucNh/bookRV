import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, message, Upload } from 'antd';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userApi } from '~/api/api';
import { DateConverter } from '~/helper/helper';
import styles from './AccountSetting.module.scss';

const cx = classNames.bind(styles);

const dateFormat = 'DD/MM/YYYY';
const uploadApi =
  process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD;

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

export default function AccountSetting() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [dob, setDob] = useState(null);
  const [aboutMe, setAboutMe] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  const [avatarLoading, setAvatarLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setAvatarLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setAvatar(info.file.response.url);
      getBase64(info.file.originFileObj, (url) => {
        setAvatarLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {avatarLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  useEffect(() => {
    if (Cookies.get('token') && localStorage.getItem('user')) {
      userApi
        .getSelf(Cookies.get('token'))
        .then((response) => {
          if (response?.data.code === 200) {
            const user = response.data.result;
            setName(user.name);
            setEmail(user.email);
            setDob(user.dateOfBirth && DateConverter(user.dateOfBirth).rawDate);
            setAboutMe(user.bio ? user.bio : '');
            setImageUrl(response.data.result.avatar);
            setAvatar(response.data.result.avatar);
          }
        })
        .catch((error) => {
          const msg = error.response.data.message ? error.response.data.message : 'Verify Failed';
          toast.error(msg);
          Cookies.remove('token');
          localStorage.removeItem('user');
          navigate('/login');
        });
    }
  }, [navigate]);

  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  useEffect(() => {
    if (name && email) {
      setLoading(false);
    }
  }, [name, email]);

  const onChange = (date, dateString) => {
    setDob(date.toDate());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      dateOfBirth: dob,
      bio: aboutMe,
      avatar,
    };

    userApi
      .updateProfile(data, Cookies.get('token'))
      .then((response) => {
        if (response?.data.code === 201) {
          toast.success('Cập nhật thành công');
        }
      })
      .catch((error) => {
        const msg = error.response.data.message ? error.response.data.message : 'Verify Failed';
        toast.error(msg);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          <h2 className={cx('title')}>Cài đặt tài khoản</h2>
          <a href="profile">Xem hồ sơ của tôi</a>
        </div>
        <div className={cx('content')}>
          <div className={cx('Form')}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" disabled="disabled" value={email} />

              <label htmlFor="username">Tên hiển thị</label>
              <input type="text" id="username" name="username" value={name} onChange={(e) => setName(e.target.value)} />

              <label htmlFor="avatar">Ảnh đại diện</label>

              <div className={cx('cover')}>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action={`${uploadApi}/user/upload-avatar`}
                  headers={{ Authorization: `Bearer ${Cookies.get('token')}` }}
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: '100%',
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </div>

              <label htmlFor="dob">Ngày sinh</label>
              {/* {dob ? ( */}
              <div className={cx('space')}>
                <DatePicker onChange={onChange} defaultValue={dob ? dayjs(dob) : null} format={dateFormat} />
              </div>
              <label htmlFor="aboutme">Về tôi</label>
              <textarea id="aboutme" name="aboutme" onChange={(e) => setAboutMe(e.target.value)} value={aboutMe}>
                {aboutMe}
              </textarea>

              <div className={cx('submit')}>
                <Button type="primary" htmlType="submit">
                  {' '}
                  Lưu{' '}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
