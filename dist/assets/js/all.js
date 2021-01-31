"use strict";

// // 1.設一個變數把API的URL存起來
// let url= "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-E07F42AC-0591-4435-BE58-C3A36CC97440&locationName=%E5%AE%9C%E8%98%AD%E7%B8%A3,%E8%8A%B1%E8%93%AE%E7%B8%A3,%E8%87%BA%E6%9D%B1%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E6%A1%83%E5%9C%92%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82,%E5%9F%BA%E9%9A%86%E5%B8%82,%E6%96%B0%E7%AB%B9%E5%B8%82,%E8%8B%97%E6%A0%97%E7%B8%A3,%E5%BD%B0%E5%8C%96%E7%B8%A3,%E5%8D%97%E6%8A%95%E7%B8%A3,%E9%9B%B2%E6%9E%97%E7%B8%A3,%E5%98%89%E7%BE%A9%E7%B8%A3,%E5%98%89%E7%BE%A9%E5%B8%82,%E5%B1%8F%E6%9D%B1%E7%B8%A3&elementName=";
// // 2.new一個XMLHttpRequest物件(以此物件的方法進行資料請求)
// let xhr = new XMLHttpRequest();
// // 3.以GET方法開啟一個請求
// //open('Method',API的URL,預設值為true非同步進行)
// xhr.open('GET',url,true);
// // 4.送出請求(若為GET參數不填或填null)
// xhr.send();
// xhr.onload = function(){
//   var dataset = JSON.parse(this.responseText);
//   console.log(dataset);
// }
fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-E07F42AC-0591-4435-BE58-C3A36CC97440&locationName=%E5%AE%9C%E8%98%AD%E7%B8%A3,%E8%8A%B1%E8%93%AE%E7%B8%A3,%E8%87%BA%E6%9D%B1%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E6%A1%83%E5%9C%92%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82,%E5%9F%BA%E9%9A%86%E5%B8%82,%E6%96%B0%E7%AB%B9%E5%B8%82,%E8%8B%97%E6%A0%97%E7%B8%A3,%E5%BD%B0%E5%8C%96%E7%B8%A3,%E5%8D%97%E6%8A%95%E7%B8%A3,%E9%9B%B2%E6%9E%97%E7%B8%A3,%E5%98%89%E7%BE%A9%E7%B8%A3,%E5%98%89%E7%BE%A9%E5%B8%82,%E5%B1%8F%E6%9D%B1%E7%B8%A3&elementName=').then(function (response) {
  return response.json();
}).then(function (weatherData) {
  console.log(weatherData);
  var Location = weatherData.records.locations[0].location;
  console.log(Location);
  Location.forEach(function (element) {
    var Name = element.locationName;
    var WX = element.weatherElement[6].time[0].elementValue[0].value;
    var POP = element.weatherElement[0].time[0].elementValue[0].value;
    var MinT = element.weatherElement[8].time[0].elementValue[0].value;
    var MaxT = element.weatherElement[12].time[0].elementValue[0].value;
    var img_src;
    var Suggest;

    if (POP == 0) {
      img_src = "https://image.flaticon.com/icons/svg/578/578153.svg";
      Suggest = '可以出去玩';
    } else if (POP < 25) {
      img_src = "https://image.flaticon.com/icons/svg/578/578116.svg";
      Suggest = '建議準備雨具，以備不時之需';
    } else if (POP < 50) {
      img_src = "https://image.flaticon.com/icons/svg/578/578118.svg";
      Suggest = '建議要攜帶雨具';
    } else {
      img_src = "https://image.flaticon.com/icons/svg/578/578132.svg";
      Suggest = '記得攜帶雨具';
    }

    var Card = document.querySelector(".container");
    Card.innerHTML += "\n        <div class=\"card\">\n            <img src=\"".concat(img_src, "\" alt=\"\">\n            <div class=\"card-block\">\n                <h1>").concat(Name, "</h1>\n                <p>\u5929\u6C23\u73FE\u8C61\uFF1A</p>\n                <p>").concat(WX, "</p>\n                <p>").concat(MinT, "&#8451 ~ ").concat(MaxT, "&#8451</p>\n                <p>\u964D\u96E8\u6A5F\u7387\uFF1A").concat(POP, "%</p>\n                <p>").concat(Suggest, "</P>\n            </div>\n        </div>\n        ");
  });
});
//# sourceMappingURL=all.js.map
