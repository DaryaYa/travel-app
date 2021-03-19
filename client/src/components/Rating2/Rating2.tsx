import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import './Rating2.scss';
import { UserResponseInterface } from '../../types/user.interface';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { UpdateStarsAction } from '../../store/action-creators/countryActionCreater';
import Spinner from '../Spinner/Spinner';

interface Rating2Interface {
  classNames?: string;
  arrStars: { user: UserResponseInterface; countStar: number }[];
  user?: UserResponseInterface;
  attrctId?: string;
  countryId: string;
}

const Rating2 = ({
  classNames,
  arrStars,
  attrctId,
  user,
  countryId,
}: Rating2Interface) => {
  const arrayRatingItem = [0, 0, 0, 0, 0];
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const [ratingValue, setRatingValue] = useState(0);
  const [ratingActiveWidth, setRatingActiveWidth] = useState(
    ratingValue / 0.05,
  );

  useEffect(() => {
    const defRatingValue =
      arrStars.reduce((prev, el) => (prev += el.countStar), 0) /
      arrStars.length;
    setRatingValue(defRatingValue || 0);
    setRatingActiveWidth((defRatingValue || 0) / 0.05);
  }, [arrStars]);

  const rating = useRef<HTMLDivElement>(null);

  const setRating = (e: React.MouseEvent<HTMLInputElement>) => {
    setRatingActiveWidth(Number(e.currentTarget.value) / 0.05);
  };

  const setRatingDefault = (e: React.MouseEvent<HTMLInputElement>) => {
    setRatingActiveWidth(ratingValue / 0.05);
  };

  const submitRating = async (e: React.MouseEvent<HTMLInputElement>) => {
    if (user) {
      const data = {
        user: user?._id,
        countStar: Number(e.currentTarget.value),
      };
      try {
        rating.current?.classList.remove('rating_disabled');
        setLoading(true);
        attrctId &&
          (await dispatch(UpdateStarsAction(countryId, attrctId, data)));

        setLoading(false);
      } catch (err) {}
    }
  };

  return (
    <div
      ref={rating}
      className={cn('rating', classNames, {
        rating_disabled: !user || loading,
      })}
    >
      {
        <div className="rating__body">
          {loading && <Spinner classNames="rating__spinner" />}
          <div className="rating__people">
            {arrStars
              .slice(-7)
              .reverse()
              .map(el => (
                <div className="rating__people-item" key={el.user._id}>
                  <div
                    className="rating__foto"
                    style={{
                      backgroundImage: `url('${el.user.imgSrc}')`,
                    }}
                  ></div>
                  <div className="rating__username">{el.user.username}</div>
                  <div className="rating__mark">{el.countStar}</div>
                </div>
              ))}
          </div>
          <div
            className="rating__active"
            style={{ width: `${ratingActiveWidth}%` }}
          ></div>
          <div className="rating__items">
            {arrayRatingItem.map((ref, idx) => (
              <input
                key={arrayRatingItem.length - idx}
                type="radio"
                value={idx + 1}
                name="rating"
                className="rating__item"
                onMouseEnter={setRating}
                onMouseLeave={setRatingDefault}
                onClick={submitRating}
              />
            ))}
          </div>
        </div>
      }
      <div className="rating__value">{ratingValue.toFixed(1)}</div>
    </div>
  );
};

export default Rating2;
