import React, { useEffect } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import {
  setColorText,
  setDateStartText,
  setDateFinishText,
  setDateCountText,
  setRateText,
  setAdditionalText,
} from "../../../store/extra/action";

function Extra({
  id,
  listRate,
  changeProps,
  car,
  color,
  rate,
  additional,
  dateCount,
  setAdditionalText,
  setDateCountText,
  setColorText,
  setRateText,
  setDateStartText,
  setDateFinishText,
  dateStart,
  dateFinish,
}) {
  let colorsCar = car.colors && ["любой", ...car.colors];

  // const [dateStart, setDateStart] = useState("");
  // const [dateFinish, setDateFinish] = useState("");

  useEffect(() => {
    color && rate && dateCount && changeProps(true, "paramExtra");
  });
  useEffect(() => {
    dateStart && dateFinish && setDateCountText(diffDates());
  }, [dateStart, dateFinish]);

  function selectColor(color) {
    setColorText(color[0].toUpperCase() + color.slice(1));
  }

  function selectAdditional(index) {
    setAdditionalText(
      additional.map((item, id) => {
        if (id === index) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  }

  function diffDates() {
    if (dateStart) {
      let diffDate = Math.floor(
        new Date(new Date(dateFinish) - new Date(dateStart)) / (1000 * 60 * 60)
      );
      if (diffDate % 24 == 0) {
        return `${diffDate / 24}д`;
      } else {
        let dif = diffDate % 24;
        if (diffDate < 24) {
          return `${Math.floor(dif)}ч`;
        }
        return `${(diffDate - dif) / 24}д ${Math.floor(dif)}ч`;
      }
    }
  }

  return (
    <div
      className={classnames("order__content__extra", {
        disabled: id !== 2,
      })}>
      <div className="extra__form">
        <div className="extra__form__color">
          <p>Цвет</p>

          {colorsCar &&
            colorsCar.map((item, id) => (
              <div key={`${id}_${item}`}>
                <input
                  type="radio"
                  id={`m${id}`}
                  name="color"
                  onClick={() => selectColor(item)}
                />
                <label htmlFor={`m${id}`}>
                  <span />
                  {item[0].toUpperCase() + item.slice(1)}
                </label>
              </div>
            ))}
        </div>
        <div className="extra__form__date">
          <p>Дата аренды</p>
          <div>
            <label>С</label>
            <input
              type="datetime-local"
              value={dateStart}
              onChange={(e) => setDateStartText(e.target.value)}
            />
          </div>
          <label>По</label>
          <input
            type="text"
            type="datetime-local"
            value={dateFinish}
            min={dateStart}
            onChange={(e) => setDateFinishText(e.target.value)}
          />
        </div>
        <div className="extra__form__rate">
          <p>Тариф</p>
          {listRate &&
            listRate.map((item, id) => {
              return (
                <>
                  <div className="wrap" key={item.id}>
                    <input
                      type="radio"
                      id={`t${id}`}
                      name="rate"
                      onClick={() => setRateText(item)}
                    />
                    <label htmlFor={`t${id}`}>
                      <span />
                      {`${item.rateTypeId.name}, ${item.price}₽/${item.rateTypeId.unit}`}
                    </label>
                  </div>
                </>
              );
            })}
        </div>
        <div className="extra__form__additional">
          <p>Доп услуги</p>
          {additional.map((item, id) => {
            return (
              <div className="additional__checkbox" key={`${id}_${item.props}`}>
                <input
                  type="checkbox"
                  className="additional__checkbox__custom"
                  id={item.props}
                  defaultChecked={item.checked}
                  onChange={() => selectAdditional(id)}
                />
                <label htmlFor={item.props}>
                  <span />
                  {`${item.name}, ${item.price}p`}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    color: state.ext.color,
    dateStart: state.ext.dateStart,
    dateFinish: state.ext.dateFinish,
    rate: state.ext.rate,
    additional: state.ext.additional,
    dateCount: state.ext.dateCount,
    car: state.mod.selectCar,
  };
};
const mapDispatchToProps = {
  setColorText,
  setDateStartText,
  setDateFinishText,
  setRateText,
  setAdditionalText,
  setDateCountText,
};

export default connect(mapStateToProps, mapDispatchToProps)(Extra);
