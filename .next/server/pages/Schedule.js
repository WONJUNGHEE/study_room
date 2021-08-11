(function() {
var exports = {};
exports.id = 896;
exports.ids = [896];
exports.modules = {

/***/ 922:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_Schedule; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "styled-components"
var external_styled_components_namespaceObject = require("styled-components");;
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_namespaceObject);
// EXTERNAL MODULE: ./components/Modal/Modal.tsx
var Modal = __webpack_require__(867);
;// CONCATENATED MODULE: ./components/Schedule/Inputmodal.tsx





function Inputmodal(props) {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const {
    0: modalOpen,
    1: setModalOpen
  } = (0,external_react_.useState)(false);
  const {
    onChange,
    change_table
  } = props;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    change_table();
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      closeModal();
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: openModal,
      children: "Change"
    }), /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
      open: modalOpen,
      close: closeModal,
      header: "\uC2A4\uCF00\uC904 \uAD00\uB9AC",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "input_data",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          name: "name",
          type: "text",
          placeholder: "\uC774\uB984",
          onChange: onChange,
          onKeyPress: handleKeyPress
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          name: "phone",
          type: "text",
          placeholder: "\uC804\uD654\uBC88\uD638",
          onChange: onChange,
          onKeyPress: handleKeyPress
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          name: "count",
          type: "text",
          placeholder: "\uC778\uC6D0",
          onChange: onChange,
          onKeyPress: handleKeyPress
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: closeModal,
          children: "\uBCC0\uACBD"
        })]
      })
    })]
  });
}

/* harmony default export */ var Schedule_Inputmodal = (Inputmodal);
;// CONCATENATED MODULE: ./components/Schedule/Notice.tsx





const Notice = () => {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const {
    0: ModalOpen,
    1: setModalOpen
  } = (0,external_react_.useState)(false);
  const {
    0: inputnotice,
    1: setInputnotice
  } = (0,external_react_.useState)("");
  const {
    0: noticelist,
    1: setNoticelist
  } = (0,external_react_.useState)(() => {
    if (typeof localStorage !== "undefined") {
      const init_list = localStorage.getItem("notice");
      return init_list !== null ? JSON.parse(init_list) : [];
    } else {
      return [];
    }
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setInputnotice("");
  };

  const inputchange = e => {
    setInputnotice(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      list_add();
    }
  };

  const list_add = () => {
    if (inputnotice !== "") {
      if (noticelist !== null) {
        setNoticelist([...noticelist, inputnotice]);
        localStorage.setItem("notice", JSON.stringify([...noticelist, inputnotice]));
      } else {
        setNoticelist([inputnotice]);
        localStorage.setItem("notice", JSON.stringify([inputnotice]));
      }

      setInputnotice("");
    }
  };

  const delete_button = e => {
    noticelist.splice(e.target.value, 1);
    setNoticelist([...noticelist]);
    localStorage.setItem("notice", JSON.stringify(noticelist));
  };

  const listrendering = () => {
    const result = [];
    const list = null;

    if (typeof localStorage !== "undefined") {
      const list = localStorage.getItem("notice");
    } else {
      const list = null;
    }

    let list_data;

    if (list !== null) {
      list_data = JSON.parse(list);
    }

    for (const index in list_data) {
      if (Object.prototype.hasOwnProperty.call(list_data, index)) {
        const data = list_data[index];
        result.push( /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [data, " ", /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "notice_btn",
            value: index,
            onClick: delete_button,
            children: "X"
          })]
        }, index));
      }
    }

    return result;
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: openModal,
      children: "\uC804\uB2EC \uC0AC\uD56D"
    }), /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
      open: ModalOpen,
      close: closeModal,
      header: "\uC804\uB2EC \uC0AC\uD56D",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "input_data",
        children: [listrendering(), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          name: "input_notice",
          value: inputnotice,
          placeholder: "\uC804\uB2EC \uC0AC\uD56D",
          onChange: inputchange,
          onKeyPress: handleKeyPress
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: list_add,
          children: "\uCD94\uAC00"
        })]
      })
    })]
  });
};

/* harmony default export */ var Schedule_Notice = (Notice);
;// CONCATENATED MODULE: ./components/Schedule/Schedule.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Schedule = () => {
  const {
    0: inputs,
    1: setInputs
  } = (0,external_react_.useState)({
    name: "",
    phone: "",
    count: ""
  });
  const {
    0: check,
    1: setCheck
  } = (0,external_react_.useState)(true);

  const onChange = e => {
    const {
      name,
      value
    } = e.target;
    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {
      [name]: value
    }));
  };

  const change_table = () => {
    for (let i = 9; i < 25; i++) {
      const a = window.localStorage.getItem(i.toString());
      let sch_data;

      if (a != null) {
        sch_data = JSON.parse(a);
      } else {
        return;
      }

      if (sch_data.using === true) {
        sch_data["using"] = false;
        sch_data["name"] = inputs.name;
        sch_data["phone"] = inputs.phone;
        sch_data["count"] = inputs.count;
        window.localStorage.setItem(`${i}`, JSON.stringify(sch_data));
      }
    }

    setInputs({
      name: "",
      phone: "",
      count: ""
    });
  };

  const schedule_delete = () => {
    for (let i = 9; i < 25; i++) {
      const a = window.localStorage.getItem(i.toString());
      let sch_data;

      if (a != null) {
        sch_data = JSON.parse(a);
      } else {
        return;
      }

      if (sch_data.using === true) {
        sch_data["using"] = false;
        sch_data["name"] = "";
        sch_data["phone"] = "";
        sch_data["count"] = "";
        window.localStorage.setItem(`${i}`, JSON.stringify(sch_data));
      }
    }

    setInputs({
      name: "",
      phone: "",
      count: ""
    });
  };

  const handlechange = e => {
    const a = window.localStorage.getItem(e.target.id);
    let time_use;

    if (a !== null) {
      time_use = JSON.parse(a);
    } else {
      return;
    }

    time_use.using === false ? time_use.using = true : time_use.using = false;

    if (check) {
      setCheck(false);
    } else {
      setCheck(true);
    }

    window.localStorage.setItem(e.target.id, JSON.stringify(time_use));
  };

  const rendering = () => {
    const result = [];

    if (false) {}

    return result;
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "schedule_body",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            className: "check",
            children: "\uCCB4\uD06C"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            className: "time",
            children: "\uC2DC\uAC04"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uC774\uB984"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uD578\uB4DC\uD3F0 \uBC88\uD638"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uC778\uC6D0"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
        children: rendering()
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "change_button",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Schedule_Inputmodal, {
        onChange: onChange,
        change_table: change_table
      }), /*#__PURE__*/jsx_runtime_.jsx(Schedule_Notice, {}), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: schedule_delete,
        children: "\uC0AD\uC81C"
      })]
    })]
  });
};

/* harmony default export */ var Schedule_Schedule = (Schedule);
;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./components/Schedule/Weather.tsx




 //32f4e1ebe302c6c3721c8c07d8065150 api 키

function Weather() {
  const {
    0: Data,
    1: setData
  } = (0,external_react_.useState)({
    temp: 0,
    humidity: 0,
    weather: "",
    weather_desription: "",
    weather_icon: "",
    wind_speed: "",
    city_name: "",
    clouds: ""
  });

  function weather_data() {
    return external_axios_default().get("https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=32f4e1ebe302c6c3721c8c07d8065150").then(response => setData({
      temp: Math.ceil((response.data.main.temp - 273.15) * 10) / 10,
      humidity: response.data.main.humidity,
      weather: response.data.weather[0].main,
      weather_desription: response.data.weather[0].description,
      weather_icon: response.data.weather[0].icon,
      wind_speed: response.data.wind.speed,
      city_name: response.data.name,
      clouds: response.data.clouds.all
    })).catch(error => console.log(error));
  } //30분 마다 날씨 업데이트


  (0,external_react_.useEffect)(() => {
    weather_data();
    setInterval(() => {
      weather_data();
    }, 1800000);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [Data.city_name, " \uC628\uB3C4 : ", Data.temp, "\xB0C"]
    })
  });
}

/* harmony default export */ var Schedule_Weather = (Weather);
;// CONCATENATED MODULE: external "moment"
var external_moment_namespaceObject = require("moment");;
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
;// CONCATENATED MODULE: ./components/Schedule/ClockContainer.tsx






function ClockContainer() {
  const timer = (0,external_react_.useRef)(null);
  const {
    0: be_time,
    1: setBe_time
  } = (0,external_react_.useState)(9);
  const {
    0: time,
    1: setTime
  } = (0,external_react_.useState)(external_moment_default()());
  (0,external_react_.useEffect)(() => {
    const id = setInterval(() => {
      setTime(external_moment_default()());

      if (document.getElementById(`time${external_moment_default()().hour()}`) && be_time !== external_moment_default()().hour()) {
        if (external_moment_default()().hour() === 0) {
          const timecur = document.getElementById("time24");

          if (timecur !== null) {
            timecur.style.background = "red";
          }
        } else {
          const timeb = document.getElementById(`time${external_moment_default()().hour()}`);

          if (timeb !== null) {
            timeb.style.background = "cadetblue";
          }
        }

        const settime = document.getElementById(`time${be_time}`);

        if (settime) {
          settime.style.background = "white";
          setBe_time(external_moment_default()().hour());
        }
      }
    }, 1000);
    timer.current = id;
    return () => {
      clearInterval(timer.current);
    };
  }, [be_time]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(TimerArea, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Area, {
      children: time.format("YYYY 년 MM 월 DD 일")
    }), /*#__PURE__*/jsx_runtime_.jsx(Area, {
      children: time.format("HH시 mm분 ss초")
    })]
  });
}

const TimerArea = (external_styled_components_default()).div`
  display: flex;
  justify-content: space-around;
`;
const Area = (external_styled_components_default()).div`
  width: 140px;
  margin-right: 10px;
`;
/* harmony default export */ var Schedule_ClockContainer = (ClockContainer);
;// CONCATENATED MODULE: ./pages/Schedule.tsx








function Schedule_main() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ocean",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "wave"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "wave"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Title, {
      children: "TOP \uB3C5\uC11C\uC2E4 Study Room Schedule "
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Headtimertemp, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Schedule_ClockContainer, {}), /*#__PURE__*/jsx_runtime_.jsx(Schedule_Weather, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(Schedule_Schedule, {})]
  });
}

const Headtimertemp = (external_styled_components_default()).div`
  display: flex;
  justify-content: space-between;
  width:100%
  font-size: 15px;
  margin-right: 30px;
  margin-left: 30px;
`;
const Title = (external_styled_components_default()).h2`
  text-align: center;
  margin-top: 50px;
`;
/* harmony default export */ var pages_Schedule = (Schedule_main);

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [867], function() { return __webpack_exec__(922); });
module.exports = __webpack_exports__;

})();