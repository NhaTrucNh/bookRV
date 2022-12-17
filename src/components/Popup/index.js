import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popup.module.scss';
import { CloseCircleOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

function Popup(props) {
    return props.trigger ? (
        <div className={cx('popup')}>
            <div className={cx('popupInner')}>
                <button className={cx('closeBtn')} onClick={() => props.setTrigger(false)}>
                    <CloseCircleOutlined />
                </button>
                {props.children}
            </div>
        </div>
    ) : (
        ''
    );
}

export default Popup;
