/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 14:12:06
 * @LastEditTime: 2019-10-11 17:40:12
 * @LastEditors: Please set LastEditors
 */
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject) {
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });

  return promise;
};

getJSON("/posts.json").then(
  function(json) {
    console.log("Contents: " + json);
  },
  function(error) {
    console.error("出错了", error);
  }
);

const p1 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("fail")), 3000);
});

const p2 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(p1), 1000);
});

p2.then(result => console.log(result)).catch(error => console.log(error));
// Error: fail
